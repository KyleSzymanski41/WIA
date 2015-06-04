/*
     Name:Kyle Szymanski
     Date:June 4th 2015
     Class & Section:  WIA-section 01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

    /*******************************************
     FILE SETUP

     // Setup up 7 different Canvases in index.html one for each problem.
     //Link Modernizr.js
     // Link the main.js file
     // Setup the call to that canvas and get it's 2d context
     //Use Modernizr to verify that your browser supports canvas, include a fallback message


     /*******************************************
     PART 1

     Draw a rectangle starting at point (0 ,0)
     That has a width of 50 px and a height of 100px
     Set the color of the rectangle to a shade of blue.
     Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

     Reminder - set the style first then draw.

     ********************************************/



// Draw Rectangle here

    // window onload function
    window.onload = function() {

        // running modernizr

        if(Modernizr.canvas) {

            // creating variable

            var ctx = document.getElementById('Canvas1').getContext("2d");

            // creating styles
            ctx.strokeStyle = "black";
            ctx.fillStyle = "dodgerblue";

            // creating rectangle
            ctx.strokeRect(0, 0, 50, 100);
            ctx.fillRect(0, 0, 50, 100);


            /*******************************************
             PART 2

             Draw a circle starting at point (50 ,50)
             That has a radius of 20 px
             Set the color of the circle to a shade of red and set the alpha to .5
             Set the stroke color to black and use a radius of 30px for this circle.

             Reminder - set the style first then draw.
             Use the arc method
             ********************************************/


//Draw Circle here

            // creating variable
            var ctx2 = document.getElementById('Canvas2').getContext("2d");

            // creating styles
            ctx2.strokeStyle = "black";
            ctx2.fillStyle = "rgba(244,34,34,0.5)";

            // creating var fo circle
            var degrees = 360;
            var radians = (degrees / 180) * Math.PI;

            // creating circle
            ctx2.beginPath();
            ctx2.arc(50, 50, 20, 0, radians, true);
            ctx2.fill();
            ctx2.arc(50, 50, 30, 0, radians, true);
            ctx2.stroke();


            /*******************************************
             PART 3

             Practice using Path drawing.
             Create a 5-point star shaped pattern using the lineTo method.
             Begin this shape at (100, 100)

             Height and width and color are up to you.

             ********************************************/


//Draw Star here
            // creating variable
            var ctx3 = document.getElementById('Canvas3').getContext("2d");

            // creating styles
            ctx3.fillStyle = "silver";
            ctx3.strokeStyle = "black";

            // creating star
            ctx3.beginPath();
            ctx3.moveTo(100, 100);
            ctx3.lineTo(120, 140);
            ctx3.lineTo(150, 140);
            ctx3.lineTo(120, 170);
            ctx3.lineTo(140, 220);
            ctx3.lineTo(100, 180);
            ctx3.lineTo(60, 220);
            ctx3.lineTo(80, 170);
            ctx3.lineTo(50, 140);
            ctx3.lineTo(85, 140);
            ctx3.closePath();
            ctx3.fill();
            ctx3.stroke();


            /*******************************************
             PART 4

             Practice drawing with Bezier curves.
             Try drawing the top to an umbrella.
             This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

             Position, height, width and color are your choice.
             Do not overlap any other object.

             ********************************************/

//Draw Umbrella top here


            // creating var
            var ctx4 = document.getElementById('Canvas4').getContext("2d");


            // creating styles
            ctx4.strokeStyle = "black";
            ctx4.fillStyle = "yellow";
            ctx4.lineWidth = 2;



            // creating Umbrella
            ctx4.beginPath();
            ctx4.moveTo(100, 100);
            ctx4.bezierCurveTo(100, 20, 300, 20, 300, 100);
            ctx4.bezierCurveTo(260, 70, 260, 70, 230, 100);
            ctx4.bezierCurveTo(220, 70, 190, 70, 140, 100);
            ctx4.bezierCurveTo(180, 70, 140, 70, 100, 100);
            ctx4.closePath();
            ctx4.fill();
            ctx4.stroke();


            /*******************************************
             PART 5

             Practice using text.
             Draw text into your canvas.  It can said whatever you would like in any color.

             ********************************************/

//Draw text here
            // creating var
            var ctx5 = document.getElementById('Canvas5').getContext("2d");

            // creating var for text saying
            var mySaying = "I am the Hype!";

            // creating styles
            ctx5.font = "30pt Veranda";
            ctx5.fillStyle = "red";
            // creating saying
            ctx5.fillText(mySaying, 30, 50);


            /*******************************************
             PART 6

             Pixel manipulation.
             Draw the image logo.png into the canvas in the following 3 ways.
             1. The image exactly as it is.
             2. Shrink the image by 50%
             3. Slice a section of the logo out and draw that onto the canvas.

             Reminder to use the drawImage method for all 3 of the ways.

             ********************************************/

//Draw images here
            // creating variables
            var ctx6 = document.getElementById('Canvas6').getContext("2d");

            var srcImg = document.getElementById("img1");

            // drawing out images
            ctx6.drawImage(srcImg, 0, 0);
            ctx6.drawImage(srcImg, 0, 1000, 1650, 544);
            ctx6.drawImage(srcImg, 400, 300, 200, 250, 50, 50, 200, 200);


            /*******************************************
             PART 7

             Putting it all together.

             Using a combination of all the methods.
             Create a complex scene.
             You must use at least 3 different methods.

             ********************************************/

// Draw scene here
            // creating variable for canvas7
            var ctx7 = document.getElementById('Canvas7').getContext("2d");

            // creating styles for dragonball
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "orange";

            // creating variables for circle
            var degree = 360;
            var radian = (degree / 180) * Math.PI;

            // creating dragonball
            ctx7.beginPath();
            ctx7.arc(200, 170, 100, 0, radian, true);
            ctx7.fill();
            ctx7.stroke();


            // creating styles for dragon radar
            ctx7.strokeStyle = "grey";
            ctx7.fillStyle = "darkgreen";

            // creating variables for circle
            var degree1 = 360;
            var radian1 = (degree1 / 180) * Math.PI;

            // creating dragonball radar
            ctx7.beginPath();
            ctx7.arc(450, 170, 100, 0, radian1, true);
            ctx7.fill();
            ctx7.arc(450, 170, 120, 0, radians, true);
            ctx7.stroke();

            // creating styles for dragon radar top button
            ctx7.strokeStyle = "grey";
            ctx7.fillStyle = "lightgrey";

            // creating variables for circle
            var degree2 = 360;
            var radian2 = (degree2 / 180) * Math.PI;

            // creating dragonball radar button
            ctx7.beginPath();
            ctx7.arc(450, 30, 10, 0, radian2, true);
            ctx7.fill();
            ctx7.arc(450, 30, 20, 0, radians, true);
            ctx7.stroke();


            // creating styles for dragonball on radar
            ctx7.strokeStyle = "grey";
            ctx7.fillStyle = "orange";


            // creating variables for circle
            var degree3 = 360;
            var radian3 = (degree3 / 180) * Math.PI;

            // creating dragonball on radar
            ctx7.beginPath();
            ctx7.arc(450, 170, 10, 0, radian3, true);
            ctx7.fill();
            ctx7.arc(450, 170, 15, 0, radian3, true);
            ctx7.stroke();

            // creating path for 1 star ball
            ctx7.beginPath();
            ctx7.moveTo(200, 100);
            ctx7.lineTo(215, 150);
            ctx7.lineTo(280, 150);
            ctx7.lineTo(225, 180);
            ctx7.lineTo(240, 230);
            ctx7.lineTo(200, 200);
            ctx7.lineTo(160, 230);
            ctx7.lineTo(175, 180);
            ctx7.lineTo(125, 150);
            ctx7.lineTo(185, 150);
            ctx7.closePath();

            // creating styles for one star ball
            ctx7.fillStyle = "red";
            ctx7.fill();
            ctx7.strokeStyle = "red";
            ctx7.stroke();

            // creating text variable
            var dbZ = "Gather The Dragon Balls!";


            // creating styles for text
            ctx7.font = "30pt Georgia";
            ctx7.fillStyle = "red";
            ctx7.strokeStyle = "black";
            ctx7.fillText(dbZ, 125, 350);
            ctx7.strokeText(dbZ, 125, 350);






        }else{

            alert("No canvas supported");

        }





};

