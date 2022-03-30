console.log("console is running");

var a = 0;
// firstItem
var add = document.getElementById("add");
var sub = document.getElementById("sub");
add.addEventListener('click', addProduct);
function addProduct() {
  a++;
  if (a >= 0) {
    document.getElementById("item1").value = a;
  }
}
sub.addEventListener("click", subProduct);
function subProduct() {
  if (a > 0) {
    a--;

    document.getElementById("item1").value = a;
  }
}
a1 = 0;
// secondItem
var add1 = document.getElementById("add1");
var sub1 = document.getElementById("sub1");
add1.addEventListener("click", add1Product);
function add1Product() {
  a1++;
  if (a1 >= 0) {
    document.getElementById("item2").value = a1;
  }
}
sub1.addEventListener("click", sub1Product);
function sub1Product() {
  if (a1 > 0) {
    a1--;

    document.getElementById("item2").value = a1;
  }
}
a2 = 0;
// ThirdItem
var add2 = document.getElementById("add2");
var sub2 = document.getElementById("sub2");
add2.addEventListener("click", add2Product);
function add2Product() {
  a2++;
  if (a2 >= 0) {
    document.getElementById("item3").value = a2;
  }
}
sub2.addEventListener("click", sub2Product);
function sub2Product() {
  if (a2 > 0) {
    a2--;

    document.getElementById("item3").value = a2;
  }
}
var a3 = 0;
// FourthItem
var add3 = document.getElementById("add3");
var sub3 = document.getElementById("sub3");
add3.addEventListener("click", add3Product);
function add3Product() {
  a3++;
  b3 = a3;
  if (a3 >= 0) {
    document.getElementById("item4").value = a3;
  }
}
sub3.addEventListener("click", sub3Product);
function sub3Product() {
  if (a3 > 0) {
    a3--;

    document.getElementById("item4").value = a3;
  }
}

// Bill calculation
var buyItem = document.querySelector("#buyBtn")

buyItem.addEventListener('click',total)

function total(){
  var  itemPrice1 = a*17;
  var  itemPrice2 = a*26;
  var  itemPrice3 = a*59;
  var  itemPrice4 = a*27;
   }