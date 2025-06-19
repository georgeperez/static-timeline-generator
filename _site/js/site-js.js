function show(el) {
  el.style.display = 'block';
  el.setAttribute('aria-hidden', false);
}

function hide(el) {
  el.style.display = 'none';
  el.setAttribute('aria-hidden', true);
}

function hideUnchecked() {
  /* Uncheck the "all" box if one of the filter boxes is unchecked */
  var allBoxes = document.querySelectorAll('input[type="checkbox"][name="filter"]');
  var checkedBoxes = document.querySelectorAll('input[type="checkbox"][name="filter"]:checked');
  if (checkedBoxes.length < allBoxes.length) {
    document.querySelector('input[type="checkbox"]#all').checked = false;
  } else {
    document.querySelector('input[type="checkbox"]#all').checked = true;
  }
  var activeFilters = [];
  checkedBoxes.forEach(function (filter) {
    activeFilters.push(filter.id);
  });
  var entries = document.getElementsByClassName('timeline-entry');
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var categories = [];
    try {
      categories = entry.dataset.category.split(',').filter((category) => category.length > 0);
    } catch {
      // Pass
    }
    if (categories.length && !isItemInCategories(categories, activeFilters)) {
      hide(entry);
    } else {
      show(entry);
    }
  }
  reflowEntries();
}

function checkAll() {
  var allIsChecked = document.querySelector('input[type="checkbox"]#all').checked;
  var checkboxes = document.querySelectorAll('input[type="checkbox"][name="filter"]');
  checkboxes.forEach(function (box) {
    box.checked = allIsChecked;
  });
  var entries = document.getElementsByClassName('timeline-entry');
  for (var i = 0; i < entries.length; i++) {
    if (allIsChecked)
      show(entries[i]);
    else
      hide(entries[i]);
  }
  reflowEntries();
}

function isItemInCategories(categories, visibleCategories) {
  return visibleCategories.some(function (id) {
    return categories.indexOf(id) >= 0;
  });
}

function reflowEntries() {
  var entries = document.querySelectorAll('.timeline-entry[aria-hidden="false"]');
  
  // Separate entries by position
  var leftEntries = [];
  var rightEntries = [];
  var centerEntries = [];
  
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var categories = entry.dataset.category || '';
    
    // Remove all positioning classes first
    entry.classList.remove('odd', 'even', 'first', 'timeline-left', 'timeline-right');
    
    // Determine position based on categories
    if (categories.includes('Palestina')) {
      entry.classList.add('timeline-right');
      rightEntries.push(entry);
    } else if (categories.includes('Puerto Rico')) {
      entry.classList.add('timeline-left');
      leftEntries.push(entry);
    } else {
      centerEntries.push(entry);
    }
  }
  
  // Apply positioning classes for left entries
  leftEntries.forEach(function(entry, index) {
    if (index === 0 && rightEntries.length === 0 && centerEntries.length === 0) {
      entry.classList.add('first');
    }
    entry.classList.add(index % 2 === 0 ? 'even' : 'odd');
  });
  
  // Apply positioning classes for right entries
  rightEntries.forEach(function(entry, index) {
    if (index === 0 && leftEntries.length === 0 && centerEntries.length === 0) {
      entry.classList.add('first');
    }
    entry.classList.add(index % 2 === 0 ? 'even' : 'odd');
  });
  
  // Apply positioning classes for center entries (fallback for entries without specific categories)
  centerEntries.forEach(function(entry, index) {
    if (index === 0 && leftEntries.length === 0 && rightEntries.length === 0) {
      entry.classList.add('first');
    }
    entry.classList.add(index % 2 === 0 ? 'even' : 'odd');
  });
  
  // Add first class to the very first visible entry overall
  if (entries.length > 0) {
    entries[0].classList.add('first');
  }
}

function onload() {
  /* We have JS! */
  var root = document.documentElement;
  root.classList.remove('no-js');
  
  /* Listen for filter changes */
  document.querySelectorAll('input[type="checkbox"][name="filter"]').forEach(function (box) {
    box.addEventListener('click', hideUnchecked);
  });
  document.querySelector('input[type="checkbox"]#all').addEventListener('click', checkAll);
  
  /* Flow entries */
  reflowEntries();
  
  // Clean up
  document.removeEventListener('DOMContentLoaded', onload);
}

if (document.readyState != 'loading') {
  onload();
} else {
  document.addEventListener('DOMContentLoaded', onload);
}