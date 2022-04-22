console.log("Working...")
// Data types present in javascript(primitive)
  // Boolean-(true/false), strings-(words,sentences,words+numbers)
  // number-(integer and decimalvalues) 
  // strings should have quotes in starting and ending
  //strings-anything which present inside the quotes are called as strings

//Variables-They are used to store the values which could be of any type
 //i.e number type or string type or boolean type

//Rules for assigning names to variables
  //try to make the variable names declarative
  //it uses Camel case
  //Variable names are "case-sensitive"
   //ex:fName, fname, Fname, fnaMe

 //keyword varablename = value

 //Keywords are of three types
  //let,var,const
  //......declaring/initializing/redeclaring........
//Let - These keywords are used to assign variables with values
//1.They can be declared in a line and then initialize with the valu in another linw
//2.They can also declared and initaizialised in the same line
//3.They cannot be redeclared.... but can be reinitialized perfect
//4.*****We cannot have two variables with same name in let****


let fName="Smily";//declared and initialised in the same line
let fname;
fname="ss";
console.log(fname);
fname="salma";
console.log(fname);

//const - These keywords are used to assign variables with values
//1.They can declared and initaizialised in the same line
//2.They cannot be redeclared...
//3.But const cant be reinitialized also.....
//4.*****We cannot have two variables with same name in const****

const lname ="Luna";
//lname="vin";
console.log(lname);

//var - These keywords are used to assign variables with values
//1.They can be declared in a line and then initialize with the value in another line
//2.They can be also declared and initaizialised in the same line
//3.They can be redeclared....and also can be reinitialized perfect
//4.*****We can have two or more variables with same name in Var****

var age=25;
var age;
age=26;
console.log(age);
age=27;
console.log(age);

