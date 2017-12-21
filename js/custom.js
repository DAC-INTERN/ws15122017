$(document).ready(function () {

    $('#submit').click(function () {
        var text = $('#description').val();
        var imgSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURI(text);
        var color = $('#ColorPicker1').val();
        var backcolor= $('#ColorPicker2').val();
        var size = $('#imgsize').val();
        if (text=="" || color=="" || size=="")
        {
        	alert('You must write your text , pick your size and write out your color');
        }
        imgSrc+='&size='+size;
        console.log(imgSrc);
        $('#qrcode').attr('src', imgSrc);
        $('#qrcode').css('color',color);
        $('#qrcode').css('background-color',backcolor);
    });

});


