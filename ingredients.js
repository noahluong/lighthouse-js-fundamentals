var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list]);
  list++;
}

// Write a for loop that prints out the contents of ingredients:
for (var list = 0; list < ingredients.length; list++) {
  console.log(ingredients[list]);
}



// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var list = ingredients.length-1; list >= 0; list--) {
  console.log(ingredients[list]);
}



