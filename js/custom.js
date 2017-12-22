$(document).ready(function () {

    $('#submit').click(function () {

        var text = $('#description').val();
        var imgSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURI(text);
        var color = $('#ColorPicker1').val();
        var backcolor= $('#ColorPicker2').val();
        var size = $('#imgsize').val();

        //set color for api
        imgSrc += '&color=' + color.slice(1);
        imgSrc += '&bgcolor=' + backcolor.slice(1);

        if (text=="" || color=="" || size=="")
        {
        	alert('You must write your text , pick your size and write out your color');
        }
        imgSrc+='&size='+size;

        var qrCode = $('#qrcode');
        qrCode.attr('src', imgSrc);
    });

});


