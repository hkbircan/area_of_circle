function enforce_maxlength(event) {
    var t = event.target;
    if (t.hasAttribute('maxlength')) {
      t.value = t.value.slice(0, t.getAttribute('maxlength'));
    }
  }
document.body.addEventListener('input', enforce_maxlength);

const areaBtn= document.querySelector(".areaBtn");
const periBtn= document.querySelector(".periBtn");

areaBtn.onclick = () =>{
    const radius = document.querySelector(".input1").value;
    let result = radius * radius * 3.14;
    document.querySelector(".result").value = result;

}

periBtn.onclick = () =>{
    const radius = document.querySelector(".input1").value;
    let result = radius * 2 * 3.14;
    document.querySelector(".result").value = result;

}

