let $ = document
let bord = $.querySelector(".container")
let pos_x = 0
let pos_Y = 0


function cr_color(px, py){
    let new_div = $.createElement("div")
    new_div.setAttribute("class", "rang")
    new_div.style.top = py + "px"
    new_div.style.left = px + "px"
    bord.append(new_div)
}



bord.addEventListener("mousemove", function(event){
    pos_x = event.pageX
    pos_Y = event.pageY
    cr_color(pos_x, pos_Y)
    console.log(event)
})