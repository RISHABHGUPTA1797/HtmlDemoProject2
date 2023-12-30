document.addEventListener('DOMContentLoaded', function () {
    var basketHeading = document.getElementById('basket-heading');
    var fruitsList = document.getElementsByClassName('fruit');
  
    // Change background color for the 3rd element in the list
    fruitsList[2].style.backgroundColor = 'yellow';
  
    // Make all elements in the list have bold font
    for (var i = 0; i < fruitsList.length; i++) {
      fruitsList[i].style.fontWeight = 'bold';
    }
  });
  