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

      }
  }
  function calculate(){}

