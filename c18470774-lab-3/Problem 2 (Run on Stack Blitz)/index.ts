import './style.css';


import { fromEvent, interval, EMPTY } from 'rxjs';

import {
  takeWhile,
  takeUntil,
  scan,
  mapTo,
  startWith,
  switchMapTo,
  repeat
} from 'rxjs/operators';

export interface Time {
  enterSec: number;
  enterHours: number;
  enterMins: number;
}

const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
let displayh = document.querySelector('#hours');
var startNum = 0;
const form = document.getElementById("timerForm");
const submit = fromEvent(form, 'submit');

//Just prevents my form from submitting
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

const startClick = fromEvent(startBtn, 'click');
const resetClick = fromEvent(resetBtn, 'click');

//Submitting time
submit.subscribe( () => 
 {
   //Storing user input in variables
   var hours = Number((document.getElementById("enterHours") as HTMLInputElement).value);
   var minutes = Number((document.getElementById("enterMins") as HTMLInputElement).value);
   var seconds = Number((document.getElementById("enterSec") as HTMLInputElement).value);

   (document.getElementById("enterHours") as HTMLInputElement).value = "";
   (document.getElementById("enterMins") as HTMLInputElement).value = "";
   (document.getElementById("enterSec") as HTMLInputElement).value = "";

   //Converting time entered into seconds
   hours = hours * 60;
   minutes = minutes + hours;
   seconds = seconds + (minutes * 60);

   startNum = seconds;

    //starts the timer
    startClick
    .pipe(
      switchMapTo(interval(1000)),
      mapTo(-1),
      scan((acc: number, curr: number) => acc + curr, startNum),
      takeWhile(val => val >= 0),
      startWith(startNum),
      takeUntil(resetClick),
      repeat()
    )
   
    //Outputs the minutes, hours and seconds changing
    .subscribe(val => {
      secondsToHms(val);
      function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = "0";
        var mDisplay = "0";
        var sDisplay = "0";
    
        hDisplay = h > 0 ? h + (h == 1 ? ":" : ":") : "";
        mDisplay = m > 0 ? m + (m == 1 ? ":" : ":") : "";
        sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";

        displayh.innerHTML = hDisplay + mDisplay + sDisplay;
        return hDisplay + mDisplay + sDisplay; 
      }
    });


 }
)

