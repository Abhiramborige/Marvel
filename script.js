
var demo = [
    "Hulk",
    "Spiderman",
    "Captain America",
    "Logo",
    "Black Panther",
    "Iron Man",
    "Ant Man",
    "Thor",
    "CaptainMarvel"
];

var l = document.getElementsByClassName("image");

for (let i=0;i<demo.length;i++) {
    l[i].addEventListener("mouseover", function () {
        this.style.opacity="0.8";
        this.style.transform="scale(1.1)";
        console.log(demo[i]);
        this.innerHTML = demo[i];

    });
    l[i].addEventListener("mouseout", function () {
        this.style.opacity="1.0";
        this.style.transform="scale(1.0)";
        this.innerHTML = "";
    });
}