const menuList = document.querySelector('.menu-list');

// Button
const allButton = document.querySelector('.all');
const breakfastButton = document.querySelector('.breakfast');
const lunchButton = document.querySelector('.lunch');
const shakesButton = document.querySelector('.shakes');
const dinnerButton = document.querySelector('.dinner');

// Type
const breakfastType = document.querySelector('.breakfast-type');
const lunchType = document.querySelector('.lunch-type');
const shakesType = document.querySelector('.shakes-type');
const dinnerType = document.querySelector('.dinner-type');


// Button Action
allButton.addEventListener('click', () => {
    breakfastType.style.display = 'grid';
    lunchType.style.display = 'grid';
    shakesType.style.display = 'grid';
    dinnerType.style.display = 'grid';
});
breakfastButton.addEventListener('click', () => {
    breakfastType.style.display = 'grid';
    lunchType.style.display = 'none';
    shakesType.style.display = 'none';
    dinnerType.style.display = 'none';
});
lunchButton.addEventListener('click', () => {
    breakfastType.style.display = 'none';
    lunchType.style.display = 'grid';
    shakesType.style.display = 'none';
    dinnerType.style.display = 'none';
});
shakesButton.addEventListener('click', () => {
    breakfastType.style.display = 'none';
    lunchType.style.display = 'none';
    shakesType.style.display = 'grid'
    dinnerType.style.display = 'none';
});
dinnerButton.addEventListener('click', () => {
    breakfastType.style.display = 'none';
    lunchType.style.display = 'none';
    shakesType.style.display = 'none'
    dinnerType.style.display = 'grid';
});