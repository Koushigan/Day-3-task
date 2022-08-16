// For loop

var marks = [90, 80, 99, 40, 30];
for(let i=0; i<Array.length; i++){
    console.log ("i", i, marks[i]);
}


// For In Loop

var person = {
    Name : "Koushik",
    Age : 22
};
for(let x in person){
    console.log(x+":"+ person[x])
}


// For Of Loop

var person = {
    Name : "Koushik",
    Age : 22
};
for(var key of Object.keys(person)){
    console.log(key, person[key]);
}


// For each loop

var marks = [90, 80, 99, 40, 30];
var max = 0
for(var mark of marks ){
    if(mark > max){
        max = mark
    }
}
console.log("The highest mark", max);