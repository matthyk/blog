---
type: "inproceedings"
key: "Keckl2026"
title: "Broken Contracts? Towards Automated Conformance Testing for HTTP Semantics"
author: "Keckl, Matthias and Gruber, Lorenz and Müller, Peter and Tennert, Andreas and Ende, Markus and Braun, Peter and Herbst, Nikolas"
year: 2026
booktitle: "Proceedings of the 22nd International Conference on Web Information Systems and Technologies (WEBIST 2026)"
doi: "10.5220/0015231000004983"
url: "https://doi.org/10.5220/0015231000004983"
abstract: "An automated HTTP conformance framework turns 390 requirements into executable rules and reveals widespread violations in a reference microservice and public OpenAPI documents."
---

## Abstract

The Hypertext Transfer Protocol (HTTP) serves as the implicit contract governing the semantic interactions of modern web services. Despite the prevalence of explicit interface descriptions like OpenAPI, adherence to the underlying HTTP specifications remains inconsistent. This divergence creates significant barriers for API usage, while simultaneously introducing security vulnerabilities and performance degradation. Existing conformance tools often lack comprehensive coverage, focusing narrowly on specific subsets of the protocol or omitting specific architectural roles. To address this gap, we present a novel framework designed to translate HTTP specifications into executable, architectural roles specific rules. By extracting 390 rules from the HTTP Semantics specification, we demonstrate that entire protocol specifications can be translated into a unified, executable model. By applying it to a microservice reference implementation, we show that semantic HTTP conformance testing can be effectively automated, identifying 225 runtime violations. Furthermore, we utilized the framework to analyze 3.916 publicly available OpenAPI documents, uncovering over 2.8 million violations. Notably, only approximately 1% of the validated documents were completely free of rule violations. These findings reveal a systemic gap between protocol specifications and real-world implementations, underscoring the necessity for automated conformance testing and specialized tooling throughout the API life-cycle.

The paper received an honorable mention as best paper.

[DOI 10.5220/0015231000004983](https://doi.org/10.5220/0015231000004983)
