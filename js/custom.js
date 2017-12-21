$(document).ready(function () {
    $('#submit').click(function () {
        var imgSrc = 'https://api.qrserver.com/v1/create-qr-code/?';
        var width = $('#width').val().toString();
        var height = $('#height').val().toString();
        var text = $('#description').val();
        var color = $('#Color').val();
        var bgcolor = $('#BgColor').val();
        color = color.slice(1);
        bgcolor = bgcolor.slice(1);

        if (!text) {
            alert("Please, Enter Your Text !")
        } else {
            if ((!width) && (!height)) {
                alert("You do not choose size, So system will choose 250x250 by default !");
                imgSrc += 'data=' + encodeURI(text);
                imgSrc += '&size=' + width + 'x' + height;
                imgSrc += '&color=' + color;
                imgSrc += '&bgcolor=' + bgcolor;
                $('#qrcode').attr('src', imgSrc);
            } else {

                if (width === height) {
                    if ((parseInt(width) > 1000) || (width < 10)) {
                        alert("Width and Height must less than 1000 and more than 10")
                    } else {
                        imgSrc += 'data=' + encodeURI(text);
                        imgSrc += '&size=' + width + 'x' + height;
                        imgSrc += '&color=' + color;
                        imgSrc += '&bgcolor=' + bgcolor;
                        $('#qrcode').attr('src', imgSrc);
                    }
                } else {
                    alert("You must enter Width and Height equal");
                }
            }
        }
    })
});