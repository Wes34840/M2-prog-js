class App
{
    runApplication()
    {  
        console.log("hello world");
        this.mario();
        let fnuuy = this.bowser();
        console.log(fnuuy);
        let meth = this.optellen(5, 2);
        console.log(meth);
        let bazinga = this.justAbout();
        console.log(bazinga);
    }
    mario()
    {
        console.log("MARIO!!")
    }
    bowser()
    {
        return ("BWAHAHA!!!")
    }
    optellen(a, b)
    {
        let c = (a + b)
        return c
    }
    justAbout()
    {
        return ("just about mcfucking had it")
    }
}

let app = new App();
app.runApplication();

