let b=document.querySelector("#Button");
if(b) {
    b.onclick=buttonClick;
}
let m= [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"];
  function buttonClick(){
      let main = document.querySelector("main");
      if(main){
          while(main.children.length > 0) {
              main.children[0].remove();
          }
          for( let i of m)
          {
              let btn = document.createElement("input");
              btn.type="button";
              btn.value=i;
              btn.onlick=calculate;
              main.append(btn);
          }
          main.onclick = calculate;

      }
  }

  let firstNumber="";
  let display = document.querySelector("#Display");
  /**
   *  @param {MouseEvent} e
   */
  function calculate(e){
      //element na kotoriy ustanovl. sobytie
      //e.currentTarget;
      //element na kotoriy najali
     //e.target;
      if(display) {
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
                                                firstNumber += e.target.value;
                                                break;
     }
      display.value = firstNumber;
  }

