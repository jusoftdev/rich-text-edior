$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
$(document).ready(function(){
    const colorPalette = ['C0392B', 'E74C3C', 'D35400', 'E67E22', 'F39C12', 'F1C40F', '2ECC71', '27AE60',  '3498DB', '2980B9', '9B59B6', '8E44AD', '34495E', '2C3E50', '000000', '7F8C8D', '95A5A6', 'BDC3C7', 'ECf0F1', 'FFFFFF'],
        forePalette = $('.fore-palette'),
        backPalette = $('.back-palette'),
        editor = $('.editor');

    for (let i = 0; i < colorPalette.length; i++) {
    forePalette.append('<a href="#" data-command="foreColor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
    backPalette.append('<a href="#" data-command="backColor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  }
  $('.toolbar a').click(function(e) {
		e.preventDefault();
      const command = $(this).data('command');
      if (command === 'h1' || command === 'h2' || command === 'p') {
      document.execCommand('formatBlock', false, command);
    }
    if (command === 'foreColor' || command === 'backColor') {
        const color = $(this).data('value');
        document.execCommand($(this).data('command'), false, color);
			alert(color);
    }
		if (command === 'removeFormat') {
      document.execCommand('removeFormat', false, command);
    }
    if (command === 'createlink' || command === 'insertimage') {
      url = prompt('Enter the link here: ', 'http:\/\/');
			console.log(command + " " + url);
			document.execCommand($(this).data('command'), false, url);
      // document.execCommand($(this).data('command') && 'enableObjectResizing', false, url);
    } else document.execCommand($(this).data('command'), false, url);
  });
	$('.editorAria img').click(function(){
      document.execCommand('enableObjectResizing', false);
	});
	$("#getHTML").click(function(){
        const editorId = $(this).attr('get-data');
        const html = $("#" + editorId).find('.editorAria').html();
        alert(html);
	});
});