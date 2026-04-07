---
title: "JSON:API, PATCH and Idempotency"
description: "A practical look at JSON:API update modeling, PATCH vs PUT, and why HTTP method semantics matter under network failure."
date: "Apr 07 2026"
---

I recently came across the JSON:API specification and spent some time reading how resource updates are modeled [1].

JSON:API is a specification for building HTTP APIs with a consistent JSON structure for resources, relationships, errors, and pagination [1]. The benefit is clear: client and server implementations can share conventions instead of reinventing payload shapes for every API.

Here is a simplified example of a resource document:

```json
{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "Hi!"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    }
  }
}
```

## Standardization is good - but update modeling deserves scrutiny

I see the advantages of JSON:API for standardized communication, but its update modeling has an important trade-off.

In their FAQ, the JSON:API authors explicitly explain why they use `PATCH` and not `PUT` for updates [2]. This is a valid design choice for partial updates, but it changes what clients can safely assume when failures happen in transit.

HTTP method semantics matter here. `PUT` is defined as idempotent in HTTP semantics [3]. `PATCH` is not inherently idempotent; it can be designed to be idempotent, but that depends on how the patch format and server behavior are implemented [4].

That difference becomes practical during network failures. Imagine a client sends an update and then loses the response:

```text
+------------------------------------------------+
|                     CLIENT                     |
+------------------------------------------------+
            |                        ^
            |                        | Or failed here?
            v                        |
+------------------------------------------------+
|                 INTERMEDIARIES                 |
+------------------------------------------------+
            |                        ^
            | Failed here?           |
            v                        |
+------------------------------------------------+
|                  ORIGIN SERVER                 |
+------------------------------------------------+
```

Loss can happen at multiple points: request dropped before reaching the server, response dropped on the way back, or timeout at any intermediate hop. With non-idempotent semantics, retries can risk unintended side effects.

A team can compensate with sophisticated retry logic at the transport or application layer. But if the operation is modeled as a correctly implemented idempotent `PUT`, a client can repeat the request and rely on the HTTP semantic contract that repeating it should not create undesired additional effects [3].

## Takeaway

This is another good example of why understanding HTTP semantics and mechanisms is valuable for both sides of an API.

As a client developer, you can gain robust failure-handling strategies by using method semantics intentionally. As an origin server developer, you need to implement those semantics correctly so clients can actually benefit from them.

## References

[1] JSON:API. *Introduction*. https://jsonapi.org/

[2] JSON:API. *FAQ: Where's PUT?* https://jsonapi.org/faq/#wheres-put

[3] Fielding, R., Nottingham, M., and Reschke, J. (2022). *RFC 9110: HTTP Semantics* (Idempotent Methods, Section 9.2.2). https://www.rfc-editor.org/rfc/rfc9110#section-9.2.2

[4] Dusseault, L., and Snell, J. (2010). *RFC 5789: PATCH Method for HTTP*. https://www.rfc-editor.org/rfc/rfc5789
