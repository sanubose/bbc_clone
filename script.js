
        const slider = document.getElementById('slider');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        let scrollAmount = 0;

        next.addEventListener('click', () => {
            slider.scrollBy({ left: 300, behavior: 'smooth' });
        });

        prev.addEventListener('click', () => {
            slider.scrollBy({ left: -300, behavior: 'smooth' });
        });
