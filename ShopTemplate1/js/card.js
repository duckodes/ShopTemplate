var card = (function () {
    return {
        init: init
    }
    function init(title, information, imageSrc, clickLink) {
        const cardarea = document.querySelector('.card-area');
        const cardbase = document.createElement('div');
        cardbase.className = "card-base";
        cardarea.appendChild(cardbase);
        if (title.trim() !== '') {
            const span = document.createElement('span');
            span.textContent = title;
            cardbase.appendChild(span);
        }
        checkImageSrc(imageSrc)
            .then((isValid) => {
                if (isValid) {
                    const img = document.createElement('img');
                    cardbase.appendChild(img);
                    img.setAttribute("src", imageSrc);
                    img.setAttribute("alt", "");
                    img.setAttribute("draggable", "false");
                } else if (!isValid && title.trim() === '') {
                    cardbase.remove();
                }
                const basebtn = document.createElement('div');
                basebtn.className = "card-btn-base";
                cardbase.appendChild(basebtn);
                const info = document.createElement('div');
                info.className = "card-info";
                info.textContent = information;
                basebtn.appendChild(info);
                const btn = document.createElement('button');
                btn.className = 'card-btn';
                btn.textContent = "🛒";
                basebtn.appendChild(btn);
            });
        function checkImageSrc(src) {
            return new Promise((resolve) => {
                var img = new Image();
                img.onload = function () {
                    resolve(true);
                };
                img.onerror = function () {
                    resolve(false);
                };
                img.src = src;
            });
        }
        if (clickLink !== null && clickLink !== undefined && clickLink.trim() !== '') {
            clickutils.click(cardbase, 0, (e) => {
                if (e.target.className === 'card-btn') return;
                const a = document.createElement('a');
                a.href = clickLink;
                a.click();
            });
        }
    }
}());