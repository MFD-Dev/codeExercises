// If Else function START 
document.getElementById('resetBtn').style.display = 'none';

// document.getElementById('show').onclick = function (myFunc) {
function myFunc() {
    let validTicket = true;
    let isCelebrity = true;
    let bribe = 9001;
    if ((isCelebrity == true && validTicket == true) || bribe > 9000){
    document.getElementById('show').innerHTML = 'No concert for you';
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
    document.getElementById('resetBtn').style.display = 'block';
    console.log('Hello')
    
} else {
    document.getElementById('show').innerHTML = 'It/s here'
    console.log('Else')
    this.style.backgroundColor = 'purple'
 }
}
document.getElementById('show').onclick = myFunc;
// document.getElementById('show').className = 'myDiv'
// document.getElementById('show').innerHTML = 'Hi'


// IF Else function END

//sum function 

function showSum(a,b) {
    var sum = a + b;
    document.getElementById('sumOutput').innerHTML = 'Sum: ' + sum;
    document.getElementById('resetBtn').style.display = 'block';
}
document.getElementById('sumBtn').onclick = function () {
    showSum(3,5)
    // document.getElementById('resetBtn').style.display = 'block';
};

// TEXT INPUT
document.getElementById('textBtn').onclick = function () {
    var text = document.getElementById('mytext').value;
    document.getElementById('txtOutput').innerHTML = text;
    if(text == "") {
        this.style.border = 'red'
    }

}
// borderColor not quite working correctly for the onfocus
document.getElementById('mytext').onfocus = function () {
    document.getElementById('txtOutput').innerHTML = 'text box selected'
   this.style.borderColor = 'pink'
    this.style.backgroundColor = 'orange'
}
document.getElementById('mytext').onblur = function () {
    document.getElementById('txtOutput').innerHTML = 'text box deselected'
    this.style.borderColor = 'blue'
}

// Animations   

var mydiv = document.getElementById('mydivAnimations')

document.getElementById('move100').onclick = function() {
    mydiv.style.transform = 'translateX(100px)';
}

document.getElementById('move400').onclick = function() {
    mydiv.style.transform = 'translateX(400px)';
}
// challenge

/*
Challenge exercise:

Create a div, a button, and a text field. Give the div a red background so you can see it, and give it a starting width and height of 100px.

When the button is clicked, the width and height of the div should smoothly transition to whatever value is in the text field.

For example, if the user types 40px in the text box and clicks the button, the width and height of the div should smoothly transition to 40px.

*/

document.getElementById('aniBtn').onclick = function() {
    // let transitionValue = document.getElementById('transitionValue');
    let divAni = document.getElementById('mydivAni');
    //not working
     divAni.style.transform = `translateX(${transitionValue.value})`
     console.log('hello')
}

// snippet
/*
let testBox = document.getElementById("test_box");
testBox.className = "testBoxStyles";
let transitionValue = document.getElementById("transitionValue");

document.getElementById("transition").onclick = function() {
  testBox.style.transform = `translateX(${transitionValue.value})`;
};
.testBoxStyles {
  transition: all 0.2s;
  background-color: coral;
  width: 100px;
  height: 100px;
}
<div id="test_box">TEST BOX</div>
<input id="transitionValue" type="text">Transition Value<br />
<button id="transition">Transit Test Box Smoothly</button>
*/

// 4.2 Arrays

var items = ['chevy', 'ford','nissan']
var info = items[0]
var infoLength = items.length

document.getElementById('arrDiv').innerHTML = info
document.getElementById('arrDiv2').innerHTML = infoLength
//change 1st value and show in a div
items[0] = 'camaro'
console.log(items)
document.getElementById('arrDiv3').innerHTML = items
//create a array of 3 values and loop through showing a greeting to each in a div.
var arr = ['house', 'car', 'trees', 'grass']

for (var i = 0; i < arr.length; i++){
    document.getElementById('arrDiv4').innerHTML = 'This is ' + arr[i];
}

// var names = ['Bowser','Ganon','Shmebulock'];

// for(var i=0; i<names.length; i++){
// 	console.log('Hello there' + names[i]);
//     document.getElementById('arrDiv4').innerHTML = 'Hello there' + names[i]
    
// }

// 4.3 Array Lists

// var names = ['show', ' me', ' the bread']
// names.push('Here')//add at the end
// console.log(names)
// names.pop()
// console.log(names)//remove at the end

