var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// const result = document.createElement("p")! as HTMLParagraphElement;
// const app = document.getElementById("app")! as HTMLBodyElement;
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(input1.value, input2.value));
    //   result.textContent = input1.value + input2.value;
    //   app?.appendChild(result);
});
