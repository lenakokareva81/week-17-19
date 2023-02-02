'use strict'
function bike() {
  console.log(this.name);
}

// let name = "ninja";
var name = "123";
nama = "127";
var obj1 = { name: 'pomidor', bike: bike }
var obj2 = { name: 'site', bike: bike }

bike();

console.log(window);
