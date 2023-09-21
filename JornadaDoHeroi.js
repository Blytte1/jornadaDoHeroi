let hero = ["Victorius",0,""]

while (hero[1] <= 10002){
    hero[1]+= 1
    
switch (true){
    case (hero[1]<= 1000): hero[2] = "Ferro" 
    console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    case  (hero[1] >= 1001 && hero[1] <=2000): hero[2] = "Bronze"
    console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    case  (hero[1] >= 2001 && hero[1] <= 5000): hero[2] = "Prata"
    console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    case  (hero[1] >= 5001 && hero[1] <= 7000): hero[2] = "Ouro"
    console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    case (hero[1] >= 7001 && hero[1] <= 8000): hero[2] = "Platina" 
    console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    case  (hero[1] >= 8001 && hero[1] <= 9000): hero[2] = "Ascendente"
    console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    case  (hero[1] >= 9001 && hero[1] <= 10000): hero[2] = "Imortal"
    console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    case  (hero[1] >= 10001): hero[2] = "Radiante"
   console.log(`O Herói de nome  ${hero[0]}  está no nível ${hero[2]}`)
    break
    }
}