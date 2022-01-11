btn.addEventListener("click", fnc);
function fnc() {
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    if (a1.checked) {
        alert("Правильный ответ");
    } else {
        alert("Неправильный ответ");
    }
}