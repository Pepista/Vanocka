// Přidání funkce na otevření modálního okna s obrázkem
const wishlistItems = document.querySelectorAll('#wishlist li');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-btn');

wishlistItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('data-img');
        if (imgSrc) {
            modal.style.display = 'flex';
            modalImg.src = imgSrc;
        }
    });
});

// Zavření modálního okna
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Zavření modálního okna při kliknutí mimo obsah
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
