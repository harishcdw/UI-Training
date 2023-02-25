// ------Variables----------

console.log(1+2);
console.log("apple"+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1===true);
console.log(2=='2');


// --------Arrays-------------




// 1
 let team=['sachin','Dhoni','Virat','rohit','rahul','yadav','jadeja','ashwin','dhawan','agarwal','iyer'];


console.log("")
console.log("")
console.log("Remove first player")
// 2
team.shift();
console.log("shift-ouput"+ team);




console.log("")
console.log("")
console.log("count of team members")
// 3
console.log(team.length);



console.log("")
console.log("")
console.log("add player")
//4
team.push('kapil');
console.log(team);

//5
// team.sort();
// console.log("sort-"+team);




console.log("")
console.log("")
console.log("Sort players")
let team1=team;
team1.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
console.log("sorted_strings=> "+team1);

//6


console.log("")
console.log("")
console.log("Assign player number")
let teamJersey=team.map((value)=>value+"-"+Math.round(Math.random()*100));
console.log("teamJersey=>"+teamJersey);





console.log("")
console.log("")
console.log("To Upper Case")
//7
let teamUpper=teamJersey.map(value=>value.toUpperCase());
console.log("teamUpper"+teamUpper);


// --------------Functions---------------------


console.log(" ");
console.log("")
console.log("Generate numbers");
//1
function generateNumbers(){
    for(let i=1;i<=100;i++)
        console.log(i);
}
generateNumbers();








console.log(" ");
console.log("Todays_Date");
//2
function todaysDate(date){  
    console.log(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
}
todaysDate(new Date());




console.log(" ");
console.log("Celcius To Faherheit");

//3
function celToFaren(value){
    // variable
    console.log((value*9/5)+32);
}
celToFaren(4);




console.log(" ");
console.log("Average ");
//4
function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum/arr.length);
}
let array=[1,2,3,4,5,6,7,8,9,10];
average(array)





console.log(" ");
console.log("Average-inbuild ");


function average1(arr){
    console(arr.reduce((a, b) => a + b, 0) / arr.length);
}
let array1=[1,2,3,4,5,6,7,8,9,10];
average(array1)



console.log(" ");
console.log("reverse ");


function reverse(str){
    let str1="";
    for(let i=str.length-1;i>=0;i--){
        str1+=str[i];
    }
    console.log(str1);
    
}
reverse("hello");







console.log(" ");
console.log("reverse-inbuild ");


function reverse1(str){
    console.log(str.split("").reverse().join(""));
}
reverse1("welcome");
