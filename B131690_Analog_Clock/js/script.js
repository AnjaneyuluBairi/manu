/* JavaScrip file for clock*/

var canvas = document.getElementById("canvas");
var con = canvas.getContext("2d");
var radius = canvas.height/2;
con.translate(radius,radius);


function make(){
drawClock();
drawTime();
drawNumbers();
}
setInterval(make,1);

function drawClock(){

	con.beginPath();
	con.fillStyle = "#ffffff";
	con.arc(0,0,radius*0.90,0,Math.PI*2);
	con.fill();

	con.beginPath();
	con.fillStyle = "black";
	con.arc(0,0,radius*0.06,0,Math.PI*2);
	con.fill();
}

function drawNumbers(){
	var ang;
	var num;
	
	for(num = 1 ; num < 13 ; num++)
	{
		ang = (num) * Math.PI / 6;
		con.rotate(ang);
		con.moveTo(0,185);
		con.lineTo(0,203);
		con.lineWidth = radius*0.01;
		con.strokeStyle = "black";
		con.stroke();
		con.rotate(-ang);
	}
}

function drawTime(){
	var time = new Date();
	var hour = time.getHours();
	var second = time.getSeconds();
	var minute = time.getMinutes();
	var milliseconds = time.getMilliseconds();

	hour = hour%12;
	hour = (hour*(Math.PI/6))+(minute*(Math.PI/(60*6))) + (second*(Math.PI/(360*6)));
	drawHand(hour,radius*0.50,"black");

	minute = (minute*Math.PI/30) + (second*Math.PI/30*60);
	drawHand(minute,radius*0.63,"black");

	second = (second*Math.PI/30) + (milliseconds*Math.PI/(1000*30));
	drawHand(second,radius*0.70,"black");
}

function drawHand(angle,length,color){
	var width = radius*0.04;
	con.beginPath();
	con.lineWidth = width;
	con.lineCap = "round";
	con.moveTo(0,0);
	con.rotate(angle);
	con.lineTo(0,-length);
	con.strokeStyle = color;
	con.stroke();
	con.rotate(-angle);
}

