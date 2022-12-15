class App
{
    runApplication()
    {
        let dino1 = new Dino("Velociraptor", true, 15);
        console.log(dino1);

        let dino2 = new Dino("Brachiosaurus", false, 20);
        console.log(dino2);

        let dino3 = new Dino("Tyranosaurus Rex", true, 50);
        console.log(dino3);

        let plant = new Plant("Grass");

        dino2.eetPlant(plant);
        dino3.eetDino(dino2);
    }
}

class Plant
{
    constructor(name){
        this.name = name;
    }
}

class Dino
{
    constructor(name, carnivore, age)
    {
        this.name = name;
        this.carnivore = carnivore;
        this.age = age;
        this.alive = true;
        this.hunger = true;
    }
    eetDino(dino2){
        console.log(this.name + "eet de dino " + dino2.name + " op.")
        dino2.leeft = false;
    }
    eetPlant(plant){
        console.log(this.name + "eet de plant " + plant.name + " op.")
        plant.leeft = false;
    }
}

let app = new App();
app.runApplication();