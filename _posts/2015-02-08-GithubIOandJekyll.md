---
layout: post
title: Blogging with github.io und jekyll
tags: github jekyll
---

<!--
????
Was willst eigentlich schreiben?
-->

- {>>simple <<}
- schreiben in [Markdown]() {>>url einfügen <<}
    + Jekyll parst diese und macht daraus eine html-Datei
- alle Veränderungen werden festgehalten, da das Ganze auf [git]() basiert

- Möglichkeit mittels geoJSON-Dateien Karten einzubinden
    + siehe [Mapping geoJSON files on GitHub](https://help.github.com/articles/mapping-geojson-files-on-github/)

<script src="https://embed.github.com/view/geojson/mk-archaeo/mk-archaeo.github.io/master/assets/geoJsonFiles/example.geojson?height=300&width=500"></script>

- das entsprechende geojson-file sieht folgendermaßen aus:



```json
{"type": "FeatureCollection",
  "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [16.3731,48.2083]
        },
        "properties": {
        "prop0": "value0"
      }
    }
  ]
}
```


