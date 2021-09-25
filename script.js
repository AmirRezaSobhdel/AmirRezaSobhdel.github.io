function renderSeparators() {
  [...$('divider')].map((divider) =>
    $(divider).replaceWith(`<div class="sep">
    <h4 class="sep-title">${$(divider).attr('data-title')}</h4>
    <div class="sep-line"></div>
  </div>`)
  );
}

$(document).ready(function () {
  renderSeparators();
});
