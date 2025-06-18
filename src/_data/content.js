const header = '🇵🇷🇵🇸';
const footer = 'Desde el río hasta el mar, Palestina libre será.';
const entries = [
  {
    id: 'zionism-is-born',
    categories: ['Palestina'],
    color: 'red',
    date: '1897-08-29',
    title: 'Se establece sionismo como ideología política por Theodor Herzl',
    body: 'En el Primer Congreso Sionista, llevado acabo entre el 29 y 31 de agosto del 1897 en Basilea, Suiza se establece lo que hoy día se conoce como sionismo. En especifico, sionismo concentrado en el establecimiento de un hogar para Judios en el territorio de Palestina Histórica.',
    links: [
      {
        href: 'http://www.jewishvirtuallibrary.org/jsource/Zionism/First_Cong_&_Basel_Program.html',
        linkText: 'Fuente',
      },
    ],
  },
  {
    id: 'us-invasion-of-pr',
    categories: ['Puerto Rico'],
    color: 'azul-celeste',
    date: '1898-06-25',
    title: 'Los Estados Unidos de América invade Puerto Rico',
    body: 'Los Estados Unidos de América invade a Puerto Rico por la Bahía de Guánica, comenzando su campaña militar en el archipielago. En ese mismo año, se firma el Tratado de Paris de 1898 en donde España cede Cuba, Filipinas, Guam y Puerto Rico a los Estados Unidos.',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Cat',
        linkText: 'Fuente',
      },
    ],
  },
  {
    id: 'Balfour',
    categories: ['Palestina'],
    color: 'red',
    date: '1906-11-07',
    title: 'Declaración de Balfour',
    body: 'La Declaración de Balfour fue el escrito formal público por parte del gobierno brítanico en la Primera Guerra Mundial donde anuncia su apoyo para el establecimiento de un "hogar nacional" para el pueblo judío  en la región de Palestina Histórica.',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Dog',
        linkText: 'Dog',
      },
      {
        href: 'https://en.wikipedia.org/wiki/Canis',
        linkText: 'Canis',
      },
      {
        href: 'https://en.wikipedia.org/wiki/Lassie',
        linkText: 'Lassie',
      },
    ],
  },
  {
    id: 'ley-jones',
    categories: ['Puerto Rico'],
    color: 'azul-celeste',
    date: '1917-03-02',
    title: 'La ley Jones-Shafroth es firmada, otorgando ciudadania estadounidense a Boricuas',
    image: {
      link: 'http://place-puppy.com',
      src: 'https://place-puppy.com/300x300',
      alt: 'A placeholder puppy',
      caption: 'Puppy!',
    },
    body: 'La ley Jones-Shafroth establece el Senado de Puerto Rico, la posición del Comisiondo Residente como una cargo sujeto a elecciones, y otorga ciudadania estadounidense a Boricuas en Puerto Rico. ',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Dog',
        linkText: 'Dog',
      },
    ],
  },
];

// Page details
const pageTitle = 'Línea de Tiempo - Palestina y Puerto Rico';
const pageDescription = '';
const pageAuthor = '';
const showMirrorLinks = true; // Whether to show links to the Wayback Machine and archive.is mirrors.

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  showMirrorLinks,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
