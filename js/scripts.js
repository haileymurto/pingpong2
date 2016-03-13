var pingPong = function(n) {
  var emptyString = [];
  var i;
   for(var i=1; i <= n; i++){

     if (i % 15 === 0) {
       emptyString.push(" pingpong,");
     }
     else if (i % 3 === 0) {
        emptyString.push(" ping,");
     }
     else if (i % 5 === 0) {
       emptyString.push(" pong,");
     }
     else {
       emptyString.push(" " + i + ", ");
     }
    }
  return emptyString.join("");
 }


    $(document).ready(function() {
      $("form#input").submit(function(event) {
        var n = $("input#text").val();

        var result = pingPong(n);

        $("#userResult").text(result);

        $("#result").show();
        event.preventDefault();
      });
    });
