
function makeGrid() {
  const rows = $('#rows').val();
  const columns = $('#columns').val();
  const allowed = controlDeviceWidth();
  const grid = $('#grid');
  const maxWidth = $('.maxWidth');
  // check value for maximum width
  if (columns>allowed) {
    maxWidth.text('Your Grid Width was over ' + allowed + '. Please enter again');
    maxWidth.css('color', 'red');
  } else {
    maxWidth.empty();
    grid.empty();
    // append rows and columns to grid
    for (let i=0; i<rows; i++)  {
      grid.append('<tr>');
      for (let j=0; j<columns; j++) {
          grid.append('<td></td>');
      }
      grid.append('</tr>');
    }
  }
}

function controlDeviceWidth() {
  const width = window.innerWidth;
  if (width<=768) {
    $('#columns').attr('max', 30);
    return 30;
  } else {
    return 70;
  }
}

function addColor(target) {
  const color = $('#color').val();
  target.css('background-color', color);
}
