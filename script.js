var sBox = document.querySelector(".searchBox");
var btn = document.querySelector(".btn");
var taskList = document.querySelector(".taskList");
var li1 = document.querySelector(".taskList li");

btn.addEventListener("click", () => {
  var sBoxValue = sBox.value;
  if (sBoxValue == "") {
    alert("please enter something");
  } else {
    var newLi = document.createElement("li");
    newLi.innerHTML = sBoxValue;
    var newimg = document.createElement("img");
    newimg.src = "unchecked.png";
    newimg.classList.add("chbox");
    newLi.appendChild(newimg);

    taskList.appendChild(newLi);

    var button = document.createElement("button");
    button.innerHTML = "Remove";
    newLi.appendChild(button);

    button.onclick = function () {
      button.parentElement.remove();
    };
  }
  sBox.value = "";
});




taskList.addEventListener("click", function (e) {  
    if ((e.target.tagName = "li")) {
    e.target.classList.toggle("checked");
    e.target.querySelector('.chbox').classList.toggle('chboxN')
    // newimg.src = "checked.png";
  }
});