// var names2 = ['here', 'it', 'is']
// names2.unshift('newWave')//add to the beginning
// console.log(names2)
// names2.shift()
// console.log(names2)


//4.4 Objects
// create the object with the method called drive.
var car = {   
    color: 'blue',
    size: 'V8',
    drive: function () {
        document.getElementById('objDrive').innerHTML = "I'm driving!"
    }
} 
car.drive() // call the function
// create a object called person with a property/key called favoriteColor
// and a method called greet. 
// The greet() method should take a param called name and show it inside a div. 

var person = {
    favoriteColor: 'blue',
    greet: function(name) {
        document.getElementById('objDrive2').innerHTML = "Hello " + name + " "
    }
}
// calling the method greet
person.greet('Michael')

//4.5
//Create an object called shoe.
// The object should have a property called size initially set to 5.
// Create two methods: bigger and smaller that increase or decrease the size of the shoe by 1, respectively.
// Remember to use the this keyword! 

var shoe = {
    size: 5,
    increase: function() {
        this.size += 1
        console.log(shoe.size)


    },
    decrease: function() {
        this.size -= 1
        console.log(shoe.size)
    }
}
shoe.increase()

shoe.decrease();


// Create a div whose background turns green when you click on the div.
// Remember to use the this keyword.

document.getElementById('objDrive3').onclick = function() {
    this.style.backgroundColor = 'red';
}
/////////////////////////////////
//5.1  

    // Getting a class:
    // document.querySelector('.whatever')

    // Getting an id:
    // document.querySelector('#whatever')

    // Getting a tag:
    // document.querySelector('div')

    // document.querySelectorAll('.whatever')[0].style.color = 'red';
    // 

    // <div class="whatever">Div 0</div>
    // <div class="whatever">Div 1</div>

    // <script>
    // document.querySelector('.whatever').style.color = 'red';
    // </script>
///////
//     <div id="mydiv">
// 	<span>Span 0</span>
// 	<span>Span 1</span>
//      </div>

// <script>
// var myspans = document.getElementById('mydiv').querySelectorAll('span');
// </script>

//Create three divs with the class “myclass”.
//Use querySelectorAll to change the text color of the second div in the list.
document.querySelectorAll('.myclass')[1].style.color = 'red'

//Create three divs with the class “myclass”.
// Use querySelectorAll and a loop to change the text color of the all of the divs in the list.
// Remember to keep the loop efficient. (Don’t repeat the same DOM traversal over and over.)
var myDivsDom = document.querySelectorAll('.myclass2');

for (var i = 0; i < myDivsDom.length; i++) {
    myDivsDom[i].style.color = 'red'
}



// Create three divs with the class “myclass”.
// Create two buttons, one that says Show All and one that says Hide All.
// One of those buttons should show all of the divs with the class “myclass”.
// The other button should hide them.

// not working
var myDivsDom2 = document.querySelectorAll('.myclass3');

document.getElementById('btn-show').onclick = function () {
    myDivsDom2.style.display = "block"
}
document.getElementById('btn-hide').onclick = function () {
    myDivsDom2.style.display = "none"
}

///////////////////////////////
//5.2
// document.getElementById('mydiv').className = 'whatever';
// Create a link that says “Buy Tickets” and has a href attribute of “tickets.html”.
// Create a button that says “Upgrade”
// When the user clicks “Upgrade”, the “Buy Tickets” link url should 
//change from “tickets.html” to “fancy_tickets.html”.

document.getElementById('btnUpgrade').onclick = function() {
    document.getElementById('mylink').href = 'fancy_tickets.html'
    console.log('hello link clicked')
}

//5.3 


    // Use slice to get the first four characters of a string.
    // Then change your code to get the last two characters.
    // Then change it again to get three characters from somewhere in the middle.
    // Show all results in a div.

    var str = "here is the information."
    var result = str.slice(0, 4)
    var result = str.slice(-2)
    var result = str.slice(3, -3)

    document.getElementById('stringDiv').innerHTML = result

    // Use the replace method to replace a word in a string.
    // Show the old string and the new string in a div.

    var str2 = "this is the text"
    var resultStr = str2.replace('this', 'here')
    document.getElementById('stringDiv2').innerHTML = resultStr

    // Create a div with some text in it.
    // Create a button.
    // When the user clicks the button, one of the words in the div 
    // should be replaced with a different word.
    // – – –
    // Two things to remember:
    //     Remember to get the innerHTML of the div in order to get its text.
    //     When using onclick, remember how to properly give it a function.

    // not working
