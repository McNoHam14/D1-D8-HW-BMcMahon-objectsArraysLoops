/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 1-------------------------------------\n")

let egArrayOfNumbers = [1, 2, 3, 4, 5];

console.log("Array:",egArrayOfNumbers);


/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 2-------------------------------------\n")

let egContactDetails = {
    name: "Benjamin",
    surname: "McMahon",
    email: "ben.mcmahon@live.co.uk",
    age: 32,
}

console.log("Contact details:", egContactDetails)


/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 3-------------------------------------\n")

egContactDetails.drivingLicense = true;
console.log("Adding whether has Driving License or not:");
console.log(egContactDetails);


/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 4-------------------------------------\n")

delete egContactDetails.age;
console.log("Remove age");
console.log(egContactDetails);


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 5-------------------------------------\n")

let egContactDetails2 = {
    name: "Samuel",
    surname: "Brinkley",
    email: "sam.brinkley@gmail.com",
    age: 23,
}

console.log(egContactDetails2)

  if (egContactDetails.email !== egContactDetails2.email) {
    console.log("has a different email addresses");
  } else {
    console.log("using the same email address");
  }


/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 6-------------------------------------\n")

let totalShoppingCart = 51;

if (totalShoppingCart > 50) {
    console.log("Free Shipping, Total Cost:", totalShoppingCart)
} 
else {
    (totalShoppingCart <= 50)
        console.log("Shipping costs £10, Total Cost:", totalShoppingCart + 10)
    }


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 7-------------------------------------\n")

totalShoppingCart = 61;
console.log("Without Discount:", totalShoppingCart)

let totalShoppingCartDiscount = (totalShoppingCart * 0.8)
console.log("With Discount:", totalShoppingCartDiscount)

if (totalShoppingCartDiscount > 50) {
    console.log("Free Shipping, Total Cost:", totalShoppingCartDiscount)
} 
else {
    (totalShoppingCartDiscount <= 50)
        console.log("Shipping costs £10, Total Cost:", totalShoppingCartDiscount + 10)
    }

// num.toPrecision(2)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 8-------------------------------------\n")

let carSpec = {
    brand: "Audi",
    model: "A5",
    licensePlate: "CA16 DAL",
};

/* INCORRECT WAY TO DO IT
let car0 = carSpec;
console.log("Original Car:", carSpec)
console.log("Car 1", car0)

console.log("Change the license")
car0.licensePlate = "CA09 ABC",

console.log(carSpec)
console.log(car0)
*/

console.log("Original Car:", carSpec)

let car0 = {}
car0 = Object.assign(car0, carSpec)

car0.licensePlate = "CA09 ABC";
console.log("2nd Car:", car0)

console.log("Check Original", carSpec)

let car1 = {}
car1 = Object.assign(car1, carSpec)

car1.licensePlate = "CA11 DEF";
console.log("3rd Car:", car1)

console.log("Check Original", carSpec)


let car2 = {}
car2 = Object.assign(car2, carSpec)

car2.licensePlate = "CA13 GHI";
console.log("4th Car:", car2)

console.log("Check Original", carSpec)

let car3 = {}
car3 = Object.assign(car0, carSpec)

car3.licensePlate = "CA16 XWZ"; 
console.log("5th Car:", car3)

console.log("Check Original", carSpec)


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 9-------------------------------------\n")

carsForRent = [
    carSpec,
    car0,
    car1,
    car2,
    car3,
]

console.log(carsForRent)


/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 10-------------------------------------\n")

console.log(carsForRent)

carsForRent.pop();
console.log("Remove last car", carsForRent)


carsForRent.splice(0, 1);
console.log("Remove first car", carsForRent);


/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 11-------------------------------------\n")

/* INCORRECT WAY TO DO IT
console.log(typeof carsForRent);
console.log(typeof carsForRent.licensePlate);
console.log(typeof carsForRent.brand);
*/

console.log(typeof carsForRent);
console.log("License Plate:", typeof carsForRent[2]);
console.log("Brand:", carsForRent[1]);
console.log("Model:", carsForRent[1]);


// typeof object.property

/*
console.log(typeof  carsForRent);
console.log("License Plate:", typeof carsForRent.property[2]);
console.log("Brand:", carsForRent[1]);
console.log("Model:", carsForRent[1]);
*/


// have assigned but are only showing as Objects for items in the array

// Array.isArray(carsForRent);
//let typeOfDataInArray = carsforRent.isArray(data)
// var a = new Array(1,2,3); 
// a['key'] = 'experiment';
// Array.isArray(a);
// var isArr = Array.isArray(data);


/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 12-------------------------------------\n")

let carsForSale = []

car4 = {
    brand: "Ford",
    model: "Focus",
    licensePlate: "AB10 DAL"
}

car5 = {
    brand: "Ford",
    model: "Focus",
    licensePlate: "CD10 DAL"
}

car6 = {
    brand: "Ford",
    model: "Focus",
    licensePlate: "AEF0 DAL"
}

carsForSale.push(car4);
carsForSale.push(car5);
carsForSale.push(car6);

console.log("Cars For Sale:", carsForSale.length)
console.log("Cars For:", carsForRent.length)

let totalCars = carsForRent + carsForSale

// console.log("Total Cars:", totalCars)
//showing types of data as object, not number of cars

// console.log("Total Cars Length:", totalCars.length) 
//showing total length not number of cars


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n-------------------------------------EXCERCISE 13-------------------------------------\n")

for (let i = 0; i < carsForSale.length; i++) {
    let allDataCarsForSale = carsForSale[i];
    console.log(carsForSale[i]);
}

// printed each car in carsForSale 3 times

/* for (let i = 0; i < arrayOfFruits.length; i += 1) {
    let currentElement = arrayOfFruits[i];
    console.log(currentElement);
  }
  */