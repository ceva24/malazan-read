$(function () { $('[data-toggle="tooltip"]').tooltip() });

$(setProgressBarAndCounterValues());

function setProgressBarAndCounterValues() {

    var books = $(".book").length - $(".unreleased").length;
    var read = $(".read").length;

    setProgressCounterValue(books, read);

    setTimeout(function() { setProgressBarValue(books, read) }, 500);
}

function setProgressCounterValue(books, read) {

    $("#read-progress-counter").html(read + " / " + books);
}

function setProgressBarValue(books, read) {

    var percent = Math.floor((read / books) * 100);

    switch (percent) {
        case 0   : $("#read-percent-progress-bar").addClass("progress-bar-danger"); break;
        case 100 : $("#read-percent-progress-bar").addClass("progress-bar-success"); break;
        default  : $("#read-percent-progress-bar").addClass("progress-bar-info"); break;
    }

    $("#read-percent-progress-bar").attr("aria-valuenow", percent);
    $("#read-percent-progress-bar").css("width", (percent < 2 ? 2 : percent) + "%");
    $("#read-percent-progress-bar").html(percent + "%");
}