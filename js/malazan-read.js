$(function () { 

    $('[data-toggle="tooltip"]').tooltip();

    setProgressBarAndCounterValues();

    setPageLastUpdatedValue();
});

function setProgressBarAndCounterValues() {

    var books = $(".book").length - $(".unreleased").length;
    var completed = $(".completed").length;

    setProgressCounterValue(books, completed);

    setTimeout(function() { setProgressBarValue(books, completed) }, 500);
}

function setProgressCounterValue(books, completed) {

    $("#progress-counter").html(completed + " / " + books);
}

function setProgressBarValue(books, completed) {

    var percent = Math.floor((completed / books) * 100);

    switch (percent) {
        case 0   : $("#percent-completed-progress-bar").addClass("progress-bar-danger"); break;
        case 100 : $("#percent-completed-progress-bar").addClass("progress-bar-success"); break;
        default  : $("#percent-completed-progress-bar").addClass("progress-bar-info"); break;
    }

    $("#percent-completed-progress-bar").attr("aria-valuenow", percent);
    $("#percent-completed-progress-bar").css("width", (percent < 4 ? 4 : percent) + "%");
    $("#percent-completed-progress-bar").html(percent + "%");
}

function setPageLastUpdatedValue() {

    var lastUpdated = new Date(document.lastModified);

    $("#last-updated").append(formatDate(lastUpdated));
}

function formatDate(date) {

    var month = (date.getMonth() + 1).toString();

    if (month.length == 1) 
        month = "0" + month;

    return date.getDate() + "-" + month + "-" + date.getFullYear();
}