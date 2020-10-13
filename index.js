$(document).ready(function() {    
    $('.navbar-nav>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $('#phone').on('click', function() {
        $('#phone').toggleClass('click')
    });
    $('#menu').on('click', function() {
        $('#menu').toggleClass('click')
    })
    
})