document.getElementById('stringBtn').onclick = function() {
    var clickStr = stringDiv3('Me', 'Here')
    document.getElementById('stringDiv3').innerHTML = clickStr
}
/////////////////////////
//5.4  Regex
//finding patterns
// var strReg = "Hi, here's some text. Hi again. Also, hi.";
// var pattern = /hi/ig;
// // var result = strReg.match(pattern); //
// var result = strReg.match(/hi/ig); // more concise approach
// console.log(result)

// is there a match
var strReg = "Hi, here's some text. Hi again. Also, hi.";

// if (strReg.match(/hi/ig)){
//     console.log('We found it')
// }
// else {
//     console.log('We didn/t find it');
// }

// replace
// var result = strReg.replace(/hi/ig, 'BYE')
// console.log(result)

// replace + functions

// var result = strReg.replace(/hi/ig, function (currentValue) {
//     if(currentValue === 'Hi'){return 'Bye'; }
//     else{return 'bye'; }
// });
// console.log(result)







//1. match:
// Type the following code once and make sure it works.
// var str = "Hi, here's some text. Hi again. Also, hi.";
// var result = str.match(/hi/ig);
// console.log(result);
// See the line with match in it? Type that line a few times until you can do it without an example.
// Then type that line again 5 times without looking at an example.



//2. replace:
// Type the following code once and make sure it works.
// var str = "Hi, here's some text. Hi again. Also, hi.";
// var result = str.replace(/hi/gi, 'BYE');
// console.log(result);
// See the line with replace in it? Type that line a few times until you can do it without an example.
// Then type that line again 5 times without looking at an example.




//3. replace with a function:
// Using the example from question 2, replace each "hi" with "bye", but if the current value is "Hi" (first letter uppercase), then replace it with "Bye" (first letter uppercase).




//4. Autocorrect:
// Create a function called autocorrect that replaces all instances of "taht" with "that" and returns the result.
// Very basic email validation:



//5. Create an HTML input text box and a button. When the user enters an email address and clicks the button, your code should do the following:

//     Store the email address in a variable
//     Using that variable and the match method, check if there is an @ symbol
//     If there is an @ symbol, show the message “Valid email” in a div.
//     If there is not an @ symbol, show the message “Invalid email” in a div.



/////////////////////////////////////////
// 5.5 urls

// get current page
// var url = window.location.href 
// console.log(url)
// set url
// window.location.href = 'http://www.google.com/'
// pathname
// var path = window.location.pathname;
// referrer
// var previousPage = doucment.referrer;
//

//1. 

// Create a basic page with one div.
// If your URL has ".html" anywhere in it, write the following in the div:
// "This is an HTML file."
// Hint: You’ll have to get the URL, then use a regular expression match on it.


// 2. 

// Create a text field and a button.
// The text field should have a label of “Customer Type”, and the button should say “Go”.
// If the user enters “business” in the text field, then the “Go” button should take them to
// http://www.google.com/business
// but otherwise it should take them t
// http://www.google.com/
// Feel free to substitute whatever urls you want though.

//////////////////////////////
// 5.6 Forms
// checked or unchecked //////////////////////
/* <label>
	<input type="checkbox" id="mycheckbox">
	Check this
</label>

<script>
document.getElementById('mycheckbox').onclick = function(){
	if(this.checked){
		console.log('checked');
	}
	else{
		console.log('unchecked');
	}
};
</script> */
////////////////////////////////////////

// value of checkbox  ////////////////////////////////

/* <div>
	Total pizza price: $<span id="price"></span>
</div>

<form autocomplete="off">
	<label>
		<input type="checkbox" id="garlic" value="1">
		Add garlic $1
	</label>

	<label>
		<input type="checkbox" id="peppers" value="3">
		Add peppers $3
	</label>
</form>

<script>
var price = 10;
var priceSpan = document.getElementById('price');
priceSpan.innerHTML = price;

function handleCheckbox(){
	var toppingPrice = Number(this.value);
	if(this.checked){ price += toppingPrice; }
	else{ price -= toppingPrice; }

	priceSpan.innerHTML = price;
}

document.getElementById('garlic').onclick = handleCheckbox;
document.getElementById('peppers').onclick = handleCheckbox;
</script> */

