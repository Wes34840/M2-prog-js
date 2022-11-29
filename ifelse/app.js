class App
{
    runApplication()
    {  
        console.log("hello world");
        //code go brrrr
        let title = document.getElementById("newstitle");       
        let num = Math.random();
        if (num == 0)
        {
            console.log(num)
            title.style.background = "#00FF00";
        }
        else if (num < 0.2)
        {
            console.log(num)
            title.style.background = "#FF0000";
        }
        else if (num >= 0.2 && num <= 0.6)
        {
            console.log(num)
            title.style.background = "#0000FF";
        }
        else 
        {
            console.log(num)
            title.style.background = "#FF00FF";
        }

    }
}

let app = new App();
app.runApplication();

