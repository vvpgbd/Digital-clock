let today = new Date();
let time = today.getHours();
let greet;


if (time > 0 && time <= 12) {
  greet = 'Good morning Sir';
} else if (time > 12 && time <= 18) {
  greet = 'Good afternoon Sir!';
} else if (time > 18 && time <= 24) {
  greet = 'Good evening sir!';
} else {
  greet = 'time in mars is.!';
}


let show = document.getElementById('message');
show.textContent = greet;