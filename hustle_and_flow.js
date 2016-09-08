var tokens = 3; // Jimmy's tokens
var age = 11;
var heightInInches = 60;
var accompaniedByParent = true;
var isBossLooking = false;
var hasParkPass = true;

// Can he ride?
if ( (tokens >= 5 || hasParkPass)&& (age >= 12 || accompaniedByParent) && heightInInches > 48) {
    console.log("Step right up!");
} 
else if (!isBossLooking){
	console.log("Snuck in!");
}
else {
    console.log("Sorry, you can't ride")
}

var joke.isFunny = "sort of";
switch(joke.isFunny){
	case "yes":
		laugh();
		break;
	case "sort of":
		chortle();
		break;
	case "no":
		stareBlankly();
		break
	default: 
		console.log("did you even tell a joke?");
}
