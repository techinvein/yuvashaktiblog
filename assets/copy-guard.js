(function () {
  var style = document.createElement('style');
  style.textContent =
    'body{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}' +
    'input,textarea,select{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;}';
  document.head.appendChild(style);

  function isEditable(el) {
    return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);
  }

  document.addEventListener('contextmenu', function (e) {
    if (!isEditable(e.target)) e.preventDefault();
  });

  ['copy', 'cut', 'dragstart'].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      if (!isEditable(e.target)) e.preventDefault();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (isEditable(e.target)) return;
    if ((e.ctrlKey || e.metaKey) && ['c', 'x', 'a', 'u', 's'].indexOf(e.key.toLowerCase()) !== -1) {
      e.preventDefault();
    }
  });
})();
