let anakinAttack = 35
let obiwanAttack = 35
let anakinHealth = 100
let anakinDefense = 0

if(anakinAttack > obiwanAttack){
  console.log(" Anakin has the stronger attack.")
}else if(obiwanAttack > anakinAttack){
  console.log("obiwan has the higher attack.")
} else {
  console.log("The force is with both of them.")
}

if(anakinHealth <=0){
  console.log("Anakin has fallen. #noLegs")
}else{
  anakinHealth -= obiwanAttack
  console.log(`Anakin's health is now ${anakinHealth}`)
}
anakinDefense += 25

if(anakinHealth <= obiwanAttack - anakinDefense){
  console.log("Anakin has fallen. #oneMetalArm")
}else {
  anakinHealth -= obiwanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth}`)
}

if(anakinHealth + 50 >= 100){
  anakinHealth = 100
  console.log(anakinHealth)
}

for(let i = 0; i < 5; i++){
  anakinHealth -= obiwanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth}`)
}

while(anakinHealth > 0){
  anakinHealth -= obiwanAttack - anakinDefense
  console.log(`Anakin's health is now ${anakinHealth}`)
  if(anakinHealth <= 0){
    console.log("Anakin has fallen to the darkside and is no longer Anakin. Or alive")
  }
}