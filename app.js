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
