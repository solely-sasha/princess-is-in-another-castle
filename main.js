
class Player{
    constructor(name, totalCoins, status, hasStar, setName){
        this.name = this.name
        this.totalCoins = totalCoins
        this.status = this.status
        this.hasStar = this.hasStar
        this.setName = this.setName
        this.gotHit = this.gotHit
        this.gotPowerup = this.gotPowerup
        this.addCoin = this.addCoin
        this.print = this.print
    }
    
    setName(namePicked){
this.name = namePicked
 return namePicked
   
    }
    
    gotHit(){
        
    }
    gotPowerup(){
    }
    addCoin(){
        player.totalCoins += 1
    }
    print(){
        console.log({player})
    }
}

// Don't repeat yourself . DRY



const player = new Player("", 0, "small", true,    )
console.log(player.setName("mario"))
console.log(player.print())
