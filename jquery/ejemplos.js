$(function() {
  // acciones con el DOM listo

  $('p').css('color', 'red');
  $('p').css({
    'font-size': '1.5rem',
    'border': '1px solid green'
  });

  $('#parrafo').text('Bienvenidos a jQuery')

  $('#nombre').on('input', function(e) {
    var texto = e.target.value;
    $('#parrafo').text(texto);
  });

  $('#parrafo').click(function() {
    $(this).hide(3000);
  });
});



// $(document).ready(function() {

// });