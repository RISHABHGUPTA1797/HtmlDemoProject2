// Access all "li" tags using getElementsByTagName:
const listItems = document.getElementsByTagName("li");

// 1. Change the color of the 5th "li" tag to blue:
listItems[4].style.color = "blue";

// 2. Make all "li" tags italic:
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontStyle = "italic";
}
