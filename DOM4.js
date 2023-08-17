// Traversing the DOM 
var itemlist=document.querySelector('#items');
//parent node
 console.log(itemlist.parentNode);
 itemlist.parentNode.style.background='#f4f4f4';
 console.log(itemlist.parentNode.parentNode.parentNode.parentNode);

 //parentElement

 console.log(itemlist.parentElement);
 itemlist.parentElement.style.background='#f4f4f4';
 console.log(itemlist.parentElement.parentElement.parentElement);

 //childNodes

 console.log(itemlist.childNodes);
 console.log(itemlist.children);
 console.log(itemlist.children[1]);
 itemlist.children[1].style.backgroundColor='yellow';

 //first child

 console.log(itemlist.firstChild);
 
 
 //first Element child


 console.log(itemlist.firstElementChild);

 itemlist.firstElementChild.textContent='hello 1';

 //last child

 console.log(itemlist.lastChild);

 //last Element child

 console.log(itemlist.lastElemntChild);

 itemlist.lastElementChild.textContent='hello 4';


 
 //nextSibling

 console.log(itemlist.firstSibling);
 
 
 //nextElementSibling 


 console.log(itemlist.firstSibling);


 //previousSibling

 console.log(itemlist.previousSibling);
 
 
 //previousElementSibling 


 console.log(itemlist.previousElementSibling);

 itemlist.previousElementSibling.style.color='green';

 //createElement

 //create a div

 var newDiv = document.createElement('div');
  //add class Name

 newDiv.className='hello';
// add id

 newDiv.id='hello 1';

 //add attr

 newDiv.setAttribute('title' , 'hello Div');

 //create text node

 var newDivText=document.createTextNode('hello world');

 //add text to div

 newDiv.appendChild(newDivText);

 console.log(newDiv);


 
document.addEventListener("DOMContentLoaded", function() {
    var headerTitle = document.getElementById("header-title");
    headerTitle.insertBefore(document.createTextNode("Hello "), headerTitle.firstChild);
});


document.addEventListener("DOMContentLoaded", function() {
    var itemsList = document.getElementById("items");
    var firstItem = itemsList.querySelector("li:first-child");
    firstItem.insertBefore(document.createTextNode("Hello "), firstItem.firstChild);
});






