$(document).ready(function () {
    $('#btn').click(() => {
        $('div').toggleClass('alert');
    });

    $('h1').hover(function () {
        $(this).toggleClass('hidden');
    });

    $('#d1, #d2, #d3').css('text-align', 'center');
    $('#d2, h2').css({ 'margin': '30px', 'border': 'solid' });

    console.log($('div strong').attr('id', 'bold'))
    $('h2').attr({ draggable: true })



    //filtro
    $('div p').filter(':even').addClass('alert');
    $('div p').filter(':odd').addClass('dark');
    $('div p').eq(2).attr({ draggable: true })


    let listIDs = $('p')
        .map(function () {
            return $(this).attr('id');
        })
        .get();
        console.log(listIDs.join(', '))                 
});