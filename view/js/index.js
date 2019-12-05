$(document).ready(function() {
    $('.card').click(function(){
        titulo = $(this).find('h5').html();
        parrafo = $(this).find('p').html();
        console.log(titulo);

        $('.jumbotron').find('h1').html(titulo);
        $('.jumbotron').find('p').html(parrafo);
    });
});