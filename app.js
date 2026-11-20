(function () {
    var UK = {
        'nav.experience': 'Досвід',
        'nav.talks': 'Виступи',
        'nav.projects': 'Проєкти',
        'nav.skills': 'Навички',
        'nav.recommendations': 'Рекомендації',

        'hero.title': 'Backend- та AI-інженер · Python, LLM',
        'hero.name': 'Владислав Скопенко',
        'hero.lead': 'Будую бекенди для фізичного світу: зернові угоди, вантажівки, судна та їхні документи, а також LLM-функції всередині. Також вибудовую процес розробки з AI-агентами так, щоб якість не залежала від того, хто пише код: людина чи агент. З березня 2025 року я один із ключових бекенд-інженерів INBULK, B2B-платформи для торгівлі зерном і логістики, від ранньої стадії до продакшну.',
        'hero.meta': 'Одеса, Україна · віддалено',
        'cta.cv': 'Завантажити CV (PDF)',
        'cta.telegram': 'Написати в Telegram',

        'stats.1.value': '50 000 т',
        'stats.1': 'зерна проторговано через платформу',
        'stats.2': 'витягнутих цін точні: LLM читає фото цін і пости в Telegram, на розміченому тестовому наборі',
        'stats.3.value': '10 с → 0,2 с',
        'stats.3': 'завантаження ТТН',
        'stats.4.value': '< 1 місяця',
        'stats.4': 'на Backend Showcase самотужки з AI-агентами, працює в хмарі',

        'exp.heading': 'Досвід',
        'exp.inbulk.role': 'Backend-інженер (Python)',
        'exp.inbulk.company': 'INBULK (раніше iCORN)',
        'exp.inbulk.period': 'бер. 2025 – зараз',
        'exp.inbulk.place': 'Віддалено · Київ',
        'exp.inbulk.context': 'B2B-платформа, де зернотрейдери, перевізники, термінали та фінансові партнери укладають і виконують угоди. Невелика команда, AI-native розробка.',
        'exp.inbulk.b1.lead': 'Домен логістики, основний автор.',
        'exp.inbulk.b1': 'Виніс поставки з угод в окрему доменну модель і переніс живі дані PostgreSQL зворотними міграціями Alembic; автомобільні й морські перевезення, laytime і демередж, ТТН, ПДВ, реєстр із 13 754 портів світу; водії отримують у Telegram запрошення до воріт терміналу, а не охоронець шукає їх на стоянці.',
        'exp.inbulk.b2.lead': 'Виконання угод і термінали.',
        'exp.inbulk.b2': 'Зустрічні пропозиції з дедлайнами й продовженнями, розрахунки й передоплата, ставки ПДВ для мультиякісних контрактів, спірні платежі, двостороннє закриття, чернетки відвантажувальних документів із шерингом у чаті; правила ордерів, як-от автостоп розпроданого мультиордера; записи на термінал з лабораторною перевіркою, відбором проб і Excel-реєстрами.',
        'exp.inbulk.b3.lead': 'Обробка документів через LLM.',
        'exp.inbulk.b3': 'LLM (OpenAI API, structured outputs) читає скановані портові документи, а код за правилами рахує час стоянки й штрафи, з перевіркою eval-скриптом; форми суден заповнюються з PDF-сертифікатів; tool calling для LangChain-асистента команди.',
        'exp.inbulk.b4.lead': 'Ринкові ціни на n8n.',
        'exp.inbulk.b4': 'n8n-воркфлоу збирають ціни із зернових майданчиків, прайсу трейдера й Telegram-каналів, нормалізують їх (LLM для вільного тексту й фото, курси НБУ) і живлять публічний REST API цін за регіонами та щоденне зведення ринку для команди.',
        'exp.inbulk.b5.lead': 'Продуктивність.',
        'exp.inbulk.b5': 'Завантаження ТТН прискорено з ~10 с до 0,2 с, а файл зменшено з ~1 МБ до менш ніж 300 КБ: один спільний шрифт, відповідь цілим тілом замість стрімінгу, робота з S3 поза event loop.',
        'exp.inbulk.b6.lead': 'Авторизація й безпека.',
        'exp.inbulk.b6': 'Власний OAuth 2.0 (Google, LinkedIn) з JWT-сесіями; авторизація WebSocket через одноразові тікети на 30 секунд, тож токени доступу більше не потрапляють у логи проксі й CDN.',
        'exp.inbulk.b7.lead': 'Розробка з AI-агентами.',
        'exp.inbulk.b7': 'Запровадив у команді процес, де AI-агенти (Claude Code) пишуть код за письмовою специфікацією, тести йдуть першими, а кожна зміна проходить код-рев’ю; рев’ю зупиняли дефекти до релізу, як-от угоди, для яких неможливо було б розрахувати штрафи.',
        'exp.inbulk.b8.lead': 'Аналітика.',
        'exp.inbulk.b8': 'Залишки на складах і дашборди платформи на PostgreSQL (CTE, JSONB) з мультивалютними підсумками; графіки продуктів купівлі та продажу з фільтрами за класом і протеїном.',
        'exp.inbulk.bot': 'Бот для водіїв у Telegram',

        'exp.tekra.role': 'Software Developer · part-time',
        'exp.tekra.period': 'бер. 2024 – черв. 2026',
        'exp.tekra.place': 'Віддалено',
        'exp.tekra.context': 'Проєктна співпраця із сезонним навантаженням: починав як розробник, далі здебільшого прототипи, перевірка гіпотез і внутрішні інструменти на запит.',
        'exp.tekra.b1': 'Кросплатформний десктопний застосунок на Python/PyQt6 із системою генерації та перевірки ліцензійних ключів; інсталятори Inno Setup.',
        'exp.tekra.b2': 'Боти для автоматизації внутрішніх бізнес-процесів і бекенд-сервіси на FastAPI.',
        'exp.tekra.b3': 'Оптимізація багатопотоковості, що скоротила час обробки даних у десктопному застосунку.',

        'talks.heading': 'Виступи та медіа',
        'talks.watch': 'Дивитися на YouTube',
        'talks.1.meta': 'онлайн-мітап GoIT · серп. 2026 · спікер',
        'talks.1.desc': 'Доповідь для майбутніх Python-студентів GoIT: Python як мова, якою пишуть AI і якою пишуть разом з AI. Три ролі AI в бекенд-команді: асистент у коді зі spec-first правилами, механізм ухвалення рішень усередині коду та чат-бот. Кейс: AI Assistant INBULK на LangChain з інструментами, flow, guardrails і людиною в контурі.',
        'talks.1.note': 'Моя частина з 12:27 до 41:00. Плеєр налаштований на цей фрагмент; повний стрім відкривається на YouTube.',
        'talks.2.meta': 'GoIT · 2024 · навчальна технічна співбесіда',
        'talks.2.desc': 'Запис mock-співбесіди з першого року в індустрії: основи Python, бази даних, async.',
        'talks.3.meta': 'GoIT · 2024 · інтерв’ю',
        'talks.3.desc': 'Як я перейшов із барної стійки в бекенд-розробку.',

        'press.tag': 'Преса',
        'press.1.meta': 'dev.ua · лист. 2026 · Стартап',
        'press.1.desc': 'dev.ua написав про bot_allert, мій open-source Telegram-бот. Він об’єднує канали тривог з однієї папки Telegram в одну стрічку: заглушені канали приходять беззвучно, решта — зі звуком.',
        'press.read': 'Читати на dev.ua',

        'projects.heading': 'Вибрані проєкти',
        'projects.sub': 'Open-source проєкти. Основна продуктова робота в INBULK закрита і описана вище.',
        'projects.0.meta': '2026 · FastAPI · PostgreSQL · LangChain · Terraform',
        'projects.0.title': 'Backend Showcase',
        'projects.0.desc': 'Зібраний самотужки з AI-агентами менш ніж за місяць: живий REST API в хмарі для мережі ресторанів з автоматичним деплоєм, моніторингом і AI-асистентом на LangChain і OpenAI. FastAPI і PostgreSQL, Docker-образи з промоушеном за digest через GitHub Actions, Terraform в Oracle Cloud, Prometheus і публічні дашборди Grafana, симулятор гостей на n8n; працює за $0. Рев’ю зупиняли реальні баги до релізу, як-от вхід, що непомітно губив cookie сесії.',
        'projects.0.api': 'API-документація',
        'projects.1.meta': '2026 · Python · Telethon · Docker',
        'projects.1.desc': 'Self-hosted Telegram-бот, що зводить канали тривог з однієї папки в одну стрічку і враховує, які канали заглушені. Userbot читає, звичайний бот надсилає; працює в ~100 МБ на безкоштовній VM Oracle Cloud.',
        'projects.1.press': 'Про нього написав dev.ua',
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
        'projects.6.desc': 'Python-інструмент без залежностей, що рендерить одноколонкове чорно-біле CV, зручне для ATS, в A4 HTML і PDF, окремий файл під кожну назву посади, з тестами. CV на цій сторінці зібране ним.',

        'skills.heading': 'Навички',
        'skills.g1': 'Бекенд',
        'skills.g2': 'Дані',
        'skills.g2.opt': 'Оптимізація запитів',
        'skills.g2.pipe': 'Обробка Excel / PDF',
        'skills.g3': 'Інфраструктура',
        'skills.g4': 'AI',
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
        'edu.3.school': 'EPAM Campus',
        'edu.3.period': 'жовт. – лист. 2026',
        'edu.3.degree': 'IT Marathon 6.0, 40-годинна онлайн-програма',
        'edu.3.note': 'Аналіз вимог, UX/UI-дизайн, проєктування архітектури, розробка, тестування та розгортання в хмарі. Диплом ID ITM261789.',
        'edu.3.cert': 'Диплом (PDF)',

        'recs.heading': 'Рекомендації',
        'recs.sub': 'З LinkedIn, цитати мовою оригіналу.',
        'recs.link': 'Усі рекомендації в LinkedIn',

        'contact.heading': 'Контакти',
        'contact.text': 'Найзручніше писати на пошту або в Telegram.',

        'footer.left': 'Владислав Скопенко · Одеса · Оновлено в листопаді 2026',
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
