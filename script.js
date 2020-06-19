//show time using Momentjs format
$("#currentDay").text(
  moment().format("dddd") + "," + moment().format("MMMM, Do, YYYY, h:mm:ss a")
);
// const $currentDay = $("#currentDay");
// const $container = $(".container");
// let now = moment().format("dddd, MMMM Do");
// $currentDay.text(now);

//Create local Storage , clear, save, and remove
// Populate saved items
//
// const input = document.getElementsByName("#datasInput");
// const listGroupEL = "My List";

// localStorage.setItem("listGroup", "My List");

// listGroup = localStorage.getItem("listGroup");
// "dataInput".innerHtml = listGroup;
// Clear local storage- now that I know what to code
//localStorage.content = $("#test").html("Test");
//$("#test").html(localStorage.content);

//Assign saveBtn click listener for user input and time stamp??
$(".saveBtn").on("click", function () {
  //get nearby values.
  //console.log(this);
  var text = $(this).siblings("input").val();
  var time = $(this).parent().attr("id");

  //set items in local storage.
  localStorage.setItem(time, text);
});

//load any saved data from LocalStorage - do this for each hour created.
$("9am .input").val(localStorage.getItem("9AM"));
$("#10am .input").val(localStorage.getItem("10"));
$("#11am .input").val(localStorage.getItem("11"));
$("#12pm .input").val(localStorage.getItem("12"));
$("#1pm .input").val(localStorage.getItem("1"));
$("#2pm .input").val(localStorage.getItem("2"));
$("#3pm .input").val(localStorage.getItem("3"));
$("#4pm .input").val(localStorage.getItem("4"));
$("#5pm .input").val(localStorage.getItem("5"));

//get current number of hours.
var currentHour = moment().hour();

Function(currentHour);

function newFunction(currentHour) {
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, currenthour);
  });
}

//check if we've moved past this time
if ("blockHour" < currentHour) {
  $(this).addClass("past");
  $(this).removeClass("future");
  $(this).removeClass("present");
} else if ("blockHour" === currentHour) {
  $(this).removeClass("past");
  $(this).addClass("present");
  $(this).removeClass("future");
} else {
  $(this).removeClass("present");
  $(this).removeClass("past");
  $(this).addClass("future");
}
