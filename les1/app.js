class App
{
    runApplication()
    {  
        console.log("hello world");
        let appNaam = "App.js";
        let versienummer = 0.9;
        let versiedatum = "22/11/2022";
        let autheur = "Wessel";
        let copyright = "dunno fam";
        let distributeur = "Some money hungry arsehole prob";
        let darkmode = true;
        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();

