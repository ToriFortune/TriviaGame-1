$(document).ready(function () {

    //global varabiles for keeping track of the score
    var correct = 0;
    var incorrect = 0;

    // Creating variables
    var questions = [
        {
            q: "Making bacon, and I put it in a pancake. What's it gonna make?",
            a1: "A Goldendoole",
            a2: "An Artichoke",
            a3: "Bacon Waffles",
            a4: "Bacon Pancakes"
            //a3
        },
        {
            q: "Babies are most like which of the following?",
            a1: "Dan Marino",
            a2: "Drunk Adults",
            a3: "Ace Ventura",
            a4: "Dinosaurs"
            //a2
        },
        {
            q: "What does the Hubble Space Telescope do?",
            a1: "Take Pix of the Cosmos for Memes",
            a2: "Grow Basil",
            a3: "Think Deep Thoughts",
            a4: "Sing Songs"

        },
        {
            q: "What is the answer to life the universe and everything?",
            a1: "Memes",
            a2: "To live a Good Life",
            a3: "42",
            a4: "Cloud Eggs"
        },
        {
            q: "What hippose are upset, their sweat turns: ",
            a1: "Red",
            a2: "Black",
            a3: "Green",
            a4: "Clear"
        },
        {
            q: "Banging your head against a wall burns how many calories an hour?",
            a1: "10",
            a2: "150",
            a3: "25",
            a4: "300"
        },
        {
            q: "What is Lionel Richie's most greatest song?",
            a1: "All Night Long",
            a2: "Deep Into the Night",
            a3: "Crrabba Fiesta Forever",
            a4: "Prince, formerly known as The Artist, formerly known as Prince.",
        }
    ];
    //examples of how to call questions & answers
    console.log("Question 1: " + questions[0].q);
    console.log("Question 2: " + questions[1].q);
    console.log("Question 3: " + questions[2].q);
    console.log("Question 4: " + questions[3].q);
    console.log("Question 5: " + questions[4].q);
    console.log("Question 6: " + questions[5].q);
    console.log("Question 7: " + questions[6].q);
    console.log("Answer Q1 a1: " + questions[1].a1);


    //Shit I need to make happen:
    // timer for 20 seconds - if it reaches 0, then next question
    // Use questions to populate html
    // on click = restart timer, log answers, && move to next question
    // setTimeout interval to delay execution (question progression)
    //no more questions function
    //clear #main, display correct & incorrect
    // displays questions after clicking "begin"
    $("#begin").click(function () {
        
        // for loop that updates which question the user sees.
        $("#begin").html("");
        
        for (i = 0; i < 7; i++) {
            console.log(i);
            $("#question").html(questions[i].q);
            $("#answer1").html(questions[i].a1);
            $("#answer2").html(questions[i].a2);
            $("#answer3").html(questions[i].a3);
            $("#answer4").html(questions[i].a4);

        };


    }),


    //  This code will run on doc ready

    $(document).ready(function () {
        //  Click events are done for us:
        $("#lap").click(stopwatch.recordLap);
        $("#stop").click(stopwatch.stop);
        $("#reset").click(stopwatch.reset);
        $("#start").click(stopwatch.start);
        console.log("window function is working");
    });

    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;

    //prevents the clock from being sped up unnecessarily
    var clockRunning = false;

    //  Our stopwatch object.
    var stopwatch = {

        time: 20,
        lap: 1,

        reset: function () {
            if (!clockRunning) {
                stopwatch.time = 20;
                stopwatch.lap = 1;
                $('#display').html("00");
                $('#laps').html("");
            }
        },

        start: function () {
            //  TODO: Use setInterval to start the count here and set the clock to running.
            if (!clockRunning) {
                intervalId = setInterval(stopwatch.count, 1000)
                clockRunning = true;
                console.log(stopwatch.count);
            }
        },
        stop: function () {

            //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
            clearInterval(intervalId);
            clockRunning = false;
        },
        count: function () {
            //  decreases time by 1
            stopwatch.time--;
            //  Gets the current time, pass that into the stopwatch.timeConverter function,
            //        and save the result in a variable.
            watchDisplay = stopwatch.timeConverter(stopwatch.time);
            //  shows the converted time in the "display" div.
            $("#display").html(watchDisplay);
            console.log(watchDisplay);
        },

        timeConverter: function (t) {
            //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            // if (minutes === 0) {
            //     minutes = "00";
            // }
            // else if (minutes < 10) {
            //     minutes = "0" + minutes;
            // }
            return seconds;
        }
    };



});