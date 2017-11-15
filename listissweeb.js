$(document).ready(function() {


    var Menu = {

        body: $('.issmenubt'),
        button: $('.isswbutton'),
        tools: $('.isstools')

    };

    Menu.button.click(function () {
        Menu.body.toggleClass('menu--closed');
        Menu.body.toggleClass('menu--open');
        Menu.tools.toggleClass('tools--visible');
        Menu.tools.toggleClass('tools--hidden');
    });


});
