class App
{
    runApplication()
    {  
        this.tekenWeg();
        this.houseRow(100, 200, 10, 110, 0)
        this.houseRow(100, 315, 5, 110, 0)
        this.houseRow(700, 315, 3, 0, 80)
        this.houseRow(875, 315, 3, 0, 80)
        this.houseRow(1050, 315, 3, 0, 80)
        this.houseRow(700, 615, 3, 100, 0)
        this.houseRow(540, 385, 5, 0, 80)
        this.placeCar(978, 400, "red", "N")
        this.placeCar(483, 205, "maroon", "N")
        this.placeCar(400, 283, "black", "E")
        this.placeCar(750, 283, "white", "E")
        this.placeCar(900, 450, "navy", "E")
        this.placeCar(602, 500, "green", "S")
        this.placeCar(155, 205, "silver", "S")
        this.placeCar(1010, 530, "purple", "W")
        this.placeCar(1000, 257, "blue", "W")
    }
    houseRow(x, y, houses, gapX, gapY){
        for (let i = 0; i < houses; i++){
            let b = this.randInt(3, 7)
            this.tekenHuis(x, y, b)
            x = x + gapX
            y = y + gapY
        }
    }
    placeCar(x, y, color, direction){
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.beginPath()
        ctx.fillStyle = color
        if (direction == "N"){
            ctx.fillRect(x, y, 20, 40);
            ctx.fillStyle = "yellow"
            ctx.fillRect(x + 2.5, y - 2, 5, 3)
            ctx.fillRect(x + 12.5, y - 2, 5, 3)
            ctx.fillStyle = "aqua"
            ctx.fillRect(x + 2.5, y + 5, 14, 5)
        }
        else if (direction == "W"){
            ctx.fillRect(x, y, 40, 20);
            ctx.fillStyle = "yellow"
            ctx.fillRect(x - 1.5, y + 1, 3, 5)
            ctx.fillRect(x - 1.5, y + 12.5, 3, 5)
            ctx.fillStyle = "aqua"
            ctx.fillRect(x + 5, y + 2.5, 5, 14)
        }
        else if (direction == "S"){
            ctx.fillRect(x, y, 20, 40);
            ctx.fillStyle = "yellow"
            ctx.fillRect(x + 2.5, y + 39, 5, 3)
            ctx.fillRect(x + 12.5, y + 39, 5, 3)
            ctx.fillStyle = "aqua"
            ctx.fillRect(x + 2.5, y + 30, 14, 5)
        }
        else{
            ctx.fillRect(x, y, 40, 20)
            ctx.fillStyle = "yellow"
            ctx.fillRect(x + 39, y + 1, 3, 5)
            ctx.fillRect(x + 39, y + 12.5, 3, 5)
            ctx.fillStyle = "aqua"
            ctx.fillRect(x + 30, y + 2.5, 5, 14)
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
            if (z == true){
                this.tekenCirkel(a, b);
                i++ 
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
    tekenWeg(){
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "grey";
        ctx.moveTo(50, 255)
        ctx.lineTo(1200, 255);
        ctx.moveTo(1200, 305);
        ctx.lineTo(1000, 305);
        ctx.lineTo(1000, 605);
        ctx.lineTo(650, 605);
        ctx.lineTo(650, 805);
        ctx.moveTo(600, 805);
        ctx.lineTo(600, 305);
        ctx.lineTo(50, 305);
        ctx.moveTo(650, 555);
        ctx.lineTo(650, 305);
        ctx.lineTo(950, 305);
        ctx.lineTo(950, 555);
        ctx.closePath();
        ctx.fillRect(50, 255, 1150, 50);
        ctx.fillRect(950, 305, 50, 300)
        ctx.fillRect(600, 305, 50, 500)
        ctx.fillRect(650, 555, 300, 50)
        ctx.stroke();
        ctx.fillStyle = "white";
        let a = 60
        let b = 635
        let c = 280
        let d = 291
        for (let i = 0; i < 76; i++){
            ctx.fillRect(a, 279.5, 5, 1)
            a = a + 15
        }
        for (let i = 0; i < 23; i++){
            ctx.fillRect(b, 579.5, 5, 1)
            b = b + 15
        }
        for (let i = 0; i < 35; i++){
            ctx.fillRect(624.5, c, 1, 5)
            c = c + 15
        }
        for (let i = 0; i < 20; i++){
            ctx.fillRect(974.5, d, 1, 5)
            d = d + 15
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

