var heart = document.querySelector("#heart");
var colorList = ["red", "orange", "yellow", "green", "blue", "indigo"];
var index = 0;

heart.onclick = function() {
    if (index == colorList.length) {
        index = 0;
    }

    document.querySelector("#aktuell").style.backgroundColor = colorList[index];
    index++;
}

