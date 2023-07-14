const coins = [
    {
        id: 1,
        name: "777",
        src: "777.png"
    },
    {
        id: 2,
        name: "bar",
        src: "bar.png"
    },
    {
        id: 3,
        name: "bells",
        src: "bells.png"
    },
    {
        id: 4,
        name: "cherry",
        src: "cherry.png"
    },
    {
        id: 5,
        name: "grape",
        src: "grape.png"
    },
    {
        id: 6,
        name: "lemon",
        src: "lemon.png"
    },
    {
        id: 7,
        name: "orange",
        src: "orange.png"
    },
    {
        id: 8,
        name: "plum",
        src: "plum.png"
    },
    {
        id: 9,
        name: "watermelon",
        src: "watermelon.png"
    },
]


let changeAuto = {
    start: false,
    func: 0,
};

const starsElement = document.getElementById('stars');
const coinsElement = document.getElementById('coins');

sessionStorage.setItem('win', `0`);

const betMinusBtn = document.getElementById('bet-minus');
const betPlusBtn = document.getElementById('bet-plus');
const winCashInput = document.getElementById('win-cash');

sessionStorage.setItem('bet', '0');

const betCashInput = document.getElementById('bet-cash');

let betCash = betCashInput.innerText;

function loadPage() {
    const starsCount = Number(sessionStorage.getItem('stars'));
    const coinsCount = Number(sessionStorage.getItem('coins'));
    const winCash = Number(sessionStorage.getItem('win'));
    starsElement.innerText = `${starsCount}/9000`;
    coinsElement.innerText = `${coinsCount}`;
    winCashInput.innerText = `${winCash}`;
}

loadPage();

function betAction(action) {
    betCash = Number(betCashInput.innerText);
    if (action === 'plus') {
        betCash = betCash + 50;
        betCashChange(betCash)
    }
    if (action === 'minus') {
        betCash = betCash - 50;
        betCashChange(betCash)
    }
}

betMinusBtn.onclick = () => betAction('minus');
betPlusBtn.onclick = () => betAction('plus');

function betCashChange(cash) {
    betCashInput.innerText = cash.toString()
    sessionStorage.setItem('bet', cash.toString());
}

betCashChange(betCash);

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

const btnStart = document.getElementById('btnStart');
const btnAuto = document.getElementById('btnAuto');
const places = document.getElementsByClassName('place');

function change() {
    loadPage();
    const starsCount = Number(sessionStorage.getItem('stars'));
    const coinsCount = Number(sessionStorage.getItem('coins'));
    const winCash = Number(sessionStorage.getItem('win'));
    let bet = Number(sessionStorage.getItem('bet'));
    let starsCountChange = starsCount;
    let coinsCountChange = coinsCount;
    let winCashChange = winCash;
    let placesRes = [];
    for (let i = 0; i < places.length; i++) {
        let image = arrayRandElement(coins);
        let address = `../src/images/coins/${image.src}`;
        let place = places[i];
        place.style.backgroundImage = `url(${address})`;
        placesRes.push(image.id);
    }
    let [a1, a2, a3, b1, b2, b3, c1, c2, c3] = placesRes;
    let a = [a1, a2, a3];
    let b = [b1, b2, b3];
    let c = [c1, c2, c3];

    function congratulation(array) {
        return array[0] === array[1] && array[0] === array[2] && array[1] === array[2];
    }

    starsCountChange = starsCountChange + 100;
    sessionStorage.setItem('stars', `${starsCountChange}`);

    if (congratulation(a) || congratulation(b) || congratulation(c)) {
        winCashChange = bet * 5;
        coinsCountChange = coinsCountChange + winCashChange;
        sessionStorage.setItem('coins', `${coinsCountChange}`);
        sessionStorage.setItem('win', `${winCashChange}`);
        console.log(winCashChange);
    } else {
        coinsCountChange = coinsCountChange - bet;
        sessionStorage.setItem('coins', `${coinsCountChange}`);
    }
}

btnStart.onclick = () => change();

btnAuto.onclick = () => {
    if (changeAuto.start === true) {
        window.clearInterval(changeAuto.func);
        changeAuto.start = false;
        return changeAuto;
    } else {
        changeAuto.func = window.setInterval(change, 500);
        changeAuto.start = true;
        return changeAuto;
    }
}

