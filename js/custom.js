$(document).ready(function () {

    $('#submit').click(function () {
        var size = $('#size').val();
        var text = $('#description').val();
        var color = $('#ColorPicker').val();
        if (!text) {
            alert("Please, Enter your text");
        } else {
            if (!size) {
                alert('You do not enter size, System will choose 300x300 by default');
                size = '300x300';
            };
            color = color.slice(1);
            var imgSrc = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURI(text);
            imgSrc += '&size=' + size;
            imgSrc += '&color=' + color;
            console.log(imgSrc);

            $('#qrcode').attr('src', imgSrc);
        }
    });
});
