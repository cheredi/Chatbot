//var coll = document.getElementsByClassName(".collapsible");

//for(let i=0; i< coll.length; i++){
//coll[i].addEventListener("click", function(){
   // this.classList.toggle("active");

    //var content =this.nextElementSibling;

    //if(content.style.maxHeight){
       // content.style.maxHeight=null;
    //}else{
       // content.style.maxHeight = content.scrollHeight + "px";
    //}
//});
//}


function yesMessage(){
    let yesMessage="Hellow!"
    document.getElementById("botStarterMessage").innerHTML='<p class="botText"><span>' + yesMessage + '</span></p>';
}

function firstBotMessage(){
    let firstMessage ="How's it going?"
    document.getElementById("botStarterMessage").innerHTML ='<p class="botText"><span>' + firstMessage + '</span></p>';
}

firstBotMessage();

function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    let botHtml= '<p class ="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

function getResponse(){
    let userText= $("#textInput").val();
   
    let userHtml='<p class="userText"><span>' + userText + '</span></p>';
   
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(()=>{
        getHardResponse(userText);
    },1000)



}

function buttonSendText(sampleText){
    let userHtml = '<p class= "userText"><span>' + sampleText +'</span></p>'
}



function sendButton(){
    getResponse();
}

$("#textInput").keypress(function(){
    if(e.which==13){
        getResponse();
    }
});

$(document).ready(function(){
    document.querySelector(".collapsible").addEventListener("click",openForm);
    function openForm(){
        document.querySelector(".content").style.display="block";
    }

})