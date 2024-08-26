document.addEventListener('DOMContentLoaded', () => {
    // Ticker Functionality
    const ticker = document.querySelector('.ticker');
    if (ticker) {
        const originalText = ticker.querySelector('h2');
        const tickerWidth = ticker.offsetWidth;
        let textWidth = originalText.offsetWidth;

        // Calculate the minimum number of copies needed
        let repeatCount = Math.ceil(tickerWidth / textWidth) + 1;

        // Clone the original text as many times as needed
        for (let i = 1; i < repeatCount; i++) {
            let clone = originalText.cloneNode(true);
            ticker.appendChild(clone);
        }
    }

    // Custom Cursor Functionality
    const strapContent = document.getElementById('strap-content');
    if (strapContent) {
        const customCursor = document.createElement('div');
        customCursor.classList.add('custom-cursor');
        customCursor.innerHTML = 'Click to<br>view the<br>menu';
        strapContent.appendChild(customCursor);

        strapContent.addEventListener('mousemove', (e) => {
            const rect = strapContent.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            customCursor.style.left = x + 'px';
            customCursor.style.top = y + 'px';
        });

        strapContent.addEventListener('mouseleave', () => {
            customCursor.style.opacity = '0'; // Hide cursor when leaving the area
        });

        strapContent.addEventListener('mouseenter', () => {
            customCursor.style.opacity = '1'; // Show cursor when entering the area
        });
    }

    // Burger Menu Functionality
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');

    if (menu && menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active'); // Toggle the 'active' class on the menu
            menuToggle.classList.toggle('active'); // Optionally hide the menu toggle button
        });
    }

    if (menu && closeMenu) {
        closeMenu.addEventListener('click', () => {
            menu.classList.remove('active'); // Close the menu
            menuToggle.classList.remove('active'); // Show the menu toggle button
        });
    }
});

window.addEventListener('load', function () {
    const header = document.getElementById('header');
    const banner = document.getElementById('banner');

    if (header && banner) {
        const headerHeight = header.offsetHeight;
        const bannerHeight = window.innerHeight - headerHeight;

        banner.style.height = bannerHeight + 'px';
        banner.style.marginTop = header.offsetHeight + 'px';
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const offset = 300; // Adjusted to 300 for earlier fade-in
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkScroll() {
        const tiles = document.querySelectorAll('#tile-content');
        tiles.forEach(tile => {
            if (isElementInViewport(tile)) {
                tile.classList.add('visible');
            }
        });
    }

    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // Cheese Sprinkling Effect
    if (banner) {
        const cheeseCount = 50;

        for (let i = 0; i < cheeseCount; i++) {
            const cheese = document.createElement('div');
            cheese.className = 'cheese';

            const randomWidth = 30 + Math.random() * 80;
            cheese.style.width = randomWidth + 'px';

            const randomHeight = 5 + Math.random() * 20;
            cheese.style.height = randomHeight + 'px';

            const randomLeft = Math.random() * 100;
            cheese.style.left = randomLeft + '%';

            const randomDelay = Math.random() * 5;
            cheese.style.animationDelay = randomDelay + 's';

            const randomDuration = 2 + Math.random() * 3;
            cheese.style.animationDuration = randomDuration + 's';

            if (i % 2 === 0) {
                cheese.style.animationName = 'sprinkleClockwise';
            } else {
                cheese.style.animationName = 'sprinkleCounterclockwise';
            }

            banner.appendChild(cheese);
        }
    }
});