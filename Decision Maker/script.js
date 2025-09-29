function getBedtime(age) {
    var stressInput = document.getElementById("stress").value;
    var ageInput = document.getElementById("age").value;
    var tiredness = document.getElementById("tired").value;
    var bedtime = " "
    var hoursSleep = " "


    // outputs: <= 8, 9, 10, 11
    // if age <0 you don't need sleep...or anything
    // if age =<117 congrats you are the oldest person alive! 
    // if age = 0-12 sleep needed = 12 hrs
    // if age = 13-18 sleep needed = 10
    // if age = 19-64 sleep needed = 8
    // if age = 65-116 sleep need = 7

    
    // taking the age input and returning a specific phrase or the time to go to bed and how many hours of sleep are needed 
    if (ageInput <0 ){
        document.getElementById("output").innerHTML = "You don't need sleep...or anything...";
    }
    else if (ageInput >= 117){
        document.getElementById("output").innerHTML = "Congrats you are the oldest person alive! Get some rest."
    }
    else if (ageInput >= 0 && ageInput <= 12){
       
        //changing the bedtime based on low stress & not tired, high stress & not tired, low stress & tired, and high stress & tired 
        if (stressInput<=3 && tiredness == "no"){
            document.getElementById("output").innerHTML = recalcOutput("10 PM","11 Hours");
        }
        else if ((stressInput > 3 && tiredness == "no") || (stressInput <= 3 && tiredness == "yes")){
            document.getElementById("output").innerHTML = recalcOutput("9 PM","12 Hours");
        }
        else{
            document.getElementById("output").innerHTML = recalcOutput("8 PM","13 Hours");
        }
    }
    else if (ageInput >= 13 && ageInput <= 18){
        if (stressInput<=3 && tiredness == "no"){
            document.getElementById("output").innerHTML = recalcOutput("10 PM","10 Hours");
        }
        else if ((stressInput > 3 && tiredness == "no") || (stressInput <= 3 && tiredness == "yes")){
            document.getElementById("output").innerHTML = recalcOutput("9 PM","11 Hours");
        }
        else{
            document.getElementById("output").innerHTML = recalcOutput("8 PM","12 Hours");
        }
    }
    else if (ageInput >= 19 && ageInput <= 64){
        if (stressInput<=3 && tiredness == "no"){
            document.getElementById("output").innerHTML = recalcOutput("11 PM","8 Hours");
        }
        else if ((stressInput > 3 && tiredness == "no") || (stressInput <= 3 && tiredness == "yes")){
            document.getElementById("output").innerHTML = recalcOutput("10 PM","9 Hours");
        }
        else{
            document.getElementById("output").innerHTML = recalcOutput("9 PM","10 Hours");
        }
    }
    else if (ageInput >= 65 && ageInput <= 116){
        if (stressInput<=3 && tiredness == "no"){
            document.getElementById("output").innerHTML = recalcOutput("9 PM","7 Hours");
        }
        else if ((stressInput > 3 && tiredness == "no") || (stressInput <= 3 && tiredness == "yes")){
            document.getElementById("output").innerHTML = recalcOutput("8 PM","8 Hours");
        }
        else{
            document.getElementById("output").innerHTML = recalcOutput("7 PM","9 Hours");
        }
    }
}
// function that puts the parameters into the output string so I can use it above without writing the new output string everytime 
function recalcOutput (bedtime, hoursSleep){
    console.log(bedtime)
    var newOutput = bedtime + "!" + "<br>" + "Hours of sleep needed: " + hoursSleep + "<br>";
    console.log(newOutput)
    return newOutput
}