///////////////////////////////////////////

// radio buttons ////////////////////////////////

/* <label>
	<input id="radioa" type="radio" name="q1" value="radio a">
	Answer A
</label>
<label>
	<input id="radiob" type="radio" name="q1" value="radio b">
	Answer B
</label>
<script>
document.getElementById('radioa').onclick = function(){
	console.log(this.value);
};

document.getElementById('radiob').onclick = function(){
	console.log(this.value);
};
</script> */

// Remember how querySelectorAll lets you get all elements that match a CSS selector?
//You can use the :checked pseudo-class selector from CSS to get all inputs that are checked.
// Remember how querySelectorAll lets you get all elements that match a CSS selector?
// You can use the :checked pseudo-class selector from CSS to get all inputs that are checked.
// var checked = document.querySelectorAll('#myquiz input[type=radio]:checked')

// select dropdowns ///////////////////////////////////
/* <select id="myselect">
	<option>Option 1</option>
	<option>Option 2</option>
	<option value="custom value">Option 3</option>
</select>

<script>
document.getElementById('myselect').onchange = function(){
	console.log(this.value);
};
</script> */


// 1. 

// Make a basic checkbox

// Type the following code, then repeat it until you no longer need to look at an example.

// <label>
// 	<input type="checkbox" id="mycheckbox">
// 	Check this
// </label>

// <script>
// document.getElementById('mycheckbox').onclick = function(){
// 	if(this.checked){
// 		console.log('checked');
// 	}
// 	else{
// 		console.log('unchecked');
// 	}
// };
// </script>



//2. 

// Premium option checkbox

// Create a price variable and set it to 50 by default. Show that price on a page.

// Create a checkbox with the label “Add premium option”. Set the checkbox’s value to 50 in the HTML.

// When the box is checked, add the checkbox value to the price, and when it’s unchecked, subtract the checkbox value from the price.

// Remember to convert the checkbox value from a string to a number.


// 3. 

// Basic radio buttons

// Try out the following example to see radio buttons in action:

// <label>
// 	<input id="radioa" type="radio" name="q1" value="radio a">
// 	Answer A
// </label>
// <label>
// 	<input id="radiob" type="radio" name="q1" value="radio b">
// 	Answer B
// </label>
// <script>
// document.getElementById('radioa').onclick = function(){
// 	console.log(this.value);
// };

// document.getElementById('radiob').onclick = function(){
// 	console.log(this.value);
// };
// </script>


// 4. 

// Choose a car’s color with radio buttons

// Create a div that says the color of a car. (For example, it might say “Car color: red”.)

// Create a set of radio buttons that can change the car’s color to red, green, or blue.

// Remember to give the radio buttons the same name since you want them to be in the same group.



// 5. 

// A basic select dropdown

// Type the example once to get a feel for it:

// <select id="myselect">
// 	<option>Option 1</option>
// 	<option>Option 2</option>
// 	<option value="custom value">Option 3</option>
// </select>

// <script>
// document.getElementById('myselect').onchange = function(){
// 	console.log(this.value);
// };
// </script>









// 6. log

// A practical select dropdown

// Create a div that shows the color of a pair of shoes. (Example: “Shoe color: blue”)

// Create a select dropdown that can change the selected color of the shoes.




//////////////////////////////////
// 6.1 Math

//var power = Math.pow(5,2); // 5 to the power of 2
// var roundDown = Math.floor(6.52);
// var roundUp = Math.ceil(2.1);
// var roundToNearest = Math.round(2.4);
// var findLargest = Math.max(2,3,10,5);
// var findSmallest = Math.min(2,3,10,5);

// console.log(power); // try the other values too

