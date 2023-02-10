

const statusArr = ["Powered Up", "Big", "Small", "Dead"]
const statusUpdate = statusArr[Math.floor(Math.random() * statusArr.length)]


class Player {
    constructor(name, totalCoins, status, hasStar,) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar

    }


    setName(namePicked) {
        this.name = namePicked
        return namePicked;

    }

    gotHit() {

        this.status = statusUpdate
        return statusUpdate



    }





    gotPowerup() {
        console.log("you got a star!")
        this.hasStar = true;
        this.status = "Powered Up"
        // this.status = statusUpdate
        // return statusUpdate

    }
    addCoin() {
        player.totalCoins += 1;

    }
    print() {
        console.log(player)
    }

}


const intervalId = setInterval(() => {
    randomNum()
}, 1000)
function randomNum() {
    
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        player.gotHit()
    } else if (num === 1) {
        player.gotPowerup()
    } else {
        player.addCoin()
    }


    player.print()
  
    player.status === "Dead"? stopPlaying() : intervalId


}

function stopPlaying() {
    clearInterval(intervalId)
  

        console.log("game over! you died")

    

    }
const player = new Player("", 0, "Small", false)
player.setName("Mario")
player.gotHit(statusUpdate)
randomNum()
















// player.gotPowerup()

