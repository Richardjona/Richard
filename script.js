const menu = document.querySelector(".bars")
const menuList = document.querySelector(".menus")

    menu.addEventListener('click', ()=>{
        console.log("clicked")
        menuList.classList.toggle("active")
    })

    // Stop watch

    const hours = document.getElementById("hrs")
    const minutes =document.getElementById("min")
    const seconds = document.getElementById("sec")
    var startStopBtn = document.getElementById("st-stp")
    var clear = document.getElementById("clear")
    hr = 0;
    min = 0;
    sec = 0;


    function stopWatchCount(){
        hourss = hr < 10? "0"+hr: hr
        minutess = min < 10? "0"+min: min
        secondss =sec < 10? "0"+sec: sec
 
        sec++;

        if(sec/60 == 1){
            min++;
            sec = 0;
        }
        if(min/60 == 1){
            hr++;
            min = 0;
            sec = 0;
        }

  
        hours.innerText ="H: "+hourss
        minutes.innerText ="M: "+ minutess
        seconds.innerText = "S: "+secondss
     
       
    }
stopWatchCount()

    timeStatus = "started";
    count = null;

    function startAndPauseWatch(){
      
        stopWatchCount()
      
        if(timeStatus == "started"){
           count = setInterval(stopWatchCount, 1000)
            startStopBtn.innerText = "pause"
            timeStatus= "stopped"
        }

        else{
           clearInterval(count)
           timeStatus = "started"
            startStopBtn.innerText = "continue"
        }

       
    }

    startStopBtn.addEventListener("click", startAndPauseWatch )

   function clearCount(){
        clearInterval(count)
      
        hr = 0;
        min = 0;
        sec = 0;
        hours.innerText ="H:"+"00"
        minutes.innerText ="M:"+ "00"
        seconds.innerText = "S:"+"00"
        clearInterval(count)
        startStopBtn.innerText = "start"
        timeStatus = "started"

    }

  clear=  clear.onclick = clearCount



// Get new quotes
const    btnQ = document.getElementById("btnQ")
const quote = document.getElementById("quotes")
const  person = document.getElementById("changePerson")  

var MQUOTES = [
    {
        quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        person: "Bill Gates"
    },
    {
        quote: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success",
        person: "Swami Vivekananda"
    },
    {
        quote: "Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without the talking about the other.",
        person: "Bill Gates"
    },
    {
        quote: "No, my son, do not aspire for wealth and labor not only to be rich. Strive instead for happiness, to be loved and to love, and most important to acquire peace of mind and serenity.",
        person: "Og Mandino"
    },
    {
        quote: "Only a habit can subdue another habit.",
        person: "Og Mandino"
    },
    {
        quote: "Try not to become a man of success, but rather try to become a man of value",
        person: "Albert Eistein"
    },
    {
        quote:"Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        person:"Bill Gates"
    },
    {
        quote:"A true friend is one who overlooks your failures and tolerates your success",
        person:"Doug Larson"
    },
    {
        quote:"We are sure to get opportunities as we show ourselves capable of being trusted.",
        person:"Roy L. Smith"
    },
    {
        quote:"There's nothing like a really loyal, dependable, good friend. Nothing.",
        person:"Jennifer Anitson"
    }

]

btnQ.onclick = function changeQuotes(){
    random = Math.floor(Math.random() * MQUOTES.length)
    quote.innerText= MQUOTES[random].quote
    person.innerText= MQUOTES[random].person
}

// Count down timer for new year 2024

const daysRemaining = document.getElementById("days")
const hoursRemaining= document.getElementById("hours")
const minutesRemaining = document.getElementById("minutes")
const secondsRemaining = document.getElementById("seconds")



newYearCountDown()
setInterval(newYearCountDown, 1000)

function newYearCountDown(){
    const Newyear = new Date("2024-01-01")
    const now = new Date().getTime();
    const difference = Newyear - now;
    Days = Math.floor(difference/(1000*60*60*24));
    Hours = Math.floor((difference%(1000*60*60*24))/(1000*60*60));
    Minutes = Math.floor((difference%(1000*60*60))/(1000*60));
    Seconds = Math.floor((difference%(1000*60))/1000);

   s = Seconds < 10? "0"+Seconds:Seconds;
   m =  Minutes < 10? "0"+Minutes:Minutes;
   h =  Hours < 10? "0"+Hours:Hours;

   if(difference < 0){
    alert("It is new Year")
   }else{
    daysRemaining.innerText = Days;
    hoursRemaining.innerText = h;
    minutesRemaining.innerText = m;
    secondsRemaining.innerText = s;
    
   }

}

// calculator App Scripts
const calButtons = document.querySelectorAll(".btnCal")
const getInput = document.getElementById("inputCal")
let plus;
let answer;

let space = " "
let clearInput = "0.00"


// calButtons.forEach(btn => btn.addEventListener("click",function(e){
//     plus = e.target.innerText
// }))
""
function appendNum(num){
    space += num
    getInput.value = space

    return space
}

function Clear(){
    space = ""
    getInput.value= space
    
}


function backSpace(){
    // numbers= space.value
    space = space.slice(0,-1)
    getInput.value = space
}

function operators(op){
    space += op
    getInput.value = op
}

function calculate(){
    try{
        result = eval(space)
        getInput.value= result
    }catch(error){
        getInput.value= "error"
    }
}