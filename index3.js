const form = document.querySelector('form');
const fruitToAddInput = document.getElementById('fruit-to-add');
const fruitsList = document.querySelector('.fruits');

// Add functionality
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fruitName = fruitToAddInput.value.trim();

  if (fruitName) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('fruit');
    newListItem.textContent = fruitName;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete-btn');
    newListItem.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    newListItem.appendChild(editBtn);

    fruitsList.appendChild(newListItem);
    fruitToAddInput.value = '';
  }
});

// Delete functionality
fruitsList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.remove();
  }
});
