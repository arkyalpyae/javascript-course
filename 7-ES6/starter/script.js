// lecture : let and const 

/*// ES5
var name5 = 'Pyae Sone';
var age5 = 26;
name5 = 'Arkyal';
console.log(name5);

// ES6
const name6 = 'Pyae Sone';
let age6 = 26;
name6 = 'Arkyal';
console.log(name6);


// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'Arkyal';
        var yearOfBirth = 1994;
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowred to drink beer.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1994;
    
    if (passedTest) {
        firstName = 'Arkyal';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drink beer.');
}

driversLicence6(true);



var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

////////////////////////////

//lecture : Blocks and IIFEs


/*// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 3;
})();

console.log(c);
*/

////////////////////////////

//lecture : string in ES6

/*let firstName = 'Arkyal';
let lastName = 'Pyae';
const yearOfBirth = 1994;
function calAge (year){
	return 2020-year;

}

//ES5
console.log('This is'+firstName+' '+ lastName+'.He was born in '+yearOfBirth+'. Today ,he is '+calAge(yearOfBirth) + ' years old.');


// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('A'));
console.log(n.endsWith('ae'));
console.log(n.includes('py'));
console.log(`${firstName} `.repeat(5));*/


////////////////////////////

//lecture : Arrow Functions

// const years = [1990,1991,1992,1993,1994];
// // ES5
// var ages5 = years.map(function(el) {
//     return 2020 - el;
// });
// console.log(ages5);


// // ES6
// let ages6 = years.map(el => 2020 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);


////////////////////////////

//lecture : Arrow Functions 2

// ES5
/*var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
       var self = this; document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['IU', 'SUZY', 'Mary'];
new Person('Arkyal').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Pyae Sone').myFriends6(friends);

*/

////////////////////////////

//lecture : destructuring


/*//ES5 
var arkyal =['Arkyal',26];
// var name = arkyal[0];
// var age =arkyal[1];

//ES6 
const [name ,age] =['Arkyal',26];
console.log(name);
console.log(age)

const obj = {
    firstName: 'Arkyal',
    lastName: 'Pyae'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}


const [age2, retirement] = calcAgeRetirement(1994);
console.log(age2);
console.log(retirement);*/


////////////////////////////

//lecture : Arrays

/*const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'gray';
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'gray');


//ES5
for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box gray') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to gray!';
    
}


//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('gray')) {
        continue;
    }
    cur.textContent = 'I changed to gray!';
}




//ES5
var ages = [22, 27, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));*/



////////////////////////////

//lecture : spread operator

/*function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(12, 20, 21);
console.log(sum1);

//ES5
var ages = [12, 21, 20];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familyArkyal = ['Ar', 'Kyal', 'Pyae'];
const familyPyaeSone = ['Pyae', 'Sone'];
const bigFamily = [...familyArkyal,...familyPyaeSone];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'cyan');

*/

////////////////////////////

//lecture : rest parameters


/*//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18);
    })
}


//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2020, 1987);


//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log( (2020 - cur) >= 18));
}

isFullAge6(1990, 1998, 1961, 2020, 1988);


//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limit);
    })
}


// isFullAge5(1990, 1998, 1961, 2020, 1988);


//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log( (2020 - cur) >= limit));
}

isFullAge6(18,1990, 1998, 1961, 2020, 1988);*/



////////////////////////////

//lecture : default parameters


/*// ES5
function person(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Pyae' : lastName = lastName;
    nationality === undefined ? nationality = 'Myanmar' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Pyae', nationality = 'Myanmar') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


var arkyal = new person('Arkyal', 1994);
var kay = new person('kay', 1996, 'kuu', 'korean');
*/

////////////////////////////

//lecture : Maps

/*const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :)');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
// if(question.has(4)) {
//     //question.delete(4);
//     //console.log('Answer 4 is here')
// }
//question.clear();
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/


////////////////////////////

//lecture : Classes
    
 
/*//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var arkyal5 = new Person5('Arkyal', 1994 ,'animator');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

const arkyal6 = new Person6('Arkyal', 1994, 'animator');

Person6.greeting();



*/

////////////////////////////

//lecture : Classes and subclasses
//ES5
/*var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var arkyalAthlete5 = new Athlete5('Arkyal', 1994, 'swimmer', 1, 0);

arkyalAthlete5.calculateAge();
arkyalAthlete5.wonMedal();
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const arkyalAthlete6 = new Athlete6('arkyal', 1994, 'swimmer', 1, 0);

arkyalAthlete6.wonMedal();
arkyalAthlete6.calculateAge();*/



//////////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/



/*class Element{
constructor (name,yearOfBuilt){
    this.name = name;
    this.yearOfBuilt = yearOfBuilt ;
    }
}

class Parks extends Element{

    constructor(name , yearOfBuilt , area , numTrees){
        super(name,yearOfBuilt);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity(){
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a trees density of ${density} tree per square km.`)
    }
}

class Streets extends Element{
    constructor(name , yearOfBuilt , length , size=3){
        super(name,yearOfBuilt);
        this.length = length ;
        this.size = size;
    }

    classifyStreets ()
    {
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name}, built in ${this.yearOfBuilt} ,is a ${classification.get(this.size)} streets.`)

    }
}

const allParks = [new Parks('DownTown Park', 1997, 0.2,231),
                 new Parks('Nationala Park', 1945, 2.9, 5091),
                 new Parks('Ammu Park', 1963, 0.4, 800)];

const allStreets = [new Streets('Yangon Street', 1999, 1.1, 4),
                   new Streets('Taunggyi Street', 2008, 2.7, 2),
                   new Streets('Saging Street', 2015, 0.8),
                   new Streets('Kalaw Street', 2002, 2.1, 5)];

function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}

function reportParks (p){

    console.log("----------Park Repost-----------");

    // get tree density
    p.forEach(e => e.treeDensity());

    //age
    const ages = p.map(el => new Date().getFullYear() - el.yearOfBuilt);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);


    //more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);


}
function reportStreets (s){

    console.log('-----Streets Reports-----');
    
    //Total and average length
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    //sizes
    s.forEach(el => el.classifyStreets());


}   
reportParks(allParks);
reportStreets(allStreets);*/