class App
{
    runApplication()
    {  
        this.tekenHuis(600, 100)
        this.tekenKerstboom(200, 500, 10);  
    }
    
    tekenKerstboom(x, y, Aantal)
    {
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#80461B";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 150);
        ctx.lineTo(x + 100, y + 150);
        ctx.lineTo(x + 100, y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#355E3B";
        ctx.moveTo(x - 125, y); //a
        ctx.lineTo(x + 50, y - 375); //b
        ctx.lineTo(x + 225, y); //c
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + 35, y - 350);
        ctx.lineTo(x + 50, y - 395);
        ctx.lineTo(x + 65, y - 350);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "Gold";
        ctx.fill();
        ctx.fillStyle = "red";
        for (let i = 0; i < Aantal;)
        {
            let a = this.randInt(x - 125, x + 225);
            let b = this.randInt(y, y - 375);
            let z = this.isInside(x - 125, y, x + 50, y - 375, x + 225, y, a, b)
            console.log(a, b, z);
            if (z == true){
                this.tekenCirkel(a, b);
                i++;
            }
            //done with this until I find out how to make the circles not be drawn inside of eachother
        }
    }
    tekenCirkel(a, b)
    {
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(a, b, 20, 0, Math.PI*2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    tekenHuis(x, y)
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
        else
        {
            console.log(num);
        }

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

