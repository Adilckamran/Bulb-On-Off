var activebulb = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-HBpYS8uJZdHGMkCga3PpHQyLUSpEjHP_zk4vrC8TbGEzPilesPjT6Y0I-q5sVt1Xq8&usqp=CAUhttps://cdn1.byjus.com/wp-content/uploads/2021/05/word-image7.png"

var light = document.getElementById("light")
var box = document.getElementById("box")
var button = document.getElementById("btn")
var bulb = document.getElementById("bulb")

function handlebulb() {
    if (bulb.src == activebulb){
        bulb.src = "https://e7.pngegg.com/pngimages/922/441/png-clipart-creative-bulb-lightbulb-energy-saving-lamps-thumbnail.png"
        light.innerHTML = "light agye 🤣"
        light.style.fontWeight = "bold"
        box.style.backgroundColor = "black"
        button.innerHTML = "Off light"

    }
    else {bulb.src = activebulb
        light.innerHTML = ""
        box.style.backgroundColor = "white"
        button.innerHTML = "Open light"
    }

}
