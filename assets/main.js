const inp = document.getElementsByTagName("textarea")[0];
const play = document.getElementsByClassName("playground")[0];
const fontName = document.getElementsByTagName("p")[0];
const btns = document.querySelectorAll("div:last-of-type button");

inp.addEventListener("keyup",
    function () {
        play.innerText = inp.value;
});

btns.forEach(function (e) {
    e.addEventListener("click",
    function () {
        play.classList.remove("f4", "f3", "f2", "f1");
        play.classList.add(e.classList[0]);
        fontName.innerHTML = `Font Name '${e.dataset.fn}'`;
    });
})