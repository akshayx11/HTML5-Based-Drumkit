/* Developed By: Akshay Kumar Gupta*/
/* Website: http://www.funspellz.com*/
function playCymbal(snum){
       if(snum == 1){
       var audio = document.getElementById("crash");
       document.getElementById("crash").src = "sounds/CrashCymbal.mp3";
        document.getElementById("crash").load();
        audio.play();
       }
        if(snum == 2){
       var audio = document.getElementById("hhclosed");
    document.getElementById("hhclosed").src = "sounds/HiHatClosed.ogg";
        document.getElementById("hhclosed").load();
        audio.play();
       }
        if(snum == 3){
       var audio = document.getElementById("hhlong");
       document.getElementById("hhlong").src = "sounds/HiHatLong.mp3";
        document.getElementById("hhlong").load();
       audio.play();
       }
        if(snum == 4){
       var audio = document.getElementById("hhshort");
       document.getElementById("hhshort").src = "sounds/HiHatShort.ogg";
        document.getElementById("hhshort").load();
       audio.play();
       }
       
       }
       
       function playDrum(snum){
       if(snum == 1){
       var audio = document.getElementById("bass");
       document.getElementById("bass").src = "sounds/BassHit.mp3";
        document.getElementById("bass").load();
       
       audio.play();
       }
        if(snum == 2){
       var audio = document.getElementById("clap");
       document.getElementById("clap").src = "sounds/Clap.ogg";
        document.getElementById("clap").load();
       audio.play();
       }
        if(snum == 3){
       var audio = document.getElementById("rimshot");
       document.getElementById("rimshot").src = "sounds/Rimshot.mp3";
        document.getElementById("rimshot").load();
       audio.play();
       }

       }
       
       function playSnare(snum){
       if(snum == 1){
       var audio = document.getElementById("snare1");
       document.getElementById("snare1").src = "sounds/Snare1.mp3";
        document.getElementById("snare1").load();
       audio.play();
       }
        if(snum == 2){
       var audio = document.getElementById("snare2");
       document.getElementById("snare2").src = "sounds/Snare2.mp3";
        document.getElementById("snare2").load();
       audio.play();
       }
       }
       
       function playTom(snum){
       if(snum == 1){
       var audio = document.getElementById("tomhi");
       document.getElementById("tomhi").src = "sounds/TomHi.ogg";
        document.getElementById("tomhi").load();
       audio.play();
       }
        if(snum == 2){
       var audio = document.getElementById("tommid");
       document.getElementById("tommid").src = "sounds/TomMid.ogg";
        document.getElementById("tommid").load();
       audio.play();
       }
        if(snum == 3){
       var audio = document.getElementById("tomlow");
       document.getElementById("tomlow").src = "sounds/TomLow.ogg";
       document.getElementById("tomlow").load();
       audio.play();
       }

       }
       
       function playOther(snum){
       if(snum == 1){
       var audio = document.getElementById("cowbell");
        document.getElementById("cowbell").src = "sounds/CowBell.ogg";
        document.getElementById("cowbell").load();
        audio.play();
       }
       
       }
       