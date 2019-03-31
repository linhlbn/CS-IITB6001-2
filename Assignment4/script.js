
function getRandomColor() {
    var digits = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawYouWant() {
    var x = document.getElementById("mySelect").value;
    var x1 = Math.random() * 300, y1 = Math.random() * 150, x2 = Math.random() * 300, y2 = Math.random() * 150; 
    if (x=="Line") {   
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1,y1);
        ctx.strokeStyle= getRandomColor();
        ctx.stroke();   
    }
    if(x=="Circle"){
        
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(x1/2, y1/2,y2/2, 0, 2 * Math.PI);
        ctx.strokeStyle=getRandomColor();
        ctx.stroke();
    }
    if(x=="Linear Gradient"){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(20, 0, 110, 0);

        // Add three color stops
        gradient.addColorStop(0, getRandomColor());
        gradient.addColorStop(0.1, getRandomColor());
        gradient.addColorStop(0.2, getRandomColor());
        gradient.addColorStop(0.3, getRandomColor());
        gradient.addColorStop(0.4, getRandomColor());
        gradient.addColorStop(0.5, getRandomColor());
        gradient.addColorStop(0.6, getRandomColor());
        gradient.addColorStop(0.7, getRandomColor());
        gradient.addColorStop(0.8, getRandomColor());
        gradient.addColorStop(0.9, getRandomColor());
        gradient.addColorStop(1, getRandomColor());

        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 500, 200);
    }
    if(x=="Radial Gradient"){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);
        gradient.addColorStop(0, getRandomColor());
        gradient.addColorStop(.9, getRandomColor());
        gradient.addColorStop(1, getRandomColor());
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 500, 200);
    }
    if(x=="Image"){
        var num = Math.floor(Math.random() * 4) + 1; 
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById(num);
        var rx1 = Math.random() * 50, rx2 = Math.random() * 50;
        ctx.drawImage(img,rx1,rx2,150,100);
    }
}
