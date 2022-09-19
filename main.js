var x=10;
console.log("The number is "+x);

//pyramid loop
for (var y = 1; y <= x; y++) {
  for (var z = (x - y); z <= x - y; z++){
    space= ' ';
    console.log(space.repeat(z)," x".repeat(y));
  }
}

//reverse pyramid loop
for (var y = 1, z = (x - y); y <= x - 1; y++, z--){
  space =' ';
  console.log(space.repeat(y)," x".repeat(z));
}