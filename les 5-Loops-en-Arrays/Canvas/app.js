class App{
    runApplication()    {
        console.log("Hello world");
        for(let i = 0; i < 200; i++)
        {
            let a = Math.floor(Math.random() * 1000)+1;
            let b = Math.floor(Math.random() * 1000)+1;
            this.tekenCirkel(a, b);
        }
    }
    tekenCirkel(x, y){
        let canvas = document.getElementById("canvasId");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI*2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}

let app = new App();
app.runApplication();