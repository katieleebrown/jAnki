// let timeSecond = 90;
// const timeH = document.querySelector("h1");

// displayTime(timeSecond);

// const countDown = setInterval(() => {
//   timeSecond--;
//   displayTime(timeSecond);
//   if (timeSecond == 0 || timeSecond < 1) {
//     endCount();
//     clearInterval(countDown);
//   }
// }, 1000);

// function displayTime(second) {
//   const min = Math.floor(second / 60);
//   const sec = Math.floor(second % 60);
//   timeH.innerHTML = `
//   ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
//   `;
// }

// function endCount() {
//   timeH.innerHTML = "Time out";
// }

function timer(){
  var sec = 30
  var timer = setInterval(function(){
    document.getElementById('clock').innerHTML = '00: ' + sec
    sec--

    if (sec < 0){
      clearInterval(timer)
    }
  }, 1000)
}

// window.onload = timer()