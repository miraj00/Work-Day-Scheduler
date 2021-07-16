setInterval(function() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    //console.log(currentTime);
    var x = document.getElementById("currentDay").innerHTML = currentTime;
    //console.log(x); 
     }, 1000);


//---------------------------------------------------------------------------------------

//  text written in text area need to store in local storage upon pressing store icon

var tasks = {};



var saveTasks = function() {
localStorage.setItem ("tasks", JSON.stringify(tasks));
};


// the text are changes color as time goes from 9 am to 5pm 


