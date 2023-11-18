function toggleOverlay(element) {
    element.classList.toggle('clicked');
}

function resetImages() {
    const clickedImages = document.querySelectorAll('.image-container.clicked');
    clickedImages.forEach((image) => {
        image.classList.remove('clicked');
    });
}

function changeOption() {
    // Add functionality to handle the change in options if needed
    console.log('Option changed');
}
