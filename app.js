(function () {
    var UK = {
        'nav.experience': 'Досвід',
        'nav.talks': 'Виступи',
        'nav.projects': 'Проєкти',
        'nav.skills': 'Навички',
        'nav.recommendations': 'Рекомендації',

        'hero.title': 'Backend- та AI-інженер · Python, LLM',
        'hero.name': 'Владислав Скопенко',
        'hero.lead': 'Будую бекенди для фізичного світу: зернові угоди, вантажівки, судна та їхні документи, а також LLM-функції всередині. З березня 2025 року я один із ключових бекенд-інженерів INBULK, B2B-платформи для торгівлі зерном і логістики, від ранньої стадії до продакшну.',
        'hero.meta': 'Одеса, Україна · віддалено',
        'cta.cv': 'Завантажити CV (PDF)',
        'cta.telegram': 'Написати в Telegram',

        'stats.1.value': '50 000 т',
        'stats.1': 'зерна проторговано через платформу',
        'stats.2': 'з ~500 міграцій бази даних',
        'stats.3.value': '10 с → 0,2 с',
        'stats.3': 'завантаження ТТН',
        'stats.4': 'специфікацій для розробки з AI-агентами',

        'exp.heading': 'Досвід',
        'exp.inbulk.role': 'Backend-інженер (Python)',
        'exp.inbulk.company': 'INBULK (раніше iCORN)',
        'exp.inbulk.period': 'бер. 2025 – зараз',
        'exp.inbulk.place': 'Віддалено · Київ',
        'exp.inbulk.context': 'B2B-платформа, де зернотрейдери, перевізники, термінали та фінансові партнери укладають і виконують угоди. Невелика команда, AI-native розробка.',
        'exp.inbulk.b1.lead': 'Логістика від і до.',
        'exp.inbulk.b1': 'Поставки, автомобільні рейси зі зважуванням, Telegram-бот для водіїв, морські рейси й номінації суден, laytime і демередж, PDF-ТТН.',
        'exp.inbulk.b2.lead': 'Шар даних.',
        'exp.inbulk.b2': 'Моделі на async SQLAlchemy 2.0 і 260+ міграцій Alembic, зокрема рефакторинг, що переніс логістичні дані з угод в окремий агрегат поставки.',
        'exp.inbulk.b3.lead': 'Аналітика.',
        'exp.inbulk.b3': 'Залишки на складах і дашборди на PostgreSQL (CTE, JSONB) з мультивалютними підсумками.',
        'exp.inbulk.b4.lead': 'LLM-функції.',
        'exp.inbulk.b4': 'Портові документи (NOR, SOF) перетворюються на детерміновану хронологію laytime з перевіркою eval-харнесом; витяг даних із суднових сертифікатів; доменні інструменти для LangChain-асистента.',
        'exp.inbulk.b5.lead': 'Розробка з агентами.',
        'exp.inbulk.b5': 'Запровадив у команді розробку за специфікаціями з Claude Code і BMAD: 80+ специфікацій, тести до коду, рев’ю коду кількома агентами.',
        'exp.inbulk.b6.lead': 'Продуктивність і безпека.',
        'exp.inbulk.b6': 'Завантаження ТТН прискорено з ~10 с до 0,2 с; власний OAuth 2.0 з Google, LinkedIn і Meta замість Auth0; одноразові тікети для авторизації WebSocket.',
        'exp.inbulk.b7.lead': 'DevOps і автоматизація.',
        'exp.inbulk.b7': 'Деплой через GitHub Actions і Tailscale, Docker-сервіси за nginx, n8n-пайплайни для моніторингу цін на зерно.',
        'exp.inbulk.bot': 'Бот для водіїв у Telegram',

        'exp.tekra.role': 'Software Developer · part-time',
        'exp.tekra.period': 'бер. 2024 – черв. 2026',
        'exp.tekra.place': 'Віддалено',
        'exp.tekra.context': 'Проєктна співпраця із сезонним навантаженням: починав як розробник, далі здебільшого прототипи, перевірка гіпотез і внутрішні інструменти на запит.',
        'exp.tekra.b1': 'Кросплатформний десктопний застосунок на Python/PyQt6 із системою генерації та перевірки ліцензійних ключів; інсталятори Inno Setup.',
        'exp.tekra.b2': 'Боти для автоматизації внутрішніх бізнес-процесів і бекенд-сервіси на FastAPI.',
        'exp.tekra.b3': 'Оптимізація багатопотоковості, що скоротила час обробки даних у десктопному застосунку.',

        'exp.also.heading': 'Також',
        'exp.also.1': 'Ментор Data Science у GoIT, лист. 2024 – лют. 2025: код-рев’ю, воркшопи та індивідуальна підтримка студентів.',

        'talks.heading': 'Виступи та медіа',
        'talks.watch': 'Дивитися на YouTube',
        'talks.1.meta': 'онлайн-мітап GoIT · серп. 2026 · спікер',
        'talks.1.desc': 'Доповідь для майбутніх Python-студентів GoIT: Python як мова, якою пишуть AI і якою пишуть разом з AI. Три ролі AI в бекенд-команді: асистент у коді зі spec-first правилами, механізм ухвалення рішень усередині коду та чат-бот. Кейс: AI Assistant INBULK на LangChain з інструментами, flow, guardrails і людиною в контурі.',
        'talks.1.note': 'Моя частина з 12:27 до 41:00. Плеєр налаштований на цей фрагмент; повний стрім відкривається на YouTube.',
        'talks.2.meta': 'GoIT · 2024 · навчальна технічна співбесіда',
        'talks.2.desc': 'Запис mock-співбесіди з першого року в індустрії: основи Python, бази даних, async.',
        'talks.3.meta': 'GoIT · 2024 · інтерв’ю',
        'talks.3.desc': 'Як я перейшов із барної стійки в бекенд-розробку.',

        'projects.heading': 'Вибрані проєкти',
        'projects.sub': 'Open-source проєкти. Основна продуктова робота в INBULK закрита і описана вище.',
        'projects.2.meta': '2026 · Python · FastAPI',
        'projects.2.title': 'Auction Service',
        'projects.2.desc': 'Сервіс на FastAPI з живими ставками через WebSocket, автоматичним продовженням часу при пізніх ставках, Docker Compose і Swagger.',
        'projects.3.meta': '2026 · Python · React',
        'projects.3.title': 'Візуалізація маршрутів',
        'projects.3.desc': 'Завантаження маршрутів через Google Directions API на Python і React/Leaflet-переглядач, що рендерить маршрути з 55 тис. точок на Canvas.',
        'projects.4.meta': '2025 · Python',
        'projects.4.title': 'PDF OCR через Google Cloud Vision',
        'projects.4.desc': 'Витягування тексту зі сканованих PDF з гарною точністю для кирилиці; невелика обгортка над Cloud Vision API.',
        'projects.5.meta': '2025 · Python · ReportLab',
        'projects.5.title': 'Генератор рахунків-фактур',
        'projects.5.desc': 'PDF-рахунки з розрахунком ПДВ, українськими шрифтами та автоматичним переносом тексту в довгих описах товарів.',
        'projects.6.meta': '2026 · Python',
        'projects.6.title': 'Генератор резюме',
        'projects.6.desc': 'Python-інструмент без залежностей, що рендерить варіанти CV під мову й роль у A4 HTML і PDF, з тестами. CV на цій сторінці зібране ним.',

        'skills.heading': 'Навички',
        'skills.g1': 'Бекенд',
        'skills.g1.workers': 'Фонові воркери',
        'skills.g2': 'Дані',
        'skills.g2.opt': 'Оптимізація запитів',
        'skills.g2.pipe': 'Excel / PDF пайплайни',
        'skills.g3': 'Інфраструктура',
        'skills.g4': 'AI',
        'skills.g4.extract': 'Структурований витяг даних',
        'skills.g4.flow': 'Розробка за специфікаціями з агентами',
        'skills.g5': 'Інше',
        'skills.g5.tg': 'Telegram-боти (aiogram, Telethon)',
        'skills.g5.mt': 'Багатопотоковість',
        'skills.g6': 'Мови',
        'skills.langs': 'Українська: рідна · English: B1',

        'edu.heading': 'Освіта',
        'edu.1.school': 'Одеський національний економічний університет',
        'edu.1.degree': 'Бакалавр, фінанси, банківська справа та страхування',
        'edu.2.school': 'GoIT',
        'edu.2.degree': 'Програма Python Backend Developer',
        'edu.2.note': 'Тімлід випускного проєкту: сервіс обміну фото на FastAPI, визнаний найкращим у когорті.',
        'edu.2.cert': 'Сертифікат',
        'edu.2.repo': 'Репозиторій проєкту',

        'recs.heading': 'Рекомендації',
        'recs.sub': 'З LinkedIn, цитати мовою оригіналу.',
        'recs.link': 'Усі рекомендації в LinkedIn',

        'contact.heading': 'Контакти',
        'contact.text': 'Найзручніше писати на пошту або в Telegram.',

        'footer.left': 'Владислав Скопенко · Одеса · Оновлено в жовтні 2026',
        'footer.source': 'Код сайту'
    };

    var TITLES = {
        en: 'Vladyslav Skopenko · Backend & AI Engineer',
        uk: 'Владислав Скопенко · Backend- та AI-інженер'
    };

    var root = document.documentElement;
    var topbar = document.querySelector('.topbar');
    var navToggle = document.getElementById('navToggle');
    var nodes = document.querySelectorAll('[data-i18n]');
    var original = {};
    nodes.forEach(function (el) {
        original[el.getAttribute('data-i18n')] = el.textContent;
    });

    function applyLang(lang) {
        nodes.forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var text = lang === 'uk' ? UK[key] : original[key];
            if (text !== undefined) el.textContent = text;
        });
        root.setAttribute('lang', lang);
        root.setAttribute('data-lang', lang);
        document.title = TITLES[lang] || TITLES.en;
        document.querySelectorAll('[data-href-uk]').forEach(function (link) {
            if (!link.hasAttribute('data-href-en')) link.setAttribute('data-href-en', link.getAttribute('href'));
            link.setAttribute('href', lang === 'uk' ? link.getAttribute('data-href-uk') : link.getAttribute('data-href-en'));
        });
        if (navToggle) navToggle.setAttribute('aria-label', lang === 'uk' ? 'Меню' : 'Menu');
        var label = document.querySelector('#langToggle .lang-label');
        if (label) label.textContent = lang === 'uk' ? 'EN' : 'UA';
        var toggle = document.getElementById('langToggle');
        if (toggle) toggle.setAttribute('aria-label', lang === 'uk' ? 'Switch to English' : 'Перемкнути на українську');
        try { localStorage.setItem('lang', lang); } catch (e) {}
    }

    function currentTheme() {
        var t = root.getAttribute('data-theme');
        if (t === 'dark' || t === 'light') return t;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) {}
    }

    document.getElementById('langToggle').addEventListener('click', function () {
        applyLang(root.getAttribute('lang') === 'uk' ? 'en' : 'uk');
    });

    document.getElementById('themeToggle').addEventListener('click', function () {
        applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });

    document.querySelectorAll('.yt').forEach(function (box) {
        box.querySelector('.yt-play').addEventListener('click', function () {
            var id = box.getAttribute('data-id');
            var params = ['autoplay=1', 'rel=0'];
            if (box.getAttribute('data-start')) params.push('start=' + box.getAttribute('data-start'));
            if (box.getAttribute('data-end')) params.push('end=' + box.getAttribute('data-end'));
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?' + params.join('&');
            iframe.title = 'YouTube video';
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '');
            box.innerHTML = '';
            box.appendChild(iframe);
        });
    });

    function setNav(open) {
        topbar.classList.toggle('nav-open', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    if (topbar && navToggle) {
        navToggle.addEventListener('click', function () {
            setNav(!topbar.classList.contains('nav-open'));
        });
        document.querySelectorAll('.topnav a').forEach(function (link) {
            link.addEventListener('click', function () { setNav(false); });
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setNav(false);
        });
        document.addEventListener('click', function (e) {
            if (!topbar.contains(e.target)) setNav(false);
        });
    }

    var initial = root.getAttribute('data-lang') === 'uk' ? 'uk' : 'en';
    applyLang(initial);
})();
