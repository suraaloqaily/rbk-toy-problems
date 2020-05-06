//Improved each
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}


//Improved map
function map(coll,f){

var acc=[];
if(!Array.isArray(coll)) {
acc={}
}
each (coll,function(element,key){
  acc[key]=f(element,key)
})
return acc;
}



//Improved Filter
function filter(coll, predicate) {
  var acc = []
  if(!Array.isArray(coll)){
    acc = {}
  }
  each(coll,function(element,key){
    if (predicate(element,key)){
      if (!Array.isArray(coll)){
         acc[key] = element
      }else{
    acc.push(element)
    }
    }
  })
  return acc
}

// Improved reduce
function reduce (array,f,acc){

  if (acc===undefined){
    acc=array[0]
    array=array.slice(1)
  }

  each(array,function(element,i){
    acc=f(acc,element,i)
  });

  return acc;
}

/*

Exercise 1
Currently, you have a budget of $100. You have a shopping list in decreasing priority, 
and you want to report how many items you bought and how much it cost you. 
Write a function called shoppingSummary that takes an array of shopping items (objects), 
and returns a string with the number of items you bought, and the total amount you spent.

Notes:

You cannot spend more than your budget ($100).
You have enough room for all the items (if you end up buying everything), 
so there's no item limit -- your only limit is your budget.
The list is mentioned to be in "decreasing priority" simply because you do not have to sort the input array to optimize for anything else.
 So do not worry about coming up with any other sorting algorithm for the most "bang for your buck" or what not :-)
Take for example the data below:
*/
var shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "cookware",
    price: 79.99,
    weightInPounds: 35
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
]
// ];
// Calling your function should result in:

// shoppingSummary(shoppingList); //"I got 3 items at $99.73"

 function shoppingSummary(arrayOfObjects){
var price= reduce(arrayOfObjects,function(sum,object){
if((sum + object.price )<=100){
    return sum+object.price

}
return + sum
  },0)
  return "I got 3 items at $"+price.toPrecision(4)
}
shoppingSummary(shoppingList); //"I got 3 items at $99.73"

/*


Exercise 2
Suppose that you wanted to take out the most expensive item on your shopping list. 
Write a function called removeMostExpensive 
which returns a new array without the most expensive thing in the list. 
Your function should preserve the order of the items in this array.

removeMostExpensive(shoppingList);
Would return a new array with the following elements:

[
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
//notice that the element with "cookware" is missing

 */

//your answer is here

function removeMostExpensive(arrayOfObjects){
var mostexpensive =reduce(arrayOfObjects, function(max,element){
    // console.log(max)
    // console.log(element.price)
if(max.price<element.price){
max=element
}
return max
  })
  return filter(arrayOfObjects,function(object){
return object !== mostexpensive

  })
  
}
removeMostExpensive(shoppingList);