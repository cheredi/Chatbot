
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
    document.querySelector(".gift").addEventListener("click",gift);
    function gift(){
        $(".g1").show(); 
        $(".g2").hide();
        $(">botText3").hide();
    }
    document.querySelector(".gift2").addEventListener("click",gift2);
    function gift2(){
        $(".g2").show(); 
        $(".g1").hide();
    }
    document.querySelector(".gift3").addEventListener("click",gift3);
    function gift3(){
        $(".g3").show(); 
        $(".g4").hide();
    }
    document.querySelector(".gift4").addEventListener("click",gift4);
    function gift4(){
        $(".g4").show(); 
        $(".g3").hide();
    }
    

})
