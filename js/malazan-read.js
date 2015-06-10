$(setTimeout(function() { setProgressBarValue() }, 500));

function setProgressBarValue() {

    var books = $(".book").length;
    var read = $(".read").length;
    var percent = Math.floor((read / books) * 100);

    switch (percent) {
        case 0   : $("#read-percent-progress-bar").addClass("progress-bar-danger"); break;
        case 100 : $("#read-percent-progress-bar").addClass("progress-bar-success"); break;
        default  : $("#read-percent-progress-bar").addClass("progress-bar-info"); break;
    }

    $("#read-percent-progress-bar").attr("aria-valuenow", percent);
    $("#read-percent-progress-bar").css("width", (percent == 0 ? 2 : percent) + "%");
    $("#read-percent-progress-bar").html(percent + "%");
}