// var rand =  Math.floor(10*Math.random()) + 1;
// console.log(rand);




    // 1.  Rounding:

    // Use the Math object to round 5.7 down to 5. (Feel free to look at the examples.)



    // 2. Exponents:

    // Raise 4 to the power of 3 using the Math object.



    // 3.  Pick a random number:

    // Generate a random integer from 0 through 9.

    // Then try 1 through 10.

    // Next, try a random integer from 3 through 8.

    // After that, try typing it again (feel free to use different numbers) until you are comfortable doing it without looking at an example.




    // 4.  Pick a random name:

    // Create an array of people’s names.

    // Create a button and a div.

    // When the button is clicked, a random name from the array should appear in the div.

    // (Hint: Remember that arrays start counting at zero.)





    // 5.  Pick a random image:

    // Create an array of image urls (use any images from the internet).

    // Create a button and a div.

    // When the button is clicked, a random image from the array should appear in the div.


    ///////////////////////////////////////////////////////
    // 6.2 Control Timing

    // setTimeout:
    // The setTimeout() method runs a function after a certain number of milliseconds.
    // start with this template: setTimeout( function(){ }, 1000);

    // setTimeout( functionToRun, delayInMilliseconds );
    // Type the following code to see a real example:  
    // setTimeout( function(){ console.log('hi'); }, 5000);


    //setInterval()
    // The setInterval() method runs a function over and over again with a certain delay in milliseconds each time.
    // setInterval( function(){ console.log('hi'); }, 2000);

    // clearInterval()
    // stops a setInterval() from running.
    // var count = 0;
    // var sayHi = setInterval(function(){
	//     console.log('Current number: '+ count);
	//     count++;
	//     if(count>9){
	//     	clearInterval(sayHi);
	//     }
    // },1000);



    // 1. Type the following code a few times until you can do it without looking. (To make it faster, you can omit the console log the next times you type it.)
    // setTimeout( function(){ console.log('hi'); }, 5000);
    // Once you’re ready, type it 5 more times without looking at an example.




    // 2. Type the following code a few times until you can do it without looking. (To make it faster, you can omit the console log the next times you type it.)
    // setInterval( function(){ console.log('hi'); }, 2000);
    // Once you’re ready, type it 5 more times without looking at an example.




    // 3.  Create an invisible div (CSS display:none).
    // After 5 seconds, show the div (CSS display:block).



    // 4.  Create an array of valid HTML colors (for example: ['red', 'orange', '#ff0']).
    // Using setInterval, make a div’s background cycle through the colors listed in the array.
    // The background color should change every 2 seconds.




    // 5.  Create a countdown that goes from 10 to 0 with one second in between.
    // Show the current number in a div.
    // You’ll need to use setInterval and clearInterval to make this countdown work.












    ////////////////////////////////////////
    // 6.3 Date Times
    
    // var d = new Date();
    // console.log(d);
    // In this example, you’ll notice that new Date() is used to construct a new Date object.

    // In JavaScript, a Date object contains a year, a month, a date, a day of the week, an hour, a minute,    a second, and a millisecond.

    // By default new Date() gives you the current date, but you can change it if you want. Here’s one way     to do that (type this example):

    // var d = new Date('march 15 2015');


    // var d = new Date();
    // console.log( d.getDate() ); // 1 to 31
    // console.log( d.getMonth() ); // 0 to 11 (0 is January)
    // console.log( d.getFullYear() );
    // console.log( d.getDay() ); // 0 to 6 (0 is Sunday)
    // Warning: getDate starts at 1 but other values start at 0

    // Anyway, the important part is that getTime() turns a date from a weird object into a convenient number.
    
    // var d = new Date();
    // console.log( d.getTime() );
    // Type the following to see how it works:


    // 1.  Show the current date in a div (no special formatting is required).
    // 2.  Get the current year, month (from 0 to 11), and date (from 1 to 31), and show 
    //     them in a div. 

    // 3.  Days of the week:
    //     Create an array containing the names of the days of the week.
    //     Get the current day as a number from 0 to 6.
    //     Based on that number, get the correct day name from the array.
    //     Show the correct day name in a div.



    //////////////////////////////////
    // 7.6 Constructor Functions and Prototypes
    
    // In JavaScript, a constructor is a function that creates an object based on a sort of template.

    // this constructor function creates a car object

// function Car(color, speed){
// 	this.color = color;
// 	this.topSpeed = speed;
	
// 	this.showCarInfo = function(){
// 		console.log('Color: ' + this.color);
// 		console.log('Top Speed: '+ this.topSpeed);
// 	};
// }

// // now you can create as many cars as you want
// var myCar = new Car('red', 180);
// var yourCar = new Car('blue', 200);
// var otherCar = new Car('green', 150);
// var yetAnotherCar = new Car('gold', 240);

