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
    title: 'Los Estados Unidos invade Puerto Rico',
    body: "Los Estados Unidos invade a Puerto Rico por la Bahía de Guánica, comenzando su campaña militar en el archipielago.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Cat',
        linkText: 'Fuente',
      },
    ],
  },
  {
    id: 'dog',
    categories: ['Palestina'],
    color: 'red',
    date: '1897-08-29',
    title: 'Puppies are great too',
    image: {
      link: 'http://place-puppy.com',
      src: 'https://place-puppy.com/300x300',
      alt: 'A placeholder puppy',
      caption: 'Puppy!',
    },
    body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
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
    id: 'dog',
    categories: ['Palestina'],
    color: 'red',
    date: '2021-05-01 23:55',
    title: 'Puppies are great too',
    image: {
      link: 'http://place-puppy.com',
      src: 'https://place-puppy.com/300x300',
      alt: 'A placeholder puppy',
      caption: 'Puppy!',
    },
    body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
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
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name
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
