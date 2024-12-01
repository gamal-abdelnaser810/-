document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const close = document.querySelector('.close');

    // Open popup
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            popup.style.display = 'flex';
            popupImg.src = thumbnail.src;
        });
    });

    // Close popup
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside the image
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
