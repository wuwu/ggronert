import instantsearch from 'instantsearch.js/es';
import {
  connectSearchBox
} from 'instantsearch.js/es/connectors';

import {
  searchBox, hits, pagination
} from 'instantsearch.js/es/widgets';

console.log('krauteratlas start II');
const $appId = 'QYX4R4E6V5';
const $apiKey = '59a2c8a7a9cea196a7a3c677b75cffe1';



window.onload = () => {
  const $hits = document.getElementById('hits');
  const $searchBox = document.getElementById('search-box');
  const theToggle = document.getElementById('toggle');
  
  if ($searchBox) {
    
    const search = instantsearch({
      indexName: 'krauter_compendium',
      searchClient: algoliasearch($appId, $apiKey),
      routing: true
    });

    search.addWidget(
      searchBox({
        container: $searchBox,
        placeholder: 'Search'
      })
    );
    search.addWidget(
      hits({
        container: $hits,
        templates: {
          empty: 'No results',
          // https://caniuse.com/#feat=template-literals
          item: '<div class="my-3"><h3><a href="{{ permalink }}">{{{ _highlightResult.title.value }}}</a></h3><div><span class="text-secondary">{{ lastmod_date }}</span> <span class="text-secondary">∙ {{ tags_text }}</span> {{#_highlightResult.description.value}}∙ {{ _highlightResult.description.value }}{{/_highlightResult.description.value}}</div><small class="text-muted">{{ summary }}</small></div>'
        },
        transformData: {
          item: function (data) {
            data.lastmod_date = new Date(data.lastmod * 1000).toISOString().slice(0, 10)
            // https://caniuse.com/#search=MAP
            const tags = data.tags.map(function (value) {
              return value.toLowerCase().replace(' ', '-')
            })
            data.tags_text = tags.join(', ')
            return data
          }
        }
      })
    );
    search.start();
  }

  theToggle.onclick = function () {
    toggleClass(this, 'on');
    return false;
  }
}



// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

