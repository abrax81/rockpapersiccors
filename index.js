function getComputerchoice(computerselection){
      return computerselection [Math.floor(Math.random()*computerselection.length)]
     
}

let computerselection =["Rock", "Paper","Scissors"]


let selectionButtons = document.querySelectorAll("[data-selection]")

selectionButtons.forEach(selectionButtons=> {
    selectionButtons.addEventListener("click", e=>{
        let selectionName = selectionButton.dataset.selectionButton
        makeSelection (selectionName)
    })
})

function makeSelection(selection){
    console.log(selection)
}