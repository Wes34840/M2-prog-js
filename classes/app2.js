class App
{
    constructor(name, carnivore, age){
        this.name = name
        this.carnivore = carnivore
        this.age = age
        this.plantName = "grass";
    }
    runApplication()
    {
        console.log(this.name)
        let dino1 = new Dino(this.name[0], this.carnivore[0], this.age[0]);
        console.log(dino1);

        let dino2 = new Dino(this.name[1], this.carnivore[1], this.age[1]);
        console.log(dino2);

        let dino3 = new Dino(this.name[2], this.carnivore[2], this.age[2]);
        console.log(dino3);

        let plant = new Plant(this.plantName);

        dino1.eetPlant(plant)
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


let arrNaam = ["Velociraptor", "Brachiosaurus", "Tyranosaurus Rex"]
let arrCarnivore = [true, false, true]
let arrAge = [15, 20, 30]

let app = new App(arrNaam, arrCarnivore, arrAge);
app.runApplication();