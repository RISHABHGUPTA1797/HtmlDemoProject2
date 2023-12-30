// Write the code as shown in the video below:

const mainHeading = document.querySelector('#main-heading'); 
mainHeading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');

fruits.style.backgroundColor = 'gray';

fruits.style.padding = '30px';

fruits.style.margin = '30px'; 

fruits.style.width = '50%';

fruits.style.borderRadius = '5px';

fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');

basketHeading.style.marginLeft = '30px';

basketHeading.style.color = "brown";

// QuerySelectorAll is used to grab all the elements with same class/tag

const fruitItems = document.querySelectorAll('.fruit');

for(let i=0; i<fruitItems.length; i++){
  fruitItems[i].style.backgroundColor = 'white';

  fruitItems[i].style.padding = '10px';

  fruitItems[i].style.margin = '10px';

  fruitItems[i].style.borderRadius = '5px';
}


const OddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');

for(let i=0; i<OddFruitItems.length; i++){

    OddFruitItems[i].style.backgroundColor = 'lightgray';

}

const EvenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0; i<OddFruitItems.length; i++){
    EvenFruitItems[i].style.color = "white";
    EvenFruitItems[i].style.backgroundColor = 'brown';

}

// Write answer to the questions asked below: