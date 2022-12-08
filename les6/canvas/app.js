class App{
    runApplication(){
        console.log("hello world");
        this.tekenDing();
        //code
    }
    tekenDing(){
        let canvas = document.getElementById("canvasId")
        let ctx = canvas.getContext("2d");
        canvas.addEventListener("mousemove", (evt)=>{
            let mousePos = this.mousePosition(canvas, evt);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.fillStyle = "green"
            ctx.rect(mousePos.x, mousePos.y, 30, 30)
            ctx.fill();
        })



        ctx.fillStyle = "green";
        ctx.rect(100, 100, 30, 30);
        ctx.stroke();
        ctx.fill();
    }
    mousePosition(canvas, evt){
        let rect = canvas.getBoundingClientRect();
        return{
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

let app = new App();
app.runApplication();