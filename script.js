

let days = document.getElementById('day')
let hours = document.getElementById('hour')
let minutes = document.getElementById('minute')
let seconds = document.getElementById('second')

let countDownDate = new Date("Dec 25, 2021 00:00:00").getTime()
console.log(countDownDate)

// update date every second

let timer = setInterval(()=> {
// today's date
  let now = new Date().getTime()

// difference between then and now
  let distance = countDownDate - now

  days.innerHTML = Math.floor(distance/ ( (1000 * 60 * 60 * 24)))
  hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);


// If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "Merry Christmas";
//   }

},1000)




























