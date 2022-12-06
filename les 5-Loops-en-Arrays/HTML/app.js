class App
{
    runApplication()
    {
        console.log("Hello world");
        //code goes here
        let arr = ["Metallica", "Sabaton", "Rammstein", "Slipknot", "Motörhead", "Gürschach"];
        console.log(arr);
        let headers = document.getElementsByClassName("bandName");
        for(let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
}

let app = new App();
app.runApplication();