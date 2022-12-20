class App
{
    runApplication(){
        console.log("Hello world");
    }
    diceRoll(){
            return Math.floor(Math.random() * 6) + 1;
    }
    rollStat(){
        let d1 = this.diceRoll();
        let d2 = this.diceRoll();
        let d3 = this.diceRoll();
        let d4 = this.diceRoll();
        let diceArr = [d1, d2, d3, d4];
        diceArr.sort();
        let total = diceArr[1] + diceArr[2] + diceArr[3];
        console.log(diceArr);   
        return total
    }
    goToHTML(str, dex, con, wis, int, cha){
        let strength = document.getElementById("Strength")
        let dexterity = document.getElementById("Dexterity")
        let constitution = document.getElementById("Constitution")
        let wisdom = document.getElementById("Wisdom")
        let intelligence = document.getElementById("Intelligence")
        let charisma = document.getElementById("Charisma")
        strength.textContent = "strength = " + str;
        dexterity.textContent = "strength = " + dex;
        constitution.textContent = "strength = " + con;
        wisdom.textContent = "strength = " + wis;
        intelligence.textContent = "strength = " + int;
        charisma.textContent = "strength = " + cha;  
    }
    rollNew(){
        let str = this.rollStat();
        let dex = this.rollStat();
        let con = this.rollStat();
        let wis = this.rollStat();
        let int = this.rollStat();
        let cha = this.rollStat();
        this.goToHTML(str, dex, con, wis, int, cha);
    }
}

const list = document.getElementById("statList")
let app = new App();
app.runApplication();