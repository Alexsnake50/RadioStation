count=1;
function myFunction(b,a){
  console.log(b);
  if(b==1){
    var element = document.getElementById("div");
    fetch('/Tests',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "text/plain"
      },
      body:numberOfChildren = Math.floor(element.getElementsByTagName('*').length/4)
    }
  )
  .then(function(res) {
    return res.json();
  })
  .then(function(myJson) {
    for(i=0;i<myJson.length;i++){
    const img = document.createElement("img");
    img.src=myJson[i]['img'];
    const element = document.getElementById("div");
    const div = document.createElement("div");
    div.setAttribute("id", "div"+myJson[i]['ID']);
    div.className = "container half";
    const H2 = document.createElement("H2");
    id =myJson[i]['ID'];
    img.setAttribute("id", id);
    img.addEventListener('click', function(){Destroy(this)});
    H2.setAttribute("id", id);
    H2.addEventListener('click', function(){Destroy(this)});
    var t = document.createTextNode(myJson[i]['Name']);
    H2.appendChild(t);
    const p = document.createElement("p");
    var t2 = document.createTextNode(myJson[i]['Author']);
    p.appendChild(t2);
    const Descript= document.createElement("p");
    var t4 = document.createTextNode(myJson[i]['Descript']);
    Descript.appendChild(t4);
    element.appendChild(div);
    const element2 = document.getElementById("div"+myJson[i]['ID']);
    element2.appendChild(img);
    element2.appendChild(H2);
    element2.appendChild(p);
    }
  });
  }
  else{
}
}
myFunction(count);
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    setTimeout(() => { myFunction(count); }, 500);
  }
};
function Destroy(el){
  count=0;
  $('#div').empty();
  console.log(this.event.target.id);
  const element = document.getElementById("div");
  fetch('/Find',
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Type": "text/plain"
    },
    body:this.event.target.id
  },
)
.then(function(res) {
  return res.json('');
})
.then(function(myJson) {
  for(i=0;i<myJson.length;i++){
    var button = document.createElement('button');
    button.innerHTML = 'Вернутся назад';
    button.onclick = function(){
      $('#div').empty();
      count=1;
      myFunction(count);
    };
    const img = document.createElement("img");
    img.src=myJson[i]['img'];
    img.className+="img"
    const element = document.getElementById("div");
    const div = document.createElement("div");
    div.setAttribute("id", "div"+i);
    const H2 = document.createElement("H2");
    id =myJson[i]['ID'];
    H2.setAttribute("id", id);
    H2.addEventListener('click', function(){Destroy(this)});
    var t = document.createTextNode(myJson[i]['Name']);
    H2.appendChild(t);
    const p = document.createElement("p");
    const Descript= document.createElement("p");
    var t4 = document.createTextNode(myJson[i]['Descript']);
    Descript.appendChild(t4);
    var t2 = document.createTextNode(myJson[i]['Author']);
    p.appendChild(t2);
    const Date= document.createElement("p");
    var t3 = document.createTextNode(myJson[i]['Date']);
    Date.appendChild(t3);
    element.appendChild(button);
    element.appendChild(div);
    const element2 = document.getElementById("div"+i);
    if(myJson[i]['Video']!=""){
      var ifrm = document.createElement('iframe');
      ifrm.setAttribute('src', myJson[i]["Video"]);
      element2.appendChild(ifrm);
    }
    else{
      element2.appendChild(img);
    }
    element2.appendChild(H2);
    element2.appendChild(Descript);
    element2.appendChild(p);
    element2.appendChild(Date);
  }
});
}
const input = document.querySelector('input');
const input2 = document.getElementById('input2');
const log = document.getElementById('values');
const log2 = document.getElementById('values2');
input2.addEventListener('input', Log);
input.addEventListener('input', Log);
function Log(e) {
  console.log(e.target.value);
}