const previewImage = document.getElementById('preview-image');
const catOptions = document.getElementById('cat-options');
const hatOptions = document.getElementById('hat-options');
const faceOptions = document.getElementById('face-options');

// Handle Cat selection
catOptions.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        setSelected(event.target, 'cat');
        previewImage.src = `assets/${event.target.dataset.image}`;
    }
});

// Handle Hat selection
hatOptions.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        setSelected(event.target, 'hat');
        // Here, logic can be added to overlay hats on top of the selected cat.
    }
});

// Handle Face selection
faceOptions.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        setSelected(event.target, 'face');
        // Here, logic can be added to overlay faces on top of the selected cat.
    }
});

// Function to visually indicate the selected item
function setSelected(element, type) {
    // Deselect all previous images in the category
    const options = document.querySelectorAll(`#${type}-options img`);
    options.forEach(option => option.classList.remove('selected'));

    // Select the clicked image
    element.classList.add('selected');
}
