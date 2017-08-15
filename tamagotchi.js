var inquirer = require("inquirer");

function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.feed = function() {
    if (this.hungry) {
      console.log("that was yummy");
      this.hungry = false;
      this.sleepy = true;
    } else {
      console.log("I'm full");
    }
  }
  this.sleep = function() {
    if (this.sleepy) {
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    } else {
      console.log("no way I'm tired");
    }
  }
  this.play = function() {
    if (this.bored) {
      console.log("Yay, Let's play");
      this.bored = false;
      this.hungry = true;
    } else {
      console.log("Not right now, later?")
    }
  }
  this.increaseAge = function() {
    this.age++;
    console.log("Happy Birthday to me, I am " + this.age + " old!");
  }
}

var dog = new DigitalPal();

dog.outside = false;

dog.bark = function() {
  console.log("woof, woof!");
}

dog.goOutside = function() {
  if (this.outside === false) {
    console.log("yay, I love the outdoors");
    this.outside = true;
    this.bark();
  } else {
    console.log("we're already outside though...");
  }
}

dog.goInside = function() {
  if (this.outside) {
    console.log("do we have to go? fine...");
    this.outside = false;
  } else {
    console.log("im already inside");
  }
}

var cat = new DigitalPal();

cat.houseCondition = 100;

cat.meow = function() {
  console.log("meow meow");
}
cat.destroyFurniture = function() {
  if (this.houseCondition <= 0) {
    console.log("there is no furniture to destroy");
    return;
  }
  this.houseCondition -= 10;
  console.log("muahahahaha, take that furniture");
  this.bored = false;
  this.sleepy = true;
}
cat.buyNewFurniture = function() {
  this.houseCondition += 50;
  cat.meow();
  console.log("are you sure about that?");
}


var chicken = new DigitalPal();

chicken.bak = function (){
	console.log("Bak! Bak!");
}
chicken.eggs = true;
chicken.eggs = function (){
	if (this.eggs){
		console.log("I have some eggs for you!");
		this.bored = false;
		this.sleepy = true;
    chicken.bak();
	}else {
		console.log("Sorry no eggs right now...");
	}
}
chicken.wash = true;
chicken.wash = function (){
  if (this.wash){
    console.log ("Yes please, I smell funny...");
    this.sleepy = true;
  }else {
    console.log ("Not right now...")
    this.bored = false;
  }
}
var horse = new DigitalPal();

horse.brush = true;
horse.brush = function(){
	if (this.brush){
		console.log("Yay! Keep my coat all pretty!");
    this.bored = false;
    this.sleepy = true;
	}else {
		console.log("Naw I'm aiight...");
	}
}

horse.ride = true;
horse.ride = function(){
	if (this.ride){
		console.log("Come take a ride with me!");
    this.bored = false;
    this.sleepy = true;
	}
	else {
		console.log("Naw maybe later...");	
	}
}

//functions for prompting questions for userser ================
function horseChoice(){
	if (horse.age >= 10){
		console.log("sorry, your horse has died :(");
		return;
	}
	inquirer.prompt(
    [{
      type: "list",
      message: "what do you want to do with your pet?",
      choices: ["feed", "sleep", "ride", "brush", "play"],
      name: "horseMethods"
    }]).then(function(inqRes) {
    	switch (inqRes.horseMethods) {
    		case "feed":
        dog.feed();
        break;
        case "play":
        dog.play();
        break;
      	case "sleep":
        dog.sleep();
        break;
        case "ride":
        horse.ride();
        break;
        case "brush":
        horse.brush();
        break;
			}
		horseChoice();
  	});
  }

function chickenChoice() {
	if (chicken.age >= 11){
		console.log("sorry, your chicken has died :(");
		return;
	}
	inquirer.prompt(
    [{
      type: "list",
      message: "what do you want to do with your pet?",
      choices: ["feed", "sleep", "gather eggs", "play", "wash"],
      name: "chickenMethods"
    }]).then(function(inqRes) {
    	switch (inqRes.chickenMethods) {
      	case "feed":
        chicken.feed();
        break;
      	case "sleep":
        chicken.sleep();
        break;
      	case "play":
        chicken.play();
        break;
    		case "gather eggs":
    		chicken.eggs();
    		break;
        case "wash":
        chicken.wash();
        break;
    	}
    	chickenChoice();
  	});
  }

function dogChoice() {
  if (dog.age >= 12) {
    console.log("sorry, your dog has died:(");
    return;
  }
  inquirer.prompt(
    [{
      type: "list",
      message: "what do you want to do with your pet?",
      choices: ["feed", "sleep", "play", "goOutside", "goInside"],
      name: "dogMethods"
    }]).then(function(inqRes) {
    switch (inqRes.dogMethods) {
      case "feed":
        dog.feed();
        break;
      case "sleep":
        dog.sleep();
        break;
      case "play":
        dog.play();
        break;
      case "goOutside":
        dog.goOutside();
        break;
      case "goInside":
        dog.goInside();
        break;
    }
    dogChoice();
  });
}

function catChoice() {
  if (cat.age >= 15) {
    console.log("sorry, your cat has died :( ");
    return;
  }
  inquirer.prompt(
    [{
      type: "list",
      message: "what do you want to do with your pet?",
      choices: ["feed", "sleep", "play", "meow", "destroyFurniture", "buyNewFurniture"],
      name: "catMethods"
    }]).then(function(inqRes) {
    switch (inqRes.catMethods) {
      case "feed":
        cat.feed();
        break;
      case "sleep":
        cat.sleep();
        break;
      case "play":
        cat.play();
        break;
      case "meow":
        cat.meow();
        break;
      case "destroyFurniture":
        cat.destroyFurniture();
        break;
      case "buyNewFurniture":
        cat.buyNewFurniture();
        break;
    }
    catChoice();
  });
}

inquirer.prompt(
  [{
    type: "list",
    message: "What pet would you like?",
    choices: ["dog", "cat", "chicken", "horse"],
    name: "animalChoice"
  }]).then(function(inqRes) {
  switch (inqRes.animalChoice){
    case "dog":
      dogChoice();
       break;
    case "cat":
      catChoice();
       break;
    case "chicken":
  	  chickenChoice();
       break;
    case "horse":
  	  horseChoice();
       break;
  }

});