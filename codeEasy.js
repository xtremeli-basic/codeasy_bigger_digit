/*Variable to Store all the numbers with first digits greater than the second*/
var numbers;

/*Variable that stores the numbers that fit the description*/
var counter = 0;

/*variable for first digits*/
var i;

/*variable for second digits*/
var j;

//nested loops to create all possible two digit numbers
for (i=0; i<10; i++){
    for(j=0; j<10; j++){
        if (i > j){   
            numbers = i + "" + j;
            //uncomment the next line to see how nested loops interact with each other
            //console.log(numbers);

            //increases as it comes across numbers that meet the description in the question
            counter ++;
        }
    }
}
//Note that this is outside the loop. You can try putting it inside the loop to see how it works
console.log(counter);
