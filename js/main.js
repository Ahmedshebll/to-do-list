let txt = document.getElementById("txt");
let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.onclick = () => {
  let elem = document.createElement("p");
  container.appendChild(elem);
  elem.appendChild(document.createTextNode(txt.value));
  txt.value = "";

  elem.onclick = () => {
    elem.style.textDecoration = "line-through";
    elem.style.fontStyle = "italic";
    elem.style.color = 'tomato'
  };
  elem.ondblclick = () => elem.remove();
};
