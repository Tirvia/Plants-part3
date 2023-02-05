var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-list');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
})

var buttons1 = document.getElementById("Gardens");
var buttons2 = document.getElementById("Lawn");
var buttons3 = document.getElementById("Planting");
var but1 = document.getElementById("gardens1");
var but5 = document.getElementById("gardens2");
var but2 = document.getElementById("planting1");
var but3 = document.getElementById("lawn");
var but4 = document.getElementById("planting2");
var but6 = document.getElementById("planting3");


buttons1.addEventListener('click', function(){
    buttons1.classList.toggle('active');
	  but1.classList.toggle('active');
    but5.classList.toggle('active');
});
buttons2.addEventListener('click', function(){
  buttons2.classList.toggle('active');
  but3.classList.toggle('active');
});
buttons3.addEventListener('click', function(){
  buttons3.classList.toggle('active');
  but2.classList.toggle('active');
  but4.classList.toggle('active');
  but6.classList.toggle('active');
});

var select = document.querySelector('.select');
select.addEventListener('click', function(){
  select.classList.toggle('active');
  var value;
  value = select.value;
  
})
opt1 = document.getElementById("1");
opt2 = document.getElementById("2");
opt3 = document.getElementById("3");
opt4 = document.getElementById("4");

function getSelectValue(e){
  let selectedValue = e.target.value;
  
  switch(selectedValue) {
    case '0':
      opt1.classList.remove('active');
      opt2.classList.remove('active');
      opt3.classList.remove('active');
      opt4.classList.remove('active');
      break;
    case '1':
      opt1.classList.toggle('active');
      opt2.classList.remove('active');
      opt3.classList.remove('active');
      opt4.classList.remove('active');
      break;
    case '2':
      opt2.classList.toggle('active');
      opt1.classList.remove('active');
      opt3.classList.remove('active');
      opt4.classList.remove('active');
      break;
    case '3':
      opt3.classList.toggle('active');
      opt2.classList.remove('active');
      opt1.classList.remove('active');
      opt4.classList.remove('active');
      break;
    case '4':
      opt4.classList.toggle('active');
      opt2.classList.remove('active');
      opt3.classList.remove('active');
      opt1.classList.remove('active');
      break;
  }

}

const list = document.querySelector('.select');

list.addEventListener('change', function(e) {  
  getSelectValue(e)
});