

//function firstBotMessage(){
    //let firstMessage ="Hello!"
   // document.getElementById("botStarterMessage").innerHTML ='<p class="botText"><span>' + firstMessage + '</span></p>';
//}

//firstBotMessage();
//function botMessage(){
    //let secondMessage="Its going to be Valentines in a few days, do you have a valentine?"
    //document.getElementById("botStarterMessage").innerHTML ='<p class="botText2"><span>' + secondMessage + '</span></p>';
  //}
  
  //botMessage();

//function getHardResponse(userText){
    //let botResponse = getBotResponse(userText);
    //let botHtml= '<p class ="botText"><span>' + botResponse + '</span></p>';
    //$("#chatbox").append(botHtml);

    //document.getElementById("chat-bar-bottom").scrollIntoView(true);

//}

//function getResponse(){
   // let userText= $("#textInput").val();
   
    //let userHtml='<p class="userText"><span>' + userText + '</span></p>';
   
    //$("#chatbox").append(userHtml);
    //document.getElementById("chat-bar-bottom").scrollIntoView(true);

   // setTimeout(()=>{
        //getHardResponse(userText);
   // },1000)



//}

//function buttonSendText(sampleText){
   // let userHtml = '<p class= "userText"><span>' + sampleText +'</span></p>'
//}



//function sendButton(){
    //getResponse();
//}

//$("#textInput").keypress(function(){
    //if(e.which==13){
       // getResponse();
    //}
//});

$(document).ready(function(){
    document.querySelector(".collapsible").addEventListener("click",openForm);
    function openForm(){
        document.querySelector(".content").style.display="block";
    }
  document.querySelector(".yes").addEventListener("click",yes);
    function yes(){
        let message="Yes";
        document.getElementById("chat-bar-bottom").innerHTML ='<p class="userText"><span>' + message + '</span></p>';
        $(".response").show();
        $(".response1").hide(); 
    }
  document.querySelector(".no").addEventListener("click",no);
    function no(){
        let message1="No";
        document.getElementById("chat-bar-bottom").innerHTML ='<p class="userText"><span>' + message1 + '</span></p>';
        $(".response1").show();
        $(".response").hide();
    }

})