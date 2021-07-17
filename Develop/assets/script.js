setInterval(function() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    //console.log(currentTime);
    document.getElementById("currentTimeStyle").innerHTML = currentTime;
  }, 1000);



     
//  text written in text area need to store in local storage upon pressing store icon


var task0 = {};

$ (".saveBtn1").click(function() {
    // get form values
     var taskText = $("#task0").val();
    
     console.log(taskText);
//    tasks.push({ 
//         text: taskText, });
    localStorage.setItem ("tasks", taskText);
});










/*
$ (".saveBtn1").click(function() {
    // get form values
    console.log(task0);
    var taskText = $("#task0").val();
    ;
    console.log(taskText);
})

//var tasks = {};
//console.log(tasks);

var saveTasks = function() {
localStorage.setItem ("tasks", JSON.stringify(taskText));
};





*/




// the text are changes color as time goes from 9 am to 5pm 


