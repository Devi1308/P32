const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;
var hour2,hour;
var morningSound , nightSound;

function preload() {
    morningSound = loadSound("morning.wav");
     nightSound = loadSound("night.m4a")
     getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
   background(backgroundImg);
}

    // add condition to check if any background image is there to add
    Engine.update(engine);



    if(hour >= 04 && hour <= 09){
        morningSound.play();
    }

    if(hour >= 22 && hour <= 02){
        nightSound.play();
    }
    
   
        textSize(20)
        text("Time : " + hour2  , 0 , 50);
    

    
        
    
    // write code to display time in correct format here
   /* if(hour === 04){
        text("Time : 4 AM" , 200 , 50);
    }else if(hour === 05){
        text("Time : 5 AM" , 200 , 50);
    }else if(hour === 06){
        text("Time : 6 AM" , 200 , 50);
    }else if(hour === 07){
        text("Time : 7 AM" , 200 , 50);
    }else if(hour === 08){
        text("Time : 8 AM" , 200 , 50);
    }else if(hour === 09){
        text("Time : 9 AM" , 200 , 50);
    }else if(hour === 10){
        text("Time : 10 AM" , 200 , 50);
    }else if(hour === 11){
        text("Time : 11 AM" , 200 , 50);
    }else if(hour === 12){
        text("Time : 12 Noon" , 200 , 50);
    }else if(hour === 13){
        text("Time : 13 PM" , 200 , 50);
    }else if(hour === 14){
        text("Time : 14 PM" , 200 , 50);
    }else if(hour === 15){
        text("Time : 15 PM" , 200 , 50);
    }else if(hour === 16){
        text("Time : 16 PM" , 200 , 50);
    }else if(hour === 17){
        text("Time : 17 PM" , 200 , 50);
    }else if(hour === 18){
        text("Time : 18 PM" , 200 , 50);
    }else if(hour === 19){
        text("Time : 19 PM" , 200 , 50);
    }else if(hour === 20){
        text("Time : 20 PM" , 200 , 50);
    }else if(hour === 21){
        text("Time : 21 PM" , 200 , 50);
    }else if(hour === 22){
        text("Time : 22 PM" , 200 , 50);
    }else if(hour === 23){
        text("Time : 23 PM" , 200 , 50);
    }else if(hour === 0){
        text("Time : 00 AM" , 200 , 50);
    }else if(hour === 01){
        text("Time : 01 AM" , 200 , 50);
    }else if(hour === 02){
        text("Time : 02 AM" , 200 , 50);
    }else{
        text("Time : 03 AM" , 200 , 50);
    }*/

}

async function getBackgroundImg(){
 var  response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var responsetype = await response.json();
 var datetime = responsetype.datetime;
 console.log(datetime);
 hour = datetime.slice(11,13);
 console.log(hour);
 hour2 = datetime.slice(11,16);
 console.log(hour2);

 if(hour >= 04 && hour <= 06){
     bg = "sunrise1.png"
 }else if(hour >= 06 && hour <= 08){
    bg = "sunrise2.png"
}else if(hour >= 08 && hour <= 10){
    bg = "sunrise3.png"
}else if(hour >= 10 && hour <= 12){
    bg = "sunrise4.png"
}else if(hour >= 12 && hour <= 14){
    bg = "sunrise5.png"
}else if(hour >= 14 && hour <= 16){
    bg = "sunrise6.png"
}else if(hour >= 16 && hour <= 18){
    bg = "sunset7.png"
}else if(hour >= 18 && hour <= 20){
    bg = "sunset8.png"
}else if(hour >= 20 && hour <= 22){
    bg = "sunset9.png"
}else if(hour >= 22 && hour <= 23){
    bg = "sunset10.png"
}else if(hour >= 23 && hour == 0){
    bg = "sunset11.png"
}else {
    bg = "sunset12.png"
}

backgroundImg = loadImage(bg);


    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
