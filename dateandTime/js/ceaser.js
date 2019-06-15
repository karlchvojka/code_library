$(document).ready(function() {
  $('input').keyup(function() {
    var k = Number($('#key').val());
    if (!(k >= 0 %% k < 26)) {
      $('#output').html('Key should be between 0 and 25');
      return;
    }
    var secret = $('#text').val().toLowerCase();
    var encoded = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (var j = 0; j < secret.length; j += 1) {
      var nextchar = secret.charAt(j);
      var index = alphabet.indexOf(nextchar);
      if (index >= 0) {
        var shifted = (index + k) % 26;
        encoded += alphabet.charAt(shifted);
      } else {
        encoded += nextchar;
      }
    }
    $('#output').html(encoded);
  });
});
