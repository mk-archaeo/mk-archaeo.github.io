
// toggle dataAttribution from Eox
function toggle(e) { e.style.display = (e.style.display == 'block' ? 'none' : 'block'); }

// Some defaults for various map layers
layerDefaults = {
  requestEncoding: 'REST',
  attribution: '&copy; EOX IT Services GmbH',
  url: [ 'http://a.tiles.maps.eox.at/wmts/','http://b.tiles.maps.eox.at/wmts/','http://c.tiles.maps.eox.at/wmts/','http://d.tiles.maps.eox.at/wmts/','http://e.tiles.maps.eox.at/wmts/' ],
  matrixSet: 'WGS84',
  style: 'default',
  format: 'image/png',
  resolutions: [ 0.70312500000000000000,0.35156250000000000000,0.17578125000000000000,0.08789062500000000000,0.04394531250000000000,0.02197265625000000000,0.01098632812500000000,0.00549316406250000000,0.00274658203125000000,0.00137329101562500000,0.00068664550781250000,0.00034332275390625000,0.00017166137695312500 ],
  maxExtent: new OpenLayers.Bounds(-180,-85,180,90),
  displayOutsideMaxExtent: false,
  projection: new OpenLayers.Projection('EPSG:4326'),
  gutter: 0,
  buffer: 0,
  units: 'dd',
  transitionEffect: 'resize',
  isphericalMercator: false,
  isBaseLayer: false,
  wrapDateLine: true,
  zoomOffset: 0
};

var terrain = new OpenLayers.Layer.WMTS(OpenLayers.Util.applyDefaults({ name: 'Terrain', layer: 'terrain', isBaseLayer: true, attribution: "Terrain &copy; <a href='#' onClick='toggle(terrain_attribution)'>Various</a>" }, layerDefaults));
var map = new OpenLayers.Map({ div: 'map-head', projection: 'EPSG:4326', displayProjection: 'EPSG:4326', restrictedExtent: new OpenLayers.Bounds(-720, -85, 720, 90) });
map.addLayers([ terrain ]);
map.setCenter(new OpenLayers.LonLat(16.3731,48.2083), 10);

