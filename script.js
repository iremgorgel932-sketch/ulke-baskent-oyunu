const wellKnownPool = [
    { id: 1, c: 'Türkiye', cap: 'Ankara' },
    { id: 2, c: 'ABD', cap: 'Washington, D.C.' },
    { id: 3, c: 'İngiltere', cap: 'Londra' },
    { id: 4, c: 'Fransa', cap: 'Paris' },
    { id: 5, c: 'Almanya', cap: 'Berlin' },
    { id: 6, c: 'İtalya', cap: 'Roma' },
    { id: 7, c: 'İspanya', cap: 'Madrid' },
    { id: 8, c: 'Japonya', cap: 'Tokyo' },
    { id: 9, c: 'Rusya', cap: 'Moskova' },
    { id: 10, c: 'Çin', cap: 'Pekin' },
    { id: 11, c: 'Brezilya', cap: 'Brasília' },
    { id: 12, c: 'Kanada', cap: 'Ottawa' },
    { id: 13, c: 'Hindistan', cap: 'Yeni Delhi' },
    { id: 14, c: 'Güney Kore', cap: 'Seul' },
    { id: 15, c: 'Avustralya', cap: 'Canberra' }
];

const midPool = [
    { id: 16, c: 'Mısır', cap: 'Kahire' },
    { id: 17, c: 'Yunanistan', cap: 'Atina' },
    { id: 18, c: 'Hollanda', cap: 'Amsterdam' },
    { id: 19, c: 'Belçika', cap: 'Brüksel' },
    { id: 20, c: 'İsviçre', cap: 'Bern' },
    { id: 21, c: 'İsveç', cap: 'Stokholm' },
    { id: 22, c: 'Norveç', cap: 'Oslo' },
    { id: 23, c: 'Danimarka', cap: 'Kopenhag' },
    { id: 24, c: 'Polonya', cap: 'Varşova' },
    { id: 25, c: 'Avusturya', cap: 'Viyana' },
    { id: 26, c: 'Portekiz', cap: 'Lizbon' },
    { id: 27, c: 'Güney Afrika', cap: 'Pretoria' },
    { id: 28, c: 'Suudi Arabistan', cap: 'Riyad' },
    { id: 29, c: 'Arjantin', cap: 'Buenos Aires' },
    { id: 30, c: 'Meksika', cap: 'Meksiko' },
    { id: 31, c: 'İran', cap: 'Tahran' },
    { id: 32, c: 'Irak', cap: 'Bağdat' },
    { id: 33, c: 'Suriye', cap: 'Şam' },
    { id: 34, c: 'Pakistan', cap: 'İslamabad' },
    { id: 35, c: 'Endonezya', cap: 'Cakarta' },
    { id: 36, c: 'Malezya', cap: 'Kuala Lumpur' },
    { id: 37, c: 'Tayland', cap: 'Bangkok' },
    { id: 38, c: 'Vietnam', cap: 'Hanoi' },
    { id: 39, c: 'Filipinler', cap: 'Manila' },
    { id: 40, c: 'Yeni Zelanda', cap: 'Wellington' }
];

const hardPool = [
    { id: 41, c: 'Şili', cap: 'Santiago' },
    { id: 42, c: 'Kolombiya', cap: 'Bogotá' },
    { id: 43, c: 'Peru', cap: 'Lima' },
    { id: 44, c: 'Venezuela', cap: 'Karakas' },
    { id: 45, c: 'Fas', cap: 'Rabat' },
    { id: 46, c: 'Cezayir', cap: 'Cezayir' },
    { id: 47, c: 'Tunus', cap: 'Tunus' },
    { id: 48, c: 'Kenya', cap: 'Nairobi' },
    { id: 49, c: 'Nijerya', cap: 'Abuja' },
    { id: 50, c: 'Küba', cap: 'Havana' },
    { id: 51, c: 'Jamaika', cap: 'Kingston' },
    { id: 52, c: 'Ukrayna', cap: 'Kiev' },
    { id: 53, c: 'Romanya', cap: 'Bükreş' },
    { id: 54, c: 'Bulgaristan', cap: 'Sofya' },
    { id: 55, c: 'Macaristan', cap: 'Budapeşte' },
    { id: 56, c: 'Çekya', cap: 'Prag' },
    { id: 57, c: 'Finlandiya', cap: 'Helsinki' },
    { id: 58, c: 'İrlanda', cap: 'Dublin' },
    { id: 59, c: 'İzlanda', cap: 'Reykjavik' },
    { id: 60, c: 'Hırvatistan', cap: 'Zagreb' },
    { id: 61, c: 'Sırbistan', cap: 'Belgrad' },
    { id: 62, c: 'Slovakya', cap: 'Bratislava' },
    { id: 63, c: 'Slovenya', cap: 'Ljubljana' },
    { id: 64, c: 'Litvanya', cap: 'Vilnius' },
    { id: 65, c: 'Letonya', cap: 'Riga' },
    { id: 66, c: 'Estonya', cap: 'Tallinn' },
    { id: 67, c: 'Belarus', cap: 'Minsk' },
    { id: 68, c: 'Kazakistan', cap: 'Astana' },
    { id: 69, c: 'Özbekistan', cap: 'Taşkent' },
    { id: 70, c: 'Türkmenistan', cap: 'Aşkabat' },
    { id: 71, c: 'Kırgızistan', cap: 'Bişkek' },
    { id: 72, c: 'Tacikistan', cap: 'Duşanbe' },
    { id: 73, c: 'Moğolistan', cap: 'Ulan Batur' },
    { id: 74, c: 'Afganistan', cap: 'Kabil' },
    { id: 75, c: 'Bangladeş', cap: 'Dakka' },
    { id: 76, c: 'Sri Lanka', cap: 'Kolombo' },
    { id: 77, c: 'Nepal', cap: 'Katmandu' }
];

const STAGES = [
    { num: 1, count: 10, pool: wellKnownPool },
    { num: 2, count: 20, pool: midPool },
    { num: 3, count: 30, pool: hardPool }
];

let currentStage = 1;
let currentStageData = [];
let matchedPairs = 0;
let selectedCountryEl = null;
let selectedCapitalEl = null;
let locked = false;

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = '';
    if (type === 'error') icon = '❌';
    else if (type === 'success') icon = '✅';
    else icon = 'ℹ️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function initStage() {
    const stageInfo = STAGES[currentStage - 1];
    document.getElementById('stage-num').textContent = stageInfo.num;
    document.getElementById('next-stage-btn').classList.add('hidden');

    // Pick required amount randomly
    let shuffledPool = [...stageInfo.pool].sort(() => 0.5 - Math.random());
    currentStageData = shuffledPool.slice(0, stageInfo.count);

    let countriesList = document.getElementById('countries-list');
    let capitalsList = document.getElementById('capitals-list');
    countriesList.innerHTML = '';
    capitalsList.innerHTML = '';

    // Shuffle arrays specifically for UI
    let countries = [...currentStageData].sort(() => 0.5 - Math.random());
    let capitals = [...currentStageData].sort(() => 0.5 - Math.random());

    countries.forEach(item => {
        let el = document.createElement('div');
        el.className = 'item country-item';
        el.dataset.id = item.id;
        el.textContent = item.c;
        el.addEventListener('click', handleItemClick);
        countriesList.appendChild(el);
    });

    capitals.forEach(item => {
        let el = document.createElement('div');
        el.className = 'item capital-item';
        el.dataset.id = item.id;
        el.textContent = item.cap;
        el.addEventListener('click', handleItemClick);
        capitalsList.appendChild(el);
    });

    matchedPairs = 0;
    selectedCountryEl = null;
    selectedCapitalEl = null;
    locked = false;
}

function handleItemClick(e) {
    if (locked) return;
    const el = e.currentTarget;
    if (el.classList.contains('matched')) return;

    if (el.classList.contains('country-item')) {
        if (selectedCountryEl === el) {
            // Deselect
            selectedCountryEl.classList.remove('selected');
            selectedCountryEl = null;
            return;
        }
        if (selectedCountryEl) selectedCountryEl.classList.remove('selected');
        selectedCountryEl = el;
        selectedCountryEl.classList.add('selected');
    } else {
        if (selectedCapitalEl === el) {
            // Deselect
            selectedCapitalEl.classList.remove('selected');
            selectedCapitalEl = null;
            return;
        }
        if (selectedCapitalEl) selectedCapitalEl.classList.remove('selected');
        selectedCapitalEl = el;
        selectedCapitalEl.classList.add('selected');
    }

    if (selectedCountryEl && selectedCapitalEl) {
        checkMatch();
    }
}

function checkMatch() {
    const id1 = selectedCountryEl.dataset.id;
    const id2 = selectedCapitalEl.dataset.id;

    if (id1 === id2) {
        // Correct
        selectedCountryEl.classList.remove('selected');
        selectedCapitalEl.classList.remove('selected');
        selectedCountryEl.classList.add('matched');
        selectedCapitalEl.classList.add('matched');

        matchedPairs++;
        selectedCountryEl = null;
        selectedCapitalEl = null;

        showToast("Doğru eşleştirme!", "success", 2000);
        checkStageCompletion();
    } else {
        // Wrong
        locked = true;
        const cEl = selectedCountryEl;
        const capEl = selectedCapitalEl;

        cEl.classList.add('wrong');
        capEl.classList.add('wrong');

        const currentPair = currentStageData.find(item => item.id == id1);

        // As requested: Yanlış toast states stays 2 seconds longer (5000ms instead of default 3000ms)
        showToast(`Yanlış! ${currentPair.c}'nın başkenti ${currentPair.cap}. Doğru eşleştirme yapılıyor...`, 'error', 5000);

        setTimeout(() => {
            cEl.classList.remove('wrong', 'selected');
            capEl.classList.remove('wrong', 'selected');

            // Auto match the clicked country with its proper capital
            const correctCapEl = document.querySelector(`.capital-item[data-id="${id1}"]`);

            cEl.classList.add('matched');
            if (correctCapEl) {
                correctCapEl.classList.add('matched');
                correctCapEl.classList.remove('selected', 'wrong');
            }

            matchedPairs++;
            selectedCountryEl = null;
            selectedCapitalEl = null;
            locked = false;

            checkStageCompletion();
        }, 800); // Wait 0.8s for shake animation before auto-resolving
    }
}

function checkStageCompletion() {
    if (matchedPairs >= currentStageData.length) {
        if (currentStage === 3) {
            setTimeout(() => {
                document.getElementById('completion-message').classList.remove('hidden');
            }, 500);
        } else {
            setTimeout(() => {
                document.getElementById('next-stage-btn').classList.remove('hidden');
            }, 500);
        }
    }
}

document.getElementById('next-stage-btn').addEventListener('click', () => {
    currentStage++;
    initStage();
});

// Init Game
initStage();
