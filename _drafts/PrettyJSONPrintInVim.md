---
layout: post
title: Pretty JSON print in VIM
tags: json Vim python ruby
---

Nur mal schnell eine JSON-Datei anschauen und dann das:

```json
{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[16.3731,48.2083]},"properties":{"prop0":"value0"}}]}
```

Um das Ganze etwas leserlicher zu gestalten, in Vim mit `:` in den Command-Modus wechseln

```vim
:%!python -m json.tool
```


ppjson
