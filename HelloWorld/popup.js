// whenever user hits the key inside #name input box
// change the header title text
$(function () {
    $('#name').keyup(function () {
        $('#greet').text('Hello ' + $('#name').val())
    })
});