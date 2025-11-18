const questions = [
    {
        q: "Which of the following is not a valid Python datatype?",
        options: ["int", "double", "list", "tuple"],
        answer: 1
    },
    {
        q: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Advanced Programming Interface",
            "Automated Program Interaction",
            "All of the above"
        ],
        answer: 0
    },
    {
        q: "What is the purpose of a constructor?",
        options: ["To create objects", "To destroy objects", "To print values", "None"],
        answer: 0
    },
    {
        q: "Which operator is used for power in Python?",
        options: ["^", "**", "%", "*"],
        answer: 1
    },
    {
        q: "Python was created by which developer?",
        options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Mark Zuckerburg"],
        answer: 0
    },

    // -----------------------------
    //        10 NEW QUESTIONS
    // -----------------------------
    {
        q: "Which keyword is used to define a function in Python?",
        options: ["func", "define", "def", "function"],
        answer: 2
    },
    {
        q: "Which data structure does Python use for key-value pairs?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: 2
    },
    {
        q: "Which of the following is immutable?",
        options: ["List", "Dictionary", "Set", "Tuple"],
        answer: 3
    },
    {
        q: "What is the output of: len('Python')?",
        options: ["5", "6", "7", "Error"],
        answer: 1
    },
    {
        q: "Which module is used for regular expressions in Python?",
        options: ["regex", "pyregex", "re", "match"],
        answer: 2
    },
    {
        q: "What is the correct file extension for Python files?",
        options: [".pt", ".py", ".pyt", ".python"],
        answer: 1
    },
    {
        q: "Which symbol is used for comments in Python?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: 2
    },
    {
        q: "Which function is used to get user input?",
        options: ["scan()", "input()", "read()", "get()"],
        answer: 1
    },
    {
        q: "What is the output of: 3 * 'Hi'?",
        options: ["HiHi", "HiHiHi", "Error", "3Hi"],
        answer: 1
    },
    {
        q: "Which of the following is used to handle exceptions?",
        options: ["try-except", "if-else", "for-while", "error-catch"],
        answer: 0
    }
];

let index = 0;
let score = 0;

function loadQuestion() {
    const q = questions[index];
    document.getElementById("question").innerText = q.q;

    let option_html = "";
    q.options.forEach((opt, i) => {
        option_html += `<div onclick="selectOption(${i})">${opt}</div>`;
    });

    document.getElementById("options").innerHTML = option_html;
}

function selectOption(i) {
    if (i === questions[index].answer) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }
}

function nextQuestion() {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").classList.add("hide");
        document.getElementById("result-box").classList.remove("hide");

        document.getElementById("score-text").innerText =
            `Your Score: ${score} / ${questions.length}`;
    }
}

loadQuestion();
