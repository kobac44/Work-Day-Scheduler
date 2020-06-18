//show time using Momentjs format
//$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));
const $currentDay = $("#currentDay");
const $container = $(".container");
let now = moment().format("dddd, MMMM Do");
$currentDay.text(now);

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

// saves data to localStorage
