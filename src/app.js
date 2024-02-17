/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let excuseElement = document.getElementById("the-excuse");
  let button = document.getElementById("btn");

  button.addEventListener("click", function() {
    excuseElement.textContent = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
  excuseElement.textContent = generateExcuse();
};

let generateExcuse = () => {
  let pronouns = ["a", "the", "that"];
  let subjects = ["pilot", "actor", "plumber", "bearcat", "dog"];
  let actions = [
    "took my",
    "threw my",
    "burned my",
    "stole my",
    "yelled at my"
  ];
  let possessions = ["homework", "volleyball", "laptop", "father's ashes"];
  let locations = [
    "in my room",
    "at the store",
    "in the air",
    "in my car",
    "at my grandma's"
  ];
  if (
    pronouns.length === 0 ||
    subjects.length === 0 ||
    actions.length === 0 ||
    possessions.length === 0 ||
    locations.length === 0
  ) {
    return "Oops, something went wrong. Please check your arrays.";
  }

  let proIndex = Math.floor(Math.random() * pronouns.length);
  let subjIndex = Math.floor(Math.random() * subjects.length);
  let actionIndex = Math.floor(Math.random() * actions.length);
  let possessionIndex = Math.floor(Math.random() * possessions.length);
  let locationIndex = Math.floor(Math.random() * locations.length);

  return (
    pronouns[proIndex] +
    " " +
    subjects[subjIndex] +
    " " +
    actions[actionIndex] +
    " " +
    possessions[possessionIndex] +
    " " +
    locations[locationIndex]
  );
};
