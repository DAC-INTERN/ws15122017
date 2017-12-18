$(document).ready(function () {

    $('#submit').click(function () {
        var text = $('#description').val();
        var imgSrc = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURI(text);

        $('#qrcode').attr('src', imgSrc);
    });

});