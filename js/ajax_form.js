 $(document).ready(function() {
    $('#submit').click(e => {
        $('#tnx').animate({
            opacity: 1
        }, 2000);
        $('#tnx').animate({
            opacity: 0
        }, 2000);
    });

    $('form').on('submit', e => {
        e.preventDefault();
        const userName = $('input[name="name"]').val();
        const userEmail = $('input[name="e-mail"]').val();
        const userMsg = $('textarea').val();

        if (userName === '' && userEmail === '' && userMsg === '') {
            $('#tnx').addClass('empty');
            $('#tnx').removeClass('tnx');
            $('#tnx').html('Fields can\'t be empty');
            return;
        }
        else {
            $('#tnx').removeClass('empty');
            $('#tnx').addClass('tnx');
            $('#tnx').html('Thank you for message!');
        }

        $.ajax({
            url: 'https://formspree.io/mefis2.0@gmail.com',
            method: 'POST',
            data: {
                name: userName,
                email: userEmail,
                msg: userMsg
            },
            dataType: 'json'
        });
        $('input[name="name"]').val('');
        $('input[name="e-mail"]').val('');
        $('textarea').val('');
    });
});