var today = moment();
var time = moment().format("h:m ");
var currentTime = moment().hour();
var curentBlock = $(".time-block");
var sec;
var saveButton= $(".saveBtn");
// Current Day Month 
$("#currentDay").text(today.format("dddd, MMMM M"));

$(function(){
    // Curret Time and Second and to change the second every second
    setInterval(function(){
        sec = moment().format("h: mm ss A");
        $("#curent-time").text(sec)
    
    },1000)
    // For each to go thru id to find out the hour and set a class to change color  
    curentBlock.each(function(){
        var currentHour = parseInt($(this).attr("id"));
        console.log(currentHour)        
        if(currentHour > currentTime){
            $(this).addClass("future");
        }else if(currentHour < currentTime){
            $(this).addClass("past");
        }else{
            $(this).addClass("present");
        }    
    })
    // function on click to store time and the descripion into localStorage
    saveButton.on("click", function(){
        var timeSave = $(this).siblings(".hour").text();
        var description = $(this).siblings(".description").val();

        localStorage.setItem(timeSave,description);

    });
    // for each to go thru the hour an description and set at the right hour textbox
    $(".hour").each(function(){
        var hour = $(this).text();
        console.log(this);
        var textBox = localStorage.getItem(hour);
        $(this).siblings(".description").val(textBox);
    })
})




