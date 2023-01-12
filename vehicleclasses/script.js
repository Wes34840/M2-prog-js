class Firearm
{
    constructor(
        name,
        caliber,
        mass,
        roundsPerMinute,
        magazineSize,
        bullets 
    ){
        this.name = name
        this.caliber = caliber
        this.mass =  mass
        this.roundsPerMinute = roundsPerMinute
        this.magazineSize = magazineSize
        this.bullets = bullets
    }
    burst(timeInSeconds){
        let perSecond = Math.round(this.roundsPerMinute/60)
        let burst = perSecond*timeInSeconds
        if (burst > this.bullets){
            this.bullets = 0
            console.log("You mag dump into trash")
        }
        else if (burst = 1){
            console.log("you shoot one bullet")
            this.bullets = this.bullets - 1
        }
        else{
            this.bullets = this.bullets - burst
            console.log("you shoot " + burst + " bullets")
        }
    }
    reload(){
        console.log("You have reloaded the " + this.name)
        this.bullets = this.magazineSize
    }
}

const gun1 = new Firearm("AKM", "7.62x39mm", "3,3 kg", 600, 30, 30);
const gun2 = new Firearm("HK416 A5", "5.56x45 NATO", "4,47 kg", 850, 30, 20)
const biggun = new Firearm("Anzio 20mm rifle", "20x102mm", "57 kg", 1, 3, 3)


console.log(gun1)
console.log(gun2)
console.log(biggun)

gun1.burst(3);
gun2.burst(1);

console.log(gun1)
console.log(gun2)