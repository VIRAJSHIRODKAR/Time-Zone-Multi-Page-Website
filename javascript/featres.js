document.addEventListener("DOMContentLoaded", function () {
    var circle = document.querySelectorAll(".circle")
    var color = ["#5E35B1", "#E91E63", "#651FFF", "#EEFF41", "#1DE9B6", "#00897B", "#0091EA", "#E53935", "#E53935", "#00C853"]
    for (var i = 0; i < circle.length; i++) { circle[i].style.background=color[i]; } })