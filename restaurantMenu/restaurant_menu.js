// const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const breakfastMenu = [
    { item: 'Pancakes', price: '$12' },
    { item: 'Eggs Benedict', price: '$22.99' },
    { item: 'Oatmeal', price: '$21.99' },
    { item: 'Frittata', price: '$15' }
  ];

const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


// const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
// const breakfastMenuItemsHTML = breakfastMenu.map((entry, index) => {
//     return `<p>Item ${index + 1}: ${entry.item} - ${entry.price}</p>`;
//   }).join('');
//   Object Destructuring
const breakfastMenuItemsHTML = breakfastMenu.map(({ item, price }, index) => {
return `<p>Item ${index + 1}: ${item} - ${price}</p>`;
}).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
