const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// the hex colors start with an # followed by six values
// example #f15025

const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
  let hexColor = "#"
  for (i=0; i<6; i++){
    let randomNumber = Math.floor(Math.random() * hex.length)
    hexColor += hex[randomNumber]

  }

  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
  
// to check if the hex value is white
// if white change the button color to black

  if (hexColor !== "#ffffff") {
    btn.style.color = "white"
    btn.style.border = "1px solid white"
  }else{
    btn.style.color = "black"
    btn.style.border = "1px solid black"
  }

})