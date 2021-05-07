



function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Вы должны что-то написать!");
    } else {
      document.getElementById("ul").appendChild(li);
    }
    document.getElementById("input").value = "";
  
    let span = document.createElement("span");
    let txt = document.createTextNode("/u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }