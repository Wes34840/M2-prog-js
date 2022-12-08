class App
{
    runApplication()
    {  
        let posX = this.randInt(300, 1000);
        let posY = this.randInt(0, 700);
        let balls = Math.floor(Math.random() * 10) + 1;
        console.log(posX, posY, balls);
        this.tekenHuis(posX, posY, balls);
    }
    
    tekenKerstboom(x, y, Aantal)
    {
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#80461B";
        ctx.beginPath();
        ctx.moveTo(x - 265, y + 350);
        ctx.lineTo(x - 265, y + 400); // 310, 350
        ctx.lineTo(x - 225, y + 400);
        ctx.lineTo(x - 225, y + 350);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#355E3B";
        ctx.moveTo(x - 300, y + 350); //a 250, 300
        ctx.lineTo(x - 245, y + 150); //b 325, 100
        ctx.lineTo(x - 190, y + 350); //c 400, 300
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 254, y + 175); // 313, 125
        ctx.lineTo(x - 245, y + 140); //325, 90
        ctx.lineTo(x - 235, y + 175); // 338, 125
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "Gold";
        ctx.fill();
        ctx.fillStyle = "red";
        for (let i = 0; i < Aantal;)
        {
            let a = this.randInt(x - 310, x - 200);
            let b = this.randInt(y + 185, y + 340);
            let z = this.isInside(x - 300, y + 350, x - 245, y + 150, x - 190, y + 350, a, b)
            console.log(a, b, z);
            if (z == true){
                this.tekenCirkel(a, b);
                i++ 
            //done with this until I find out how to make the circles not be drawn inside of eachother
            }
        }
    }
    tekenCirkel(a, b)
    {
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(a, b, 7, 0, Math.PI*2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    tekenHuis(x, y, Aantal)
    {
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
        this.tekenKerstboom(x, y, 10)

    }
    area(x1, y1, x2, y2, x3, y3)
    {
        return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
    }
    isInside(x1, y1, x2, y2, x3, y3, x, y)
    {
        let TotalArea = this.area(x1, y1, x2, y2, x3, y3);
        let Area1 = this.area(x, y, x2, y2, x3, y3);
        let Area2 = this.area(x1, y1, x, y, x3, y3);
        let Area3 = this.area(x1, y1, x2, y2, x, y);
        return (TotalArea == Area1 + Area2 + Area3);
    }
    randInt(min, max) 
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}

let app = new App();
app.runApplication();

