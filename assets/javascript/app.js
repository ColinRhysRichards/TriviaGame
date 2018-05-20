//Timer
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

jQuery(function ($) {
  var oneMinute = 60 * 1,
    display = $('#time');
  startTimer(oneMinute, display);
});


function handleClick() {
  var amountCorrect = 0;

  for (var i = 0; i <= 15; i++) {
    var radios = document.getElementsByName('optradio' + i);
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.value == "correct" && radio.checked) {
        amountCorrect++;
      }

    }
  }
  var amountIncorrect = 0;
  for (var i = 0; i <= 15; i++) {
    var radios = document.getElementsByName('optradio' + i);
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.value != "correct" && radio.checked) {
        amountIncorrect++;
      }

    }
  }
  $("body").replaceWith("<div id= 'replacement'>" + "Correct Responses: " + amountCorrect + "</div>", "<div id = 'replacement'>" + "Incorrect Responses: " + amountIncorrect + "</div>");

}

