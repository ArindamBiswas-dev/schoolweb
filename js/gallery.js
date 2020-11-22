$('.a1').click(function () {
    var src = $(this).attr('src');
    $('.modal').modal('show');
    $('#modalImage').attr('src', src);
})

// document.querySelector('.a1').addEventListener('click', function () {
//     var src = document.querySelector(this).getAttribute("src");
//     $(".modal").modal("show");
//     document.querySelector('#modalImage').setAttribute('src', src);
// });