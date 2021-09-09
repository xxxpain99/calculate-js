let b = document.querySelector("#Button");
if (b) {
    b.onclick = buttonClick;
}
let m = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"];
//hranit pervoe chislo do najatiya "deystviya"
//a tak je rezultat vichislenya
let firstNumber = "";
//chislo, vvodimoe posle najatiya deystviya 
//obnulyaetsya posle najatiya na "="
let secondNumber = "";
//hranit najatoe deystvie
let action = "";
//flag dlya opredeleniya, chto nujno ochistit "display"
//pered vvodom vtorogo chisla
let clearDisplay = false;
//flag dlya opredeleniya kakoe chislo doljno vvoditsya,
//pervoe ili vtoroe (v firstNumber ili secondNumber)
let isfirstNumber = true;
function buttonClick() {
    let main = document.querySelector("main");
    if (main) {
        while (main.children.length > 0) {
            main.children[0].remove();
        }
        for (let i of m) {
            let btn = document.createElement("input");
            btn.type = "button";
            btn.value = i;
            btn.onlick = calculate;
            main.append(btn);
        }
        main.onclick = calculate;

    }

    firstNumber = "";
    secondNumber = "";
    action = "";
    clearDisplay = false;
    isfirstNumber = true;

}


let display = document.querySelector("#Display");
/**
 *  @param {MouseEvent} e
 */
function calculate(e) {
    //element na kotoriy ustanovl. sobytie
    //e.currentTarget;
    //element na kotoriy najali
    //e.target;
    if (display) {
        display.value = e.target.value;
    }

    switch (e.target.value) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (clearDisplay === true) {

                clearDisplay = false;
                isFirstNumber = false;
            }
            if (isFirstNumber === true) {
                firstNumber += e.target.value;
            } else {
                secondNumber += e.target.value;
            }
            break;
        case "/":
        case "*":
        case "-":
        case "+":
            action = e.target.value;
            clearDisplay = true;
            break;
        case "=":
            if (action.length === 0) break;
            let leftNumber = +firstNumber;
            let rightNumber = +secondNumber;
            console.log(leftNumber);
            console.log(rightNumber);
            switch (action) {
                case "/":
                    firstNumber = (leftNumber / rightNumber);
                    break;
                case "*":
                    firstNumber = (leftNumber * rightNumber);
                    break;
                case "-":
                    firstNumber = (leftNumber - rightNumber);
                    break;
                case "+":
                    firstNumber = (leftNumber + rightNumber);
                    break;
            }
            secondNumber = "";
            break;

    }
    display.value = firstNumber;




}

