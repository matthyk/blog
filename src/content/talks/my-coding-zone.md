---
title: "GET oder POST? Wenn HTTP zurück schlägt"
description: "Talk about the plugin system of Fastify and how it can be used to build clean architectures."
date: "2026-07-10"
event: "My Coding Zone"
eventURL: "https://www.meetup.com/de-de/my-coding-zone/events/315457852/?slug=my-coding-zone&isFirstPublish=true"
---

I was guest on My Coding Zone, hosted by Gregor Biswanger, to talk about HTTP, API design and developer tooling. The stream explored why HTTP is more than just a transport layer and how better conformance to web standards can improve API quality, interoperability, and tooling. I will also share insights from building Thymian, a project focused on analyzing and testing HTTP API behavior.

**Original german description:**

Die größte Bedrohung für die Zuverlässigkeit Deiner API ist nicht immer ein komplexer Zero-Day-Exploit, sondern oft ein simples, kollektives Missverständnis grundlegender HTTP-Semantik.

In dieser Session gehen wir über die reine Theorie der HTTP-Konformität hinaus und zeigen die konkreten Folgen fehlerhafter HTTP-Semantik. Die Teilnehmenden erleben eine live durchgeführte, interaktive Hacking-Demonstration, bei der wir direkt auf ihren Geräten einen Cache-Poisoning-Angriff ausführen und eine normale Webanwendung in fließendes Klingonisch verwandeln.

Sobald die Mechanik des Angriffs verstanden ist, zerlegen wir das Problem im Detail. Wir analysieren den bösartigen Produktiv-Traffic und zeigen, wie solche Schwachstellen automatisch erkannt werden können. Abschließend beantworten wir die wichtigste Frage: Wie können wir diese Probleme verhindern, bevor sie die Produktion erreichen?

Basierend auf Erkenntnissen aus akademischer Forschung und praktischer Erfahrung zeigen wir, wie ein Bewusstsein für HTTP-Konformität in den API-Lifecycle integriert werden kann. So gelingt der Wandel von reaktiver Traffic-Analyse hin zu proaktivem API-Hardening.