class App
{
    runApplication()
    {  
        console.log("hello world");
        //haha code go brrr
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let h = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300, 100); 
        g.lineTo(700, 200);
        g.lineTo(600, 400);
        g.lineTo(200, 300);
        g.lineTo(300, 100);
        g.fill();
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 600);
        g.lineTo(600, 400);
        g.lineTo(200, 300);
        g.moveTo(600, 600);
        g.lineTo(800, 500);
        g.lineTo(800, 300);
        g.lineTo(700, 200);
        g.lineTo(600, 400);
        g.lineTo(800, 300);
        g.moveTo(325, 400);
        g.lineTo(325, 475);
        g.lineTo(425, 500);
        g.lineTo(425, 425);
        g.lineTo(325, 400);
        g.moveTo(325, 437.5)
        g.lineTo(425, 462.5)
        g.moveTo(375, 487.5)
        g.lineTo(375, 412.5)
        g.closePath();
        g.stroke();
        
        let num = Math.round(Math.random());
        if (num == 0)
        {
            console.log(num);
            h.beginPath();
            h.fillStyle = "yellow";
            h.moveTo(325, 400);
            h.lineTo(325, 437.5);
            h.lineTo(375, 450);
            h.lineTo(375, 412.5);
            h.closePath();
            h.stroke();
            h.fill();   
            h.beginPath();
            h.moveTo(325, 437.5);
            h.lineTo(325, 475);
            h.lineTo(375, 487.5);
            h.lineTo(375, 450);
            h.closePath();
            h.stroke();
            h.fill();
            h.beginPath();
            h.moveTo(375, 487.5);
            h.lineTo(425, 500);
            h.lineTo(425, 462.5);
            h.lineTo(375, 450);
            h.closePath();
            h.stroke();
            h.fill();
            h.beginPath();
            h.moveTo(375, 450);
            h.lineTo(425, 462.5);
            h.lineTo(425, 425);
            h.lineTo(375, 412.5);
            h.closePath();
            h.stroke();
            h.fill();
        }
        else
        {
            console.log(num);
        }

    }
}

let app = new App();
app.runApplication();