// // feel free to test out your objects!
// console.log("Your Car's Color: " + yourCar.color);
// myCar.showCarInfo();
// console.log("Other Car's Top Speed: " + otherCar.topSpeed);

/*
    In JavaScript, people will capitlize the first letter of a JavaScript constructor function. It’ll still work lowercase, but people use uppercase so that anyone reading it knows it’s a constructor.
    The new keyword creates a new object based on your constructor function.
    Each new car object has the properties you specified in the constructor.
*/

//////////////////////////////

/*
In JavaScript, objects can inherit properties from other objects.

A prototype is a hidden object that sits in the background and allows other objects to inherit its properties.

All JavaScript objects have a prototype.
*/

// Prototype

// start
// your basic car constructor function
// function Car(color, speed){
// 	this.color = color;
// 	this.topSpeed = speed;
// }

// add the showCarInfo function to Car's prototype object
// this means all the cars will get access to showCarInfo
// Car.prototype.showCarInfo = function(){
// 	console.log('Color: ' + this.color);
// 	console.log('Top Speed: '+ this.topSpeed);
// };

// // create a bunch of cars
// var myCar = new Car('red', 200);
// var yourCar = new Car('blue', 150);
// var otherCar = new Car('green', 180);
// var yetAnotherCar = new Car('gold', 240);
// end
// // show your car (notice showCarInfo isn't there)
// console.log('yourCar:');
// console.log(yourCar);

// // try using showCarInfo anyway
// console.log('here is the car info:');
// yourCar.showCarInfo();

/*
showCarInfo() wasn’t in the yourCar object, so how were we able to use it?

 Here’s how:
We changed the Car’s prototype object so that all the cars would automatically get access to showCarInfo.
*/




// 1. Social network profiles – Part 1

// Create a constructor function called User.

// Each new User object should have the following properties: name, city, and hobby.

// Use your constructor function to create at least three new users.




// 2.  Social network profiles – Part 2

// Start with your code from the previous question.

// Update User’s prototype so that all the user objects can access a method called showProfile. (Remember a method is just a function that belongs to an object.

// The function should show a given user’s profile neatly in a div.


/////////////////////////////////////
// Event Object:
// window.onclick = function(e){
// 	console.log(e);
// };

// coordinates of a click:      
// window.onclick = function(e){
// 	console.log('x = ' + e.pageX);
// 	console.log('y = ' + e.pageY);
// };

// which key was pressed:
// window.onkeydown = function(e){
// 	console.log(e);
// 	console.log(e.keyCode);
// };



    // 1.  When the user clicks anywhere on the page, show the event object in the console.

    // Once you get that to work, try other events and see what happens. Maybe onmousemove or onkeydown or something else.

    // Experiment with some of the properties to see what’s available.





    // 2.  When the user clicks anywhere on the page, display the coordinates of that click in a div.





    // 3.  Practical mini-project: Place a marker on a map

    // Create a page with a map and a destination marker.

    // On that page, you should be able to change the position of the destination marker by clicking anywhere on the map.

    // Hint:
    // You already know how to get the coordinates of a click. The rest of this question is just CSS positioning.
 



    // 4. Practical mini-project: Make a basic moving game character token

    // Create a div that’s a small orange square.

    // When the user pushes a key anywhere on the page, check the keyCode.

    // If the keyCode corresponds to the up arrow, the square should move up 20 pixels. If right arrow, right 20 pixels. Etc.

    // If done correctly, you should be able to move this token around the screen.

    // For fun, you can replace it with an image of a game character.

    // Bonus: What if you want it to move more smoothly?



    ////////////////////////////////////////
    // 8.2 add more than one event listener

/* <button id="btn">Button</button>

<script>
var btn = document.getElementById('btn');

function doThing(){
	console.log('thing');
}

btn.addEventListener('click', doThing);
</script> */

/* Then add:*/

// function doOtherThing(){
// 	console.log('other thing');
// }

// btn.addEventListener('click', doOtherThing);

// how to listen for other events:
// ex: onclick or onmouseover *** you have to remove the "on"
// use: click, mouseover, etc
// btn.addEventListener('mouseover', doThing);

// The event object
// function doThing(e){
// 	console.log(e);
// }

// btn.addEventListener('click', doThing);

// Listen for events on the whole window
// function showMouseLocation(e){
// 	console.log('x=' + e.clientX + ', y=' + e.clientY);
// }
// window.addEventListener('mousemove', showMouseLocation);

