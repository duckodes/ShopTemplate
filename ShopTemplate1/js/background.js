const background = (function () {
    init();
    function init() {
        const word = [
            'we do best product',
            'ready to buy?',
            'wait for week recommendations',
            'wanna to buy something?',
            'great choice',
            'explore our top-rated selections',
            'looking for the perfect fit?',
            'discover what\'s trending',
            'get the best deals today!',
            'need a hand in choosing?',
            'check out our latest arrivals',
            'ready to upgrade your style?',
            'find your next must-have',
            'unbeatable prices await',
            'curated just for you',
            'grab the hottest deals now',
            'personalize your shopping experience',
            'shop with confidence',
            'the ultimate shopping destination',
            'unlock exclusive offers',
            'your one-stop shop',
            'experience shopping redefined',
            'discover a world of choices',
            'elevate your shopping game',
            'the best in quality and price',
            'empowering your style journey',
            'transforming the way you shop',
            'find what speaks to you',
            'shopping made effortless'
        ];
        const tmin = 0;
        const tmax = word.length;
        const deg = [0, 90, 180, 270, 360]
        const dmin = 0;
        const dmax = deg.length;
        const maxSize = 100;

        const base = document.createElement('div');
        base.className = 'm-bg';
        document.querySelector('.app').appendChild(base);
        function add(text, deg, size) {
            const element = document.createElement('h3');
            element.textContent = text;
            element.style.fontSize = Math.floor(Math.random() * (35 - 10)) + 10 + 'px';
            element.style.rotate = deg;
            element.style.left = Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + 'px';
            element.style.top = Math.floor(Math.random() * (window.innerHeight - 0)) + 0 + 'px';
            base.appendChild(element);
            if (size < 10) {
                const melement = document.createElement('h3');
                melement.textContent = text;
                melement.style.left = Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + 'px';
                melement.style.top = Math.floor(Math.random() * (window.innerHeight - 0)) + 0 + 'px';
                base.appendChild(melement);
                melement.classList = 'move-left';
            }
            if (size < 10) {
                const melement = document.createElement('h3');
                melement.textContent = text;
                const mdeg = [90, 270]
                melement.style.rotate = mdeg[Math.floor(Math.random() * 2)] + 'deg';
                melement.style.left = Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + 'px';
                melement.style.top = Math.floor(Math.random() * (window.innerHeight - 0)) + 0 + 'px';
                base.appendChild(melement);
                melement.classList = 'move-top';
            }
            if (size < 10) {
                const melement = document.createElement('h3');
                melement.classList = 'move-right';
                melement.textContent = text;
                melement.style.left = Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + 'px';
                melement.style.top = Math.floor(Math.random() * (window.innerHeight - 0)) + 0 + 'px';
                base.appendChild(melement);
            }
            if (size < 10) {
                const melement = document.createElement('h3');
                melement.className = 'move-bottom'
                melement.textContent = text;
                const mdeg = [90, 270]
                melement.style.rotate = mdeg[Math.floor(Math.random() * 2)] + 'deg';
                melement.style.left = Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + 'px';
                melement.style.top = Math.floor(Math.random() * (window.innerHeight - 0)) + 0 + 'px';
                base.appendChild(melement);
            }
        }
        for (let i = 0; i < maxSize; i++) {
            let trandomNum = Math.floor(Math.random() * (tmax - tmin)) + tmin;
            let drandomNum = Math.floor(Math.random() * (dmax - dmin)) + dmin;
            add(word[trandomNum], deg[drandomNum] + 'deg', i);
        }

        window.addEventListener('resize', () => {
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(() => {
                resize();
            }, 200);
        });
        let currentOpacity = 1;
        function minus() {
            currentOpacity -= 0.02;
            currentOpacity = Math.max(0, currentOpacity);
            return currentOpacity;
        }
        function resize() {
            document.querySelector('.m-bg').style.opacity = minus();
            if (document.querySelector('.m-bg').style.opacity >= 0.2) {
                setTimeout(resize, 10);
            } else {
                document.querySelector('.m-bg').remove();
                init();

            }
        }
    }
}());