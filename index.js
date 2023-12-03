let readLineSync = require("readline-sync");
let kuler = require("kuler");

let score = 0;
let name = readLineSync.question("Enter your name: ");
console.log(kuler(`\nHello ${name}, Welcome to Quiz App. Let's get start it.!`,"#ffffff"));

const database = {
    data: [
        {
            question: "What is an Execution Context in JavaScript?",
            options: {
                a: "A lexical environment where the code is executed.",
                b: "A scope chain of variables and functions.",
                c: "A stack of function call",
                d: "None of these"
            },
            correctAnswer: "a"
        },
        {
            question: "What is hoisting in Js?",
            options: {
                a: "A mechanism where the code is executed line by line.",
                b: "A mechanism where the call stack is updated with new function calls.",
                c: "A mechanism where function and variable declarations are moved to the top of their scope.",
                d: "A mechanism where the code is compiled adn optimized."
            },
            correctAnswer: "c"
        },
        {
            question: "What is temporal dead zone(TDZ)?",
            options: {
                a: "The period between a function declaration and its execution.",
                b: "The period between a variable declaratoin and its initialization.",
                c: "The period between a function call and its execution.",
                d: "The period between a function call and its return."
            },
            correctAnswer: "b"
        },
        {
            question: "Which of the following creates a new empty array?",
            options: {
                a: "let arr = []",
                b: "let arr = new Array()",
                c: "let arr = Array()",
                d: "All of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "Which event propagation mode is used by default in Js?",
            options: {
                a: "Bubbling",
                b: "Capturing",
                c: "Both",
                d: "None of these"
            },
            correctAnswer: "a"
        }
    ]
}

const leaderBoard = {
    data: [
        {
            name: "Sumit",
            score: 5
        },
        {
            name: "Dhruvik",
            score: 2
        },
        {
            name: "Priyanka",
            score: 4
        },
        {
            name: "Mayank",
            score: 1
        },
    ]
}

// Main logic
for(let i = 0; i < database.data.length; i++){
    console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
    for(let key in database.data[i].options){
        console.log(`   ${key}) - ${database.data[i].options[key]}`);
    }
    let userAnswer = readLineSync.question(kuler("\nEnter your Answer(a/b/c/d): ","#ffffff"));
    if(userAnswer === database.data[i].correctAnswer){
        console.log(kuler("\ncurrect...!", "#00e600"));
        score++;
    }
    else {
        console.log(kuler("\nWrong...!", "#ff0000"));
        console.log(kuler(`Currect Answer is ${database.data[i].correctAnswer}`, "#3366ff"));
    }
}
console.log(kuler(`\nYour score: ${score}\n`, "#ff66ff"));

leaderBoard.data.push({name, score});
leaderBoard.data.sort((a,b) => b.score-a.score);
console.log("Check your name on leader board.\n");
for(let i = 0; i < leaderBoard.data.length; i++){
    if(leaderBoard.data[i].name === name){
        console.log(kuler(`${leaderBoard.data[i].name} - ${leaderBoard.data[i].score}`, "#c06014"));
    }
    else{
        console.log(kuler(`${leaderBoard.data[i].name} - ${leaderBoard.data[i].score}`, "#eddbcd"));
    }
}