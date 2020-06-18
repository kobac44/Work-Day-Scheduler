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

$(document).ready(function () {
  let timeEl = $("<p>");
  let dayEl = $("<p>");
  let data1 = $("input1");
  let data2 = $("input2");
  let data3 = $("input3");
  let data4 = $("input4");
  let data5 = $("input5");
  let data12 = $("input12");
  let data11 = $("input11");
  let data10 = $("input10");
  let data9 = $("input9");

  data1.val(localStorage.getItem("Entry1"));
  data2.val(localStorage.getItem("Entry2"));
  data3.val(localStorage.getItem("Entry3"));
  data4.val(localStorage.getItem("Entry4"));
  data5.val(localStorage.getItem("Entry5"));
  data9.val(localStorage.getItem("Entry9"));
  data10.val(localStorage.getItem("Entry10"));
  data11.val(localStorage.getItem("Entry11"));
  data12.val(localStorage.getItem("Entry12"));
});
