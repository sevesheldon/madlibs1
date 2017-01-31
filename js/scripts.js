$(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });


    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput = $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();


  });

  $("div#story").click(function() {
    $("img#story-pic").show();
    $("img#story-pic").click(function() {
      $(this).toggle();
    });
  });

  $("#name-entry form").submit(function(event) {

    var guestNameInput = $("input#guest-name").val();

    $(".guest-name").text(guestNameInput);

    $("#letter").show();
    $("#letter").click(function() {
      $(this).toggle();
    });

    event.preventDefault();
  });

});
