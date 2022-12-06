class App
{
    runApplication()
    {
        this.drawTriangle();
        let x = this.RandInt(100, 200);
        let y = this.RandInt(200, 300);
        let z = this.isInside(100, 200, 150, 300, 200, 200, x, y);
        console.log(z);
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
    }


let app = new App();
app.runApplication();