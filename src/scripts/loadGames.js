const games = [
    {
        id: 1,
        name: "royal",
        image: "royal-coins.png",
        block: false,
        href: "royal-coins.html",
    },
    {
        id: 2,
        name: "cash",
        image: "wild-cash.png",
        block: false,
        href: "wild-cash.html",
    },
    {
        id: 3,
        name: "royal",
        image: "royal-coins.png",
        block: true,
        href: "royal-coins.html",
    },
    {
        id: 4,
        name: "cash",
        image: "wild-cash.png",
        block: true,
        href: "wild-cash.html",
    },
    {
        id: 5,
        name: "royal",
        image: "royal-coins.png",
        block: true,
        href: "royal-coins.html",
    },
]


const gamesItems = document.getElementById('games-items');

sessionStorage.setItem('coins', '1000000');
sessionStorage.setItem('stars', '300');

const starsElement = document.getElementById('stars');
const coinsElement = document.getElementById('coins');

const starsCount = Number(sessionStorage.getItem('stars'));
const coinsCount = Number(sessionStorage.getItem('coins'));

starsElement.innerText = `${starsCount}/9000`;
coinsElement.innerText = `${coinsCount}`;

function loadGames() {
    let gamesPage = [];
    games.forEach(item => {
        let game = item.block ? gameCreateWith() : gameCreateWithout();

        function gameCreateWith() {
            const game =
                `<div class="game-item" id="${item.id}">
                <div class="svg" id="svg">
                    <svg width="82" height="95" viewBox="0 0 82 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_17_421)">
                            <path
                                d="M42 5C33.0397 5 25.75 12.2898 25.75 21.25V31H22.5C20.7761 31 19.1228 31.6848 17.9038 32.9038C16.6848 34.1228 16 35.7761 16 37.5V63.5C16 65.2239 16.6848 66.8772 17.9038 68.0962C19.1228 69.3152 20.7761 70 22.5 70H61.5C63.2239 70 64.8772 69.3152 66.0962 68.0962C67.3152 66.8772 68 65.2239 68 63.5V37.5C68 35.7761 67.3152 34.1228 66.0962 32.9038C64.8772 31.6848 63.2239 31 61.5 31H58.25V21.25C58.25 12.2898 50.9603 5 42 5ZM32.25 21.25C32.25 15.8745 36.6245 11.5 42 11.5C47.3755 11.5 51.75 15.8745 51.75 21.25V31H32.25V21.25ZM45.25 56.0997V63.5H38.75V56.0997C37.6138 55.4491 36.7014 54.4693 36.1332 53.2897C35.565 52.11 35.3677 50.7858 35.5672 49.4918C35.7668 48.1977 36.3538 46.9945 37.251 46.0408C38.1481 45.0871 39.3133 44.4277 40.5928 44.1495C41.5431 43.9394 42.5285 43.9452 43.4763 44.1667C44.4241 44.3881 45.3101 44.8195 46.069 45.4289C46.8278 46.0384 47.4402 46.8104 47.861 47.6881C48.2817 48.5658 48.5001 49.5267 48.5 50.5C48.4981 51.6367 48.1967 52.7528 47.6262 53.7358C47.0556 54.7189 46.236 55.5343 45.25 56.0997Z"
                                fill="url(#paint0_linear_17_421)"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_17_421" x="0" y="0" width="82" height="95"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="-1" dy="10"/>
                                <feGaussianBlur stdDeviation="7.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.84 0 0 0 0 0 0 0 0 0.43 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_421"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_421"
                                         result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_17_421" x1="42" y1="5" x2="42" y2="70"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#EFEC01"/>
                                <stop offset="1" stop-color="#FBB801"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <img src="../src/images/games/${item.image}" alt="${item.name}">
            </div>`;
            return game;
        }

        function gameCreateWithout() {
            const game =
                `<div class="game-item" id="${item.id}">
                    <a href="./${item.href}">
                    <img src="../src/images/games/${item.image}" alt="${item.name}"></a>
                </div>`;
            return game;
        }

        gamesPage.push(game);
    })
    gamesItems.innerHTML = gamesPage;
}

loadGames();