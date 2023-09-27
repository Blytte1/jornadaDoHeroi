let losses = 0
let victories = 0
let turn = 0
let score = getFightsBalance(victories,losses)
let level = ""
let hero = [score,level]

function getFightScore(victory,loss){
    if (turn % 5 >= 0) {
        losses++
        console.log("O Herói Perdeu neste turno")
    }
    else{
        victories++
        console.log("O Herói foi vitorioso neste turno")
    }
    result = victories - losses
    return result
}

function praiseHero() {
     console.log(`O Herói tem de saldo de ${hero[0]} está no nível de ${hero[1]}`)
    }

while (turn <200){
    turn++
    getFightScore()

    
switch (true){
    case (hero[0]<= 10): hero[1] = "Ferro" 
    
    break
    case  (hero[0] >= 11 && hero[0] <=20): hero[1] = "Bronze"
    praiseHero()
    break
    case  (hero[0] >= 21 && hero[0] <= 50): hero[1] = "Prata"
    praiseHero()
    break
    case  (hero[0] >= 51 && hero[0] <= 80): hero[1] = "Ouro"
    praiseHero()
    break
    case (hero[0] >= 81 && hero[0] <= 90): hero[1] = "Diamante" 
    praiseHero()
    break
    case  (hero[0] >= 91 && hero[0] <= 100): hero[1] = "Lendário"
    praiseHero()
    break
    case  (hero[0] > 100): hero[1] = "Imortal"
    praiseHero()
    break
    }


}