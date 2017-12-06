
$(document).ready(function() {
  // message for device width
  $('.maxWidth').text('The maximum value for your device\'s width are: ' + controlDeviceWidth() + ' columns.');
  // submit button
  $('#btn-submit').click(makeGrid);
  // add color
  $('#grid').click(function(event) {
    addColor($(event.target));
  });
});
