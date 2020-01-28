/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#excusebtn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = excuse();
  });
};

var excuse = () => {
  var who1 = ["A plane", "My dog", "My girlfriend", "My brother", "My cat"];
  var verb1 = [
    " ate",
    " broke",
    " stole",
    " scratched",
    " destroyed",
    " crashed"
  ];
  var what1 = [
    " my computer",
    " my house",
    " my passport",
    " my car",
    " my bike",
    " my phone",
    " my camera"
  ];
  var when1 = [
    " earlier today",
    " 5 minutes ago",
    " yesterday",
    " last week",
    " last month",
    " last year",
    " tomorrow"
  ];

  var who = who1[Math.floor(Math.random() * who1.length)];
  var verb = verb1[Math.floor(Math.random() * verb1.length)];
  var what = what1[Math.floor(Math.random() * what1.length)];
  var when = when1[Math.floor(Math.random() * when1.length)];

  return who + verb + what + when;
};
