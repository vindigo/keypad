$(document).ready(function () {

  var keypad = $('.keypad');
  var dots = $('.dot').toArray();
  var classname = 'filled';
  var dotCount = 0;

  keypad.on('click', handlekeypadClick);

  function handlekeypadClick(e) {
    if (e.target.classList.contains('number')) { addDot(dotCount); }
    if (e.target.classList.contains('btn-clear')) { clearAll(dots, classname); }
  }

  function addDot(index) {
    if (index < dots.length) {
      dots[index].classList.add('filled');
      dotCount++;
    }

    // if (index === dots.length - 1) {
    //   alert("next page");
    // }
  }

  function clearAll(el, className) {
    $(el).each(function () {
      $(this).removeClass(className);
      dotCount = 0;
    });
  }
});

