d3.playbooks.superbugsMap = ({
  title,
  description,
  annotation,
  eudata,
  dataUrl,
  yExtent
}) => {

  const superbugsMap = d3.playbooks.choroplethMap({
    width: 800,
    height: 800,
    elementId: 'superbugs-map',
    cssNamespace: 'superbugs-map',
    geoDataUrl: './data/europe.topo.json',
    dataUrl,
    yExtent,
    nullColor: '#eee',
    responsiveSvg: true,
    isTopojson: true,
    topojsonLayerName: 'europe_clipped',
    getId: f => f.properties.iso_a2,
  })

  superbugsMap.render().infobox({
    element: '#superbugs-map__infobox',
    template: `
      <h3>{name}</h3>
      <p class="infobox__data">{display_value}</p>
      <h4>${title}</h4>
      <p class="infobox__subtitle">${description}</p>
      <p class="infobox__eudata">EU: ${eudata}</p>
      <p class="infobox__annotation">${annotation}</p>
    `
  }).selector({
    element: '#superbugs-map__selector',
    getLabel: f => f.name
  }).legend({
    element: '#superbugs-map__legend',
    wrapperTemplate: '<ul name="legend">{body}</ul>',
    itemTemplate: '<li style="background-color:{color}">{label} %</li>'
  })

}
