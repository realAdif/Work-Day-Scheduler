var today = moment();
var time = moment().format("h:m ");
var currentTime = moment().hour();
var curentBlock = $(".time-block");
var sec;
var saveButton= $(".saveBtn");

$("#currentDay").text(today.format("dddd, MMMM M"));

$(function(){
    setInterval(function(){
        sec = moment().format("h: mm ss A");
        $("#curent-time").text(sec)
    
    },1000)

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

    saveButton.on("click", function(){
        var timeSave = $(this).siblings(".hour").text();
        var description = $(this).siblings(".description").val();

        localStorage.setItem(timeSave,description);

    });

    $(".hour").each(function(){
        var hour = $(this).text();
        console.log(this);
        var textBox = localStorage.getItem(hour)

        $(this).siblings(".description").val(textBox);
    })


})




