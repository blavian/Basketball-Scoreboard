// grabbing all the ids we need to use
let home_score = document.getElementById("home__score")
let away_score = document.getElementById("away__score")
const incrementHomeBy1 = document.getElementById("plus__one__point")
const incrementHomeBy2 = document.getElementById("plus__two__points")
const incrementHomeBy3 = document.getElementById("plus__three__points")
const incrementAwayBy1 =  document.getElementById("plus__one__point__away")
const incrementAwayBy2 = document.getElementById("plus__two__points__away")
const incrementAwayBy3 = document.getElementById("plus__three__points__away")
const newGame = document.getElementById("newGame")


// global variables
let home_count = 0;
let away_count = 0;

// event listeners
incrementHomeBy1.addEventListener("click", ()=>{
    home_count+=1
    home_score.innerHTML = home_count
})

    incrementHomeBy2.addEventListener("click", ()=>{
    home_count+=2
    home_score.innerHTML = home_count    
    })
    

incrementHomeBy3.addEventListener("click", ()=>{
    home_count+=3
    home_score.innerHTML = home_count 
}) 



incrementAwayBy1.addEventListener("click", ()=>{
    away_count+=1
    away_score.innerHTML = away_count  
})
  


incrementAwayBy2.addEventListener("click", ()=>{
    away_count+=2
    away_score.innerHTML = away_count  
})
  

incrementAwayBy3.addEventListener("click", ()=>{
    away_count+=3
    away_score.innerHTML = away_count
})
    


newGame.addEventListener("click", ()=>{
    home_score.innerHTML = 0
    home_count = 0
    away_score.innerHTML = 0
    away_count = 0
})
