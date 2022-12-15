class App
{
    runApplication()
    {   
        let posX = this.randInt(300, 1000);
        let posY = this.randInt(0, 700);
        let balls = Math.floor(Math.random() * 10) + 1;
        console.log(posX, posY, balls);
        for (let i = 0; i < 10; i++){
            let posX = this.randInt(300, 1000);
            let posY = this.randInt(0, 700);
            this.tekenHuis(posX, posY, balls)
        }
    }
    tekenKerstboom(x, y, Aantal)
    {
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#80461B";
        ctx.beginPath();
        ctx.moveTo(x - 26.5, y + 35);
        ctx.lineTo(x - 26.5, y + 40); // 310, 350
        ctx.lineTo(x - 22.5, y + 40);
        ctx.lineTo(x - 22.5, y + 35);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "#355E3B";
        ctx.moveTo(x - 30, y + 35); //a 250, 300
        ctx.lineTo(x - 24.5, y + 15); //b 325, 100
        ctx.lineTo(x - 19, y + 35); //c 400, 300
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x - 25.4, y + 17.5); // 313, 125
        ctx.lineTo(x - 24.5, y + 14); //325, 90
        ctx.lineTo(x - 23.5, y + 17.5); // 338, 125
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = "Gold";
        ctx.fill();
        ctx.fillStyle = "red";
        for (let i = 0; i < Aantal;)
        {
            let a = this.randInt(x - 31, x - 20);
            let b = this.randInt(y + 18.5, y + 34);
            let z = this.isInside(x - 30, y + 35, x - 24.5, y + 15, x - 19, y + 35, a, b)
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
        ctx.arc(a, b, 1.5, 0, Math.PI*2);
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
        ctx.lineTo(x+40, y+10);
        ctx.lineTo(x+30, y+30);
        ctx.lineTo(x-10, y+20);
        ctx.closePath();
        ctx.fill();
        ctx.moveTo(x-10, y+20);
        ctx.lineTo(x-10, y+40); 
        ctx.lineTo(x+30, y+50); 
        ctx.lineTo(x+30, y+30);
        ctx.lineTo(x-10, y+20);
        ctx.moveTo(x+30, y+50);
        ctx.lineTo(x+50, y+40);
        ctx.lineTo(x+50, y+20);
        ctx.lineTo(x+40, y+10);
        ctx.lineTo(x+30, y+30);
        ctx.lineTo(x+50, y+20);
        ctx.moveTo(x+2.5, y+30);
        ctx.lineTo(x+2.5, y+37.5);
        ctx.lineTo(x+12.5, y+40);
        ctx.lineTo(x+12.5, y+32.5);
        ctx.lineTo(x+2.5, y+30);
        ctx.moveTo(x+2.5, y+33.75)
        ctx.lineTo(x+12.5, y+36.25)
        ctx.moveTo(x+7.5, y+38.75)
        ctx.lineTo(x+7.5, y+31.25)
        ctx.closePath();
        ctx.stroke();
        
        let num = Math.round(Math.random());
        if (num == 0)
        {
            console.log(num);
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.moveTo(x+2.5, y+30);
            ctx.lineTo(x+2.5, y+33.75);
            ctx.lineTo(x+7.5, y+35);
            ctx.lineTo(x+7.5, y+31.25);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();   
            ctx.beginPath();
            ctx.moveTo(x+2.5, y+33.75);
            ctx.lineTo(x+2.5, y+37.5);
            ctx.lineTo(x+7.5, y+38.75);
            ctx.lineTo(x+7.5, y+35);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x+7.5, y+38.75);
            ctx.lineTo(x+12.5, y+40);
            ctx.lineTo(x+12.5, y+36.25);
            ctx.lineTo(x+7.5, y+35);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(x+7.5, y+35);
            ctx.lineTo(x+12.5, y+36.25);
            ctx.lineTo(x+12.5, y+32.5);
            ctx.lineTo(x+7.5, y+31.25);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
        this.tekenKerstboom(x, y, Aantal)

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
    isBiggerThan(position){
        return position > posX + 100
    }
    isSmallerThan(position){
        return position < posX - 100
    }
}

let app = new App();
app.runApplication();

