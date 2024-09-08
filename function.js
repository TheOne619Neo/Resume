let currentIndex = 0;

function showItems() {
    const items = document.querySelectorAll('#tech-list li');
    items.forEach((item, i) => {
        if (i >= currentIndex && i < currentIndex + 3) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function prevItem() {
    const items = document.querySelectorAll('#tech-list li');
    currentIndex = (currentIndex === 0) ? items.length - 3 : currentIndex - 1;
    showItems();
}

function nextItem() {
    const items = document.querySelectorAll('#tech-list li');
    currentIndex = (currentIndex === items.length - 3) ? 0 : currentIndex + 1;
    showItems();
}

// Initialize the first set of items
showItems();
