d3.playbooks.choroplethMap({
  width: 800,
  height: 800,
  elementId: 'superbugs-map',
  cssNamespace: 'superbugs-map',
  dataUrl: './data/e-coli.csv',
  geoDataUrl: './data/europe.topo.json',
  responsiveSvg: true,
  isTopojson: true,
  topojsonLayerName: 'europe_clipped',
  getId: f => f.properties.iso_a2,
  yExtent: [0, 64],
}).render().infobox({
  element: '#superbugs-map__infobox',
  template: `
    <h3>{name}</h3>
    <p class="infobox__data">{display_value}</p>
    <h4>Escherichia coli vs cephalosporins</h4>
    <p class="infobox__subtitle">Resistance to 3rd generation cephalosporins in percent.
    Of all infections with this bacterium, this percentage was resistant to this antibiotic.</p>
    <p class="infobox__eudata">EU: 12 %</p>
    <p class="infobox__annotation">ECDC Surveillance report 2014, except Poland (2013)</p>
  `
}).selector({
  element: '#superbugs-map__selector',
  getLabel: f => f.name
}).legend({
  element: '#superbugs-map__legend',
  wrapperTemplate: '<ul name="legend">{body}</ul>',
  itemTemplate: '<li style="background-color:{color}">{label} %</li>'
})
