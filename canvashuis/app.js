class App
{
    runApplication()
    {  
        console.log("hello world");
        //haha code go brrr
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30, 10); 
        g.lineTo(70, 20);
        g.lineTo(60, 40);
        g.lineTo(20, 30);
        g.lineTo(30, 10);
        g.fill();
        g.moveTo(20, 30);
        g.lineTo(20, 50);
        g.lineTo(60, 60);
        g.lineTo(60, 40);
        g.lineTo(20, 30);
        g.moveTo(60, 60);
        g.lineTo(80, 50);
        g.lineTo(80, 30);
        g.lineTo(70, 20);
        g.lineTo(60, 40);
        g.lineTo(80, 30);
        g.moveTo(32.5, 40);
        g.lineTo(32.5, 47.5);
        g.lineTo(42.5, 50);
        g.lineTo(42.5, 42.5);
        g.lineTo(32.5, 40);
        g.moveTo(32.5, 43.75)
        g.lineTo(42.5, 46.25)
        g.moveTo(37.5, 48.75)
        g.lineTo(37.5, 41.25)
        g.closePath();
        g.stroke();
    }
}

let app = new App();
app.runApplication();

