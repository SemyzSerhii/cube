$(document).ready(function () {
  addListener($('section'));
});

function addListener(element) {
  element.on('click', function () {
    moveElement(this);
  });
}

function moveElement(block) {
  var clickedBlock = $(block);
  clickedBlock.remove();
  $('.row').append(clickedBlock);
  addListener(clickedBlock);
}
