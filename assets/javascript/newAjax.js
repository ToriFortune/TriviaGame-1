

$.ajax({
      url: "https://opentdb.com/api.php?amount=7&category=26&difficulty=easy&type=multiple",
      method: "GET"
    }).done(function(response) {
      console.log(response);
      $("#triviaApi").html(response.results[0].question);
      $("#api1").html(response.results[0].correct_answer);
      $("#api2").html(response.results[0].incorrect_answers[0]);
      $("#api3").html(response.results[0].incorrect_answers[1]);
      $("#api4").html(response.results[0].incorrect_answers[2]);
    });