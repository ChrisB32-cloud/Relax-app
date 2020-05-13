// 1 start
const container = document.getElementById('container');
const text = document.getElementById('text');

// 2
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

// 3
function breatheAnimation() {
  text.innerText = 'Breathe In';
  // 5
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
      // 6
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

// 4
setInterval(breatheAnimation, totalTime);
