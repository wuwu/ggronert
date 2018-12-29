  // initialize instantsearch
  const search = instantsearch({
    appId: 'QYX4R4E6V5',
    apiKey: '59a2c8a7a9cea196a7a3c677b75cffe1',
    indexName: 'krauter_compendium',
    routing: true
  });
const $searchBox = document.querySelector('#searchBox input[type=search]');
const $hits = document.querySelector('#hits');
// search.addWidget(
//   instantsearch.widgets.hits({
//     container: $hits,
//     templates: {
//       empty: 'No results',
//       // https://caniuse.com/#feat=template-literals
//       item: '<div class="my-3"><h3><a href="{{ permalink }}">{{{ _highlightResult.title.value }}}</a></h3><div><span class="text-secondary">{{ lastmod_date }}</span> <span class="text-secondary">∙ {{ tags_text }}</span> {{#_highlightResult.description.value}}∙ {{ _highlightResult.description.value }}{{/_highlightResult.description.value}}</div><small class="text-muted">{{ summary }}</small></div>'
//     },
//     transformData: {
//       item: function (data) {
//         data.lastmod_date = new Date(data.lastmod * 1000).toISOString().slice(0, 10)
//         // https://caniuse.com/#search=MAP
//         const tags = data.tags.map(function (value) {
//           return value.toLowerCase().replace(' ', '-')
//         })
//         data.tags_text = tags.join(', ')
//         return data
//       }
//     }
//   })
// );

search.addWidget(
  instantsearch.widgets.searchBox({
    container: $searchBox,
    placeholder: 'Search'
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    // default is to scroll to 'body', here we disable this behavior
    // scrollTo: false
  })
);

window.onload = search.start();