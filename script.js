$(document).ready(function() {
    $(".design, .call").click(function() {
      $("#design").toggle();
      $(".call").toggle();
    });
  });
  $(document).ready(function() {
    $(".develop, .call1").click(function() {
        $("#develop").toggle();
      $(".call1").toggle();
    });
  });
  $(document).ready(function() {
    $(".product, .call2").click(function() {
        $("#product").toggle();
      $(".call2").toggle();
    });
  });
  $(document).ready(function(){
    $("form").submit(function (event) {
  var inputName = $("#user").val();
  var inputEmail = $("#user1").val();
  var x = $("#user2").val();
  if (inputName == "" || inputEmail == "" || x == "") {
    alert("invalid input");
  }
  else {
    alert('Hi  ' +  inputName + ' Thank you for reaching out to us.');
  }
  event.preventDefault();
  });
  });