setInterval(function() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    //console.log(currentTime);
    document.getElementById("currentTimeStyle").innerHTML = currentTime;
  }, 1000);

    
//  text written in text area need to store in local storage upon pressing store icon
//----------------------9 AM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn0").click(function() {
    var taskText = $("#task0").val();
    localStorage.setItem ("tasks0", taskText);
});
 // retrieve to textarea from local storage -------------
var data0 = localStorage.getItem("tasks0");
console.log(data0);
document.getElementById("task0").innerHTML = data0;

//----------------------10 AM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn1").click(function() {
    var taskText = $("#task1").val();
    localStorage.setItem ("tasks1", taskText);
});
// retrieve to textarea from local storage ------------
var data1 = localStorage.getItem("tasks1");
console.log(data1);
document.getElementById("task1").innerHTML = data1;

//----------------------11 AM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn2").click(function() {
    var taskText = $("#task2").val();
    localStorage.setItem ("tasks2", taskText);
});
// retrieve to textarea from local storage ------------
var data2 = localStorage.getItem("tasks2");
console.log(data2);
document.getElementById("task2").innerHTML = data2;

//----------------------12 PM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn3").click(function() {
    var taskText = $("#task3").val();
    localStorage.setItem ("tasks3", taskText);
});
// retrieve to textarea from local storage ------------
var data3 = localStorage.getItem("tasks3");
console.log(data3);
document.getElementById("task3").innerHTML = data3;

//----------------------1 PM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn4").click(function() {
    var taskText = $("#task4").val();
    localStorage.setItem ("tasks4", taskText);
});
// retrieve to textarea from local storage ------------
var data4 = localStorage.getItem("tasks4");
console.log(data4);
document.getElementById("task4").innerHTML = data4;

//----------------------2 PM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn5").click(function() {
    var taskText = $("#task5").val();
    localStorage.setItem ("tasks5", taskText);
});
// retrieve to textarea from local storage ------------
var data5 = localStorage.getItem("tasks5");
console.log(data5);
document.getElementById("task5").innerHTML = data5;

//----------------------3 PM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn6").click(function() {
    var taskText = $("#task6").val();
    localStorage.setItem ("tasks6", taskText);
});
// retrieve to textarea from local storage ------------
var data6 = localStorage.getItem("tasks6");
console.log(data6);
document.getElementById("task6").innerHTML = data6;

//----------------------4 PM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn7").click(function() {
    var taskText = $("#task7").val();
    localStorage.setItem ("tasks7", taskText);
});
// retrieve to textarea from local storage ------------
var data7 = localStorage.getItem("tasks7");
console.log(data7);
document.getElementById("task7").innerHTML = data7;

//----------------------5 PM task ------------------------------------------
 // Save in localstorage ---
$ (".saveBtn8").click(function() {
    var taskText = $("#task8").val();
    localStorage.setItem ("tasks8", taskText);
});
// retrieve to textarea from local storage ------------
var data8 = localStorage.getItem("tasks8");
console.log(data8);
document.getElementById("task8").innerHTML = data8;
////  Stored text need to stay in textarea upon refreshing browser --------------------------









// the text are changes color as time goes from 9 am to 5pm 


