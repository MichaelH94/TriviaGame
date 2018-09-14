// Trivia Game

    var qctr = 0;
    var qLeft = 15;
    var correctGuess = 0;
    var wrongGuess = 0;
    var userGuess = "";
    var questions = [
        {
            question: "What is the highest selling record of all time?",
            correct: "Michael Jackson - Thriller",
            choices: ["The Beatles' Sgt. Pepper - Lonely Heart Clubs Band", "Michael Jackson - Thriller",
                "AC/DC - Back In Black", "The Eagles - Greatest Hits"]
        },

        {
            question: "Who makes up the legendary hip hop duo Outkast?",
            correct: "Big Boi and Andre 3000",
            choices: ["Killer Mike and El-P", "Eminem and Royce Da 5'9", "Big Boi and Andre 3000", "Ice Cube and Dr. Dre"]
        },

        {
            question: "Who is the lead singer of legendary rock band Radiohead?",
            correct: "Thom Yorke",
            choices: ["Thom Yorke", "John Lennon", "Liam Gallagher", "Kurt Cobain"]
        },

        {
            question: "Which band is considered to be the first important heavy metal band?",
            correct: "Black Sabbath",
            choices: ["Metallica", "Iron Maiden", "Black Sabbath", "Slayer"]
        },

        {
            question: "Which American Folk artist wrote the song This Land Is Your Land?",
            correct: "Woody Guthrie",
            choices: ["Johnny Cash", "Woody Guthrie", "Bob Dylan", "Pete Seeger"]
        },

        {
            question: "Who was the first hip hop artist to win a Pulitizer prize?",
            correct: "Kendrick Lamar",
            choices: ["2pac", "Jay-Z", "Danny Brown", "Kendrick Lamar"]
        },

        {
            question: "Which legendary punk rock band was considered banned in Washington D.C.?",
            correct: "Bad Brains",
            choices: ["Bad Brains", "Black Flag", "Sex Pistols", "Ramones"]
        },

        {
            question: "Which record is the most recent to receive a perfect 10 from Pitchfork?",
            correct: "Kanye West - My Beautiful Dark Twisted Fantasy",
            choices: ["Kendrick Lamar - To Pimp A Butterfly", "Radiohead - OK Computer", "Death Grips - The Money Store", "Kanye West - My Beautiful Dark Twisted Fantasy"]
        },

        {
            question: "Which record was the first to receieve a perfect 10 from Anthony Fantano?",
            correct: "Death Grips - The Money Store",
            choices: ["Kendrick Lamar - To Pimp A Butterfly", "Radiohead - OK Computer", "Death Grips - The Money Store", "Kanye West - My Beautiful Dark Twisted Fantasy"]
        },
        
        {
            question: "Which classic album is the product of rapper MF DOOM and producer Madlib",
            correct: "Madvillainy",
            choices: ["Madness", "Madvillainy", "Madmen", "MF MADLIB"]
        },

        {
            question: "Which of these is NOT a Weezer self-titled album color?",
            correct: "Pink",
            choices: ["Red", "Blue", "Pink", "White"]
        },
        
        {
            question: "Which city is experimental hip hop group Death Grips from?",
            correct: "Sacramento",
            choices: ["Sacramento", "New York City", "Los Angeles", "Seattle"]
        },

        {
            question: "Which of these albums' cover is a cropped version of Jacques-Louis David's La Mort de Marat?",
            correct: "Have A Nice Life - Deathconsciousness",
            choices: ["Godspeed You! Black Emperor - Lift Your Skinny Fists Like Antennas To Heaven", "Have A Nice Life - Deathconsciousness", "Gojira L'efant Sauvage", 
            "Deafheaven - Sunbather"]
        },

        {
            question: "What genres does experimental band Zeal & Ardor combine?",
            correct: "Black metal and slave spirituals",
            choices: ["Hip hop and jazz", "Death metal and field recordings", "Black metal and slave spirituals", "Folk rock and avant-garde pop"]
        },

        {
            question: "What is the most common theme found on Neutral Milk Hotel's classic record In The Aeroplane Over The Sea?",
            correct: "Anne Frank",
            choices: ["Anne Frank", "Death of a loved one", "Airplanes and traveling in general", "Depression"]
        },
    ]

    var time = 15;
    var start = false;

    var currentTime = setInterval(function(){
        if(start) {
        $('#timer').text("You've got " + time + " seconds left!");
        time--;
        } else {
            $('#timer').text("");
        }
        if(time == 0) {
        start = false;
        timesUp();
        }
        },1000);

    $('#start').click(function() {
       $('#start').hide();
       qLeft = 15;
       qctr = 0;
       correctGuess = 0;
       wrongGuess = 0;
       userGuess = "";  
       nextQuestion(); 
    });
    

    function nextQuestion() {
        time = 15;
        start = true;
        if(qctr == 15){
            gameOver();
            $('#gameStats').hide();
        }
        else {
            $('#answer1').show();
            $('#answer2').show();
            $('#answer3').show();
            $('#answer4').show();
            $('#answer1').text(questions[qctr].choices[0]);
            $('#answer2').text(questions[qctr].choices[1]);
            $('#answer3').text(questions[qctr].choices[2]);
            $('#answer4').text(questions[qctr].choices[3]);
            $('#question').text(questions[qctr].question);
        }     

    }

    function gameEval(guess) {
        if(guess === questions[qctr].correct) {
            correct();
        }
        else {
            incorrect();
        };

    };

    function correct() {
        start = false;
        $('#answer1').hide();
        $('#answer2').hide();
        $('#answer3').hide();
        $('#answer4').hide();
        $('#question').text("Nice! You got the right answer!");
        correctGuess++;
        qLeft--;
        $('#gameStats').text("Correct: " + correctGuess + " | Wrong: " + wrongGuess + " | Questions left: " + qLeft);
        setTimeout(function() {
            qctr++;
            nextQuestion();
        },5000);
    }

    function incorrect() {
        start = false;
        $('#answer1').hide();
        $('#answer2').hide();
        $('#answer3').hide();
        $('#answer4').hide();
        $('#question').text("Oops, you got it wrong. The correct answer is: " + questions[qctr].correct);
        wrongGuess++;
        qLeft--;
        $('#gameStats').text("Correct: " + correctGuess + " | Wrong: " + wrongGuess + " | Questions left: " + qLeft);
        setTimeout(function() {
        qctr++;
        nextQuestion(); 
        }, 5000);
    }

    $('#answer1').click(function() 
    {
        userGuess = questions[qctr].choices[0];
        gameEval(userGuess);
    });

    $('#answer2').click(function() 
    {
        userGuess = questions[qctr].choices[1];
        gameEval(userGuess);
    });

    $('#answer3').click(function() 
    {
        userGuess = questions[qctr].choices[2];
        gameEval(userGuess);
    });

    $('#answer4').click(function() 
    {
        userGuess = questions[qctr].choices[3];
        gameEval(userGuess);
    });  

    function gameOver() {
        if(correctGuess > wrongGuess) {
            $('#question').text("Congratulations! You won. You got " + correctGuess + " right and " + wrongGuess + " wrong.")
        }
        else {
            $('#question').text("Oops! You lost. You got " + correctGuess + " right and " + wrongGuess + " wrong.")
        }
        $('#answer1').hide();
        $('#answer2').hide();
        $('#answer3').hide();
        $('#answer4').hide();
        $('#start').show();
        qctr = 0;
        qLeft = 15;
        correctGuess = 0;
        wrongGuess = 0;;
        userGuess = "";
        start = false;
    };

    function timesUp() {
        start = false;
        time = 15;
        $('#answer1').hide();
        $('#answer2').hide();
        $('#answer3').hide();
        $('#answer4').hide();
        $('#question').text("Oops, you ran out of time. The answer was: " + questions[qctr].correct);
        wrongGuess++;
        qLeft--;
        $('#gameStats').text("Correct: " + correctGuess + " | Wrong: " + wrongGuess + " | Questions left: " + qLeft);
        setTimeout(function() {
        qctr++;
        nextQuestion(); 
        }, 5000);
    }