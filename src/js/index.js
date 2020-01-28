/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function excuse() {
  var who1 = ["My Dog", "My Girlfriend", "My brother", "My Cat"];
  var verb1 = [" ate", " broke", " stole", " scratched", " destroyed"];
  var what1 = [
    " my computer",
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
    " last year"
  ];

  var who = who1[Math.floor(Math.random() * who1.length)];
  var verb = verb1[Math.floor(Math.random() * verb1.length)];
  var what = what1[Math.floor(Math.random() * what1.length)];
  var when = when1[Math.floor(Math.random() * when1.length)];

  return who + verb + what + when;
}
