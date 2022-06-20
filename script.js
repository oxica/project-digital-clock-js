setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hrDot = document.querySelector(".hr-dot");
  let minDot = document.querySelector(".min-dot");
  let secDot = document.querySelector(".sec-dot");

  h = h % 12;
  // h = (h > 12) ? h - 12 : h;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + "</br><span>hours</span>";
  minutes.innerHTML = m + "</br><span>minutes</span>";
  seconds.innerHTML = s + "</br><span>seconds</span>";

  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hrDot.style.transform = `rotate(${h * 30}deg)`;
  minDot.style.transform = `rotate(${m * 6}deg)`;
  secDot.style.transform = `rotate(${s * 6}deg)`;
});
