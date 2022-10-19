const canvas = document.getElementById("myCanvas");
const contextTriangle = canvas.getContext("2d");
const contextSquare = canvas.getContext("2d");
const contextRectangle = canvas.getContext("2d");
const contextCircle = canvas.getContext("2d");

contextTriangle.beginPath();
contextTriangle.moveTo(40, 30);
contextTriangle.lineTo(150, 140);
contextTriangle.lineTo(250, 30);
contextTriangle.closePath();
contextTriangle.strokeStyle = "red";
contextTriangle.stroke();


contextSquare.beginPath();
contextSquare.rect(610, 440, 130, 130);
contextSquare.closePath();
contextSquare.strokeStyle = "orange";
contextSquare.stroke();

contextRectangle.beginPath();
contextRectangle.rect(580, 20, 180, 130);
contextRectangle.closePath();
contextRectangle.strokeStyle = "green";
contextRectangle.stroke();

contextCircle.beginPath();
contextCircle.arc(120, 500, 80, 0, 2*Math.PI, false);
contextCircle.lineWidth = 1;
contextCircle.strokeStyle = 'blue';
contextCircle.stroke();