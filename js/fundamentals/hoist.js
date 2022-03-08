// #1
console.log(hello);                                   
var hello = 'world';                                 
/* expected output: undefined
- interpreted as:
var hello;
console.log(hello)
hello = 'world';
*/

// #2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/* expected output: magnet
- interpreted as: 
var needle;
needle = 'haystack';
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
test();
*/

// #3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/* expected output: super cool
- interpreted as: 
var brendan;
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
*/

// #4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/* expected output: chicken half-chicken
- interpreted as:
var food;
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
*/

// #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/* expected output: error - mean is not a function at time of access due to hoisting
- interpreted as: 
var mean;
mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);
*/

// #6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/* expected output: undefined rock r&b disco
- interpreted as: 
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
*/

// #7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/* expected output: san jose seattle burbank san jose
- interpreted as:
var dojo;
function learn() {
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
*/

// #8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/* expected output: error - assigning to const
- interpreted as:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
*/