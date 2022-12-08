class App
{
    runApplication()
    {
        this.drawTriangle();
        this.drawTree();
    }
    drawHouse(){
        console.log("hello world");
        //haha code go brrr
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.moveTo(x, y); 
        ctx.lineTo(x+400, y+100);
        ctx.lineTo(x+300, y+300);
        ctx.lineTo(x-100, y+200);
        ctx.closePath();
        ctx.fill();
        ctx.moveTo(x-100, y+200);
        ctx.lineTo(x-100, y+400); 
        ctx.lineTo(x+300, y+500); 
        ctx.lineTo(x+300, y+300);
        ctx.lineTo(x-100, y+200);
        ctx.moveTo(x+300, y+500);
        ctx.lineTo(x+500, y+400);
        ctx.lineTo(x+500, y+200);
        ctx.lineTo(x+400, y+100);
        ctx.lineTo(x+300, y+300);
        ctx.lineTo(x+500, y+200);
        ctx.moveTo(x+25, y+300);
        ctx.lineTo(x+25, y+375);
        ctx.lineTo(x+125, y+400);
        ctx.lineTo(x+125, y+325);
        ctx.lineTo(x+25, y+300);
        ctx.moveTo(x+25, y+337.5)
        ctx.lineTo(x+125, y+362.5)
        ctx.moveTo(x+75, y+387.5)
        ctx.lineTo(x+75, y+312.5)
        ctx.closePath();
        ctx.stroke();
        
        let num = Math.round(Math.random());
        if (num == 0)
        {
            console.log(num);
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.moveTo(x+25, y+300);
            ctx.lineTo(x+25, y+337.5);
            ctx.lineTo(x+75, y+350);
            ctx.lineTo(x+75, y+312.5);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();   
            ctx.beginPath();
            ctx.moveTo(x+25, y+337.5);
            ctx.lineTo(x+25, y+375);
            ctx.lineTo(x+75, y+387.5);
            ctx.lineTo(x+75, y+350);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x+75, y+387.5);
            ctx.lineTo(x+125, y+400);
            ctx.lineTo(x+125, y+362.5);
            ctx.lineTo(x+75, y+350);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x+75, y+350);
            ctx.lineTo(x+125, y+362.5);
            ctx.lineTo(x+125, y+325);
            ctx.lineTo(x+75, y+312.5);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
        else
        {
            console.log(num);
        }

    }
    
    drawTree(){
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#80461B";
        ctx.beginPath();
        ctx.moveTo(310, 300);
        ctx.lineTo(310, 350);
        ctx.lineTo(340, 350);
        ctx.lineTo(340, 300);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#355E3B";
        ctx.moveTo(250, 300); //a
        ctx.lineTo(325, 100); //b
        ctx.lineTo(400, 300); //c
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(313, 125);
        ctx.lineTo(325, 90);
        ctx.lineTo(338, 125);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "Gold";
        ctx.fill();
        ctx.fillStyle = "red";
    }
    drawTriangle()
    {
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(100, 200);
        ctx.lineTo(150, 300);
        ctx.lineTo(200, 200);
        ctx.closePath();
        ctx.stroke();
        let arr = [100, 200, 300];
        console.log(arr[1]);
    }
}

let app = new App();
app.runApplication();