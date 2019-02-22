// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main');

main.addEventListener('click', function(event){
  alert('I was clicked');
});

const input = document.querySelector('input');
<<<<<<< HEAD

=======
 
>>>>>>> 0173af458b55074ee9584b23902ee71464eb7115
input.addEventListener('keydown', function(e) {
  console.log(e.which);
});

let divs = document.querySelectorAll('div');
<<<<<<< HEAD

=======
 
>>>>>>> 0173af458b55074ee9584b23902ee71464eb7115
function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!
<<<<<<< HEAD

=======
 
>>>>>>> 0173af458b55074ee9584b23902ee71464eb7115
  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
<<<<<<< HEAD

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
=======
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
>>>>>>> 0173af458b55074ee9584b23902ee71464eb7115
