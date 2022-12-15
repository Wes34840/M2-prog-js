class App
{
    runApplication(){
        console.log("Hello world");
        let str = this.rollStat();
        let dex = this.rollStat();
        let con = this.rollStat();
        let wis = this.rollStat();
        let int = this.rollStat();
        let cha = this.rollStat();
        this.goToHTML(str, "Strength");
        this.goToHTML(dex, "Dexterity");
        this.goToHTML(con, "Constitution");
        this.goToHTML(wis, "Wisdom");
        this.goToHTML(int, "Intelligence");
        this.goToHTML(cha, "Charisma");
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
    goToHTML(statNumb, statName){
        const nieuwElement = document.createElement("h3");
        nieuwElement.innerHTML = statName + " = " + statNumb;
        list.appendChild(nieuwElement);
    }
}

const list = document.getElementById("statList")
let app = new App();
app.runApplication();