"use strict";

function abbrevName(name) {
  // code away
  const string = name;
  const matches = string.toUpperCase().match(/\b\w/g);
  const initials = matches.join('.');

  return initials;
}  