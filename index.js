var hide = document.getElementById("hide")
var img = document.getElementById("img")
var btn = document.getElementById("btn")
var H2 = document.getElementById("H2")
var species = document.getElementById("species")
var gender = document.getElementById("gender")
var house = document.getElementById("house")
var alive = document.getElementById("alive")
var dob = document.getElementById("dob")
var yob = document.getElementById("yob")
var ancestry = document.getElementById("ancestry")
var eyecolour = document.getElementById("eyecolour")
var haircolour = document.getElementById("haircolour")
var wand = document.getElementById("wand")
var patronus = document.getElementById("patronus")
var hs = document.getElementById("hs")
btn.onclick = function () {
    var found = false
    var input = document.getElementById("input").value
    hide.setAttribute("class", "hidden")
    wand.innerHTML = " "
    fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(data => data.forEach(async list => {
            if (list.name.toLowerCase() == input.toLowerCase()) {
                hide.removeAttribute("class", "hidden")
                H2.innerHTML = list.name
                img.innerHTML = '<img src="' + list.image + '" alt="">'
                species.innerHTML = list.species
                gender.innerHTML = list.gender
                house.innerHTML = list.house
                alive.innerHTML = list.alive
                dob.innerHTML = list.dateOfBirth
                yob.innerHTML = list.yearOfBirth
                ancestry.innerHTML = list.ancestry
                eyecolour.innerHTML = list.eyeColour
                haircolour.innerHTML = list.hairColour
                wand.innerHTML = wand.innerHTML + list.wand.wood + "<br>" +
                    list.wand.core + "<br>" + list.wand.length + " inches"
                patronus.innerHTML = list.patronus
                hs.innerHTML = list.hogwartsStudent

            }
        }))
}