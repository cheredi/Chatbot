
function getBotResponse(input){
    if(input=="Yes"){

        
        return "Below is a link to our vast Valentine offers"; 
        
      

    }else if(input == "No"){
        return "Dont worry! there are ways to enjoy valentines alone";
    }else if(input=="yes"){
        return "Show them how much you care with this offer";
    }else if(input=="no"){
        return "Dont worry! there are ways to enjoy valentines alone";
        
    }else if(input == "I dont know!"){
        return "Dont worry! there are ways to enjoy valentines alone and with a loved one!";
    }

    //simple responses
    if(input =="hello"){
        return "Hi I am Chatbot! Its going to be Valentines in a few days, do you have a valentine?";
    }else if(input == "goodbye"){
        return "Talk to you later!";
    }else{
        return "Try asking something else!";
    }


    }