// you can use a anonymous function 
// btn.addEventListener('click', function(){
// 	console.log('here\'s an anonymous function');
// })

// Remove Evenet Listeners
//*******removeEventListener doesn’t work with anonymous functions because it needs to know which function you’re removing. */
/* <button id="btn">Button</button>

<script>
var btn = document.getElementById('btn');

function respondOnlyOnce(){
	console.log('You should see this only once.');

	btn.removeEventListener('click', respondOnlyOnce);
}

btn.addEventListener('click', respondOnlyOnce);
</script> */




//    1. Type the following and make sure it works:

//     <button id="btn">Button</button>

//     <script>
//     var btn = document.getElementById('btn');

//     function doThing(){
//     	console.log('thing');
//     }

//     btn.addEventListener('click', doThing);
//     </script>

//     Once it works, retype the following line 20 times:

//     btn.addEventListener('click', doThing);

//     Even if you feel like you get it, I don’t recommend skipping this because you’ll use this a lot.

//    2.  Let’s say you’re working on a codebase and you see this code (you can copy and paste it):

//     <button id="btn">Button</button>
//     <div id="output">Not clicked yet.</div>

//     <script>
//     var btn = document.getElementById('btn');
//     var outputDiv = document.getElementById('output');

//     function showSuccessMessage(){
//     	outputDiv.innerHTML = 'Success!';
//     }

//     btn.addEventListener('click', showSuccessMessage);
//     </script>
//     When a user clicks the button, you want to turn the output div’s text green without touching any of the existing functions.
//     What would you do?



//    3.  When the user clicks anywhere on the page, display the coordinates of that click in a div.
//     Use an event listener and the event object to make this happen.
//     If you’re not sure how to do this, you can refer back to the lesson, but once you’ve got it, redo it without help.





//     4.  Create a div that only shows up after someone clicks on a button.
//     Use an event listener to handle the click.






//     5.  Practical mini-project: Make Your Own Analytics
//     Pretend you’re building some analytics software to tell a company which of three important buttons their users clicked on the most.
//     Start with an object that looks like this:

//     var buttons = {
//     	top: 0,
//     	middle: 0,
//     	bottom: 0
//     };

//     Each time the user clicks on one of the buttons, add 1 to the corresponding number in the buttons object.
//     If you’ve done it correctly, then clicking on the buttons a bunch of times should change the numbers in your object.
// Are you starting to feel comfortable with event listeners?
// If not, play around with them until you do.
// The reason I didn’t introduce them earlier is that I remember how confusing it was to learn onclick, addEventListener, and various fallbacks at the same time.
// Now it’s my hope that you’ll have clarity on how event listeners work.
// ← Previous Unit
// Next Unit →
// Course Map
// Help and Hints



////////////////////////////////////////////////
// 8.3 IIFEs (iffy)  Immediately-Invoked-Function-Expression

/*
You can use an IIFE to keep your code out of global scope, which is awesome because:

    You won’t overwrite someone else’s variables
    Your variables won’t get overwritten

    () = invocation operator
*/
/*
(function(){
	var message = 'Secret message';
	console.log(message);
})();

What happens when you try to access the message variable outside your function?
*/
/*
(See this thing?)(Run it immediately.);
Step 1: Create an anonymous function.

function(){}

Step 2: Put your function in parentheses (spaces don’t matter here).

( function(){} )

Step 3: Run your function.

( function(){} )();

Step 4: Put whatever you want in your function.

(function(){
	console.log('stuff');
})();
*/
/* Parameters in IIFEs

(function(a,b){
	console.log(a+b);
})(1,2);
*/

/*
One common use for parameters in IIFEs is to store frequently used globals like window or document. This can help for brevity (long names can be shortened) and performance (so the browser doesn’t have to look far to find the variables).

(function(d){
	d.getElementById('whatever').innerHTML = 'something';
})(document);
*/



    // 1. Type the following and make sure it works:

    // (function(){
    // 	console.log('It worked');
    // })();

    // Once it works, retype the following 10 times:

    // (function(){})();

    // If it helps, remember it like this:

    // ( your function goes here )();

    // When you’re done, see if you can write an IIFE without looking at an example.






    // 2. Store a message inside a variable in an IIFE.
    // Still inside the IIFE, log that message to the console.
