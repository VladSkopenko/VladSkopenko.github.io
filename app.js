(function () {
    var UK = {
        'nav.experience': 'Досвід',
        'nav.talks': 'Виступи',
        'nav.projects': 'Проєкти',
        'nav.skills': 'Навички',
        'nav.recommendations': 'Рекомендації',

        'hero.title': 'Backend-інженер (Python)',
        'hero.name': 'Владислав Скопенко',
        'hero.lead': 'Будую B2B-платформи від початку до кінця: модель даних, API, інтеграції, деплой. З 2025 року основний бекенд-розробник у INBULK, цифровій платформі торгівлі сировинними товарами, яку ми вивели з ранньої стадії в продакшн.',
        'hero.meta': 'Одеса, Україна · Remote',
        'cta.cv': 'Завантажити CV (PDF)',
        'cta.telegram': 'Написати в Telegram',

        'exp.heading': 'Досвід',
        'exp.inbulk.role': 'Backend-інженер (Python)',
        'exp.inbulk.company': 'INBULK (раніше iCORN)',
        'exp.inbulk.period': 'бер. 2025 – зараз',
        'exp.inbulk.place': 'Remote · Київ',
        'exp.inbulk.context': 'Цифрова платформа торгівлі зерном, що об’єднує трейдерів, логістів і фінансових партнерів. Невелика команда, AI-native підхід до розробки.',
        'exp.inbulk.b1': 'Основний контриб’ютор кодової бази (84%). Спроєктував архітектуру системи, ухвалював технічні рішення і вибудовував інженерні процеси, доводячи продукт від ранньої стадії до продакшну.',
        'exp.inbulk.b2': 'Реалізував універсальну автентифікацію OAuth 2.0 (Google, LinkedIn, Meta) власними силами, замінивши Auth0 і його платну підписку.',
        'exp.inbulk.b3': 'Модуль логістики: управління транспортом, товарно-транспортні накладні (ТТН), відстеження водіїв через Google Maps, Telegram-бот для водіїв.',
        'exp.inbulk.b4': 'Аукціонна система: замовлення, ставки, контрпропозиції, шаблони. Аналітика дашбордів на SQL/CTE-запитах з мультивалютною агрегацією.',
        'exp.inbulk.b5': 'Автоматизація документів: генерація PDF з перевіркою цифрового підпису, парсинг Excel для масового імпорту.',
        'exp.inbulk.b6': 'Відповідаю за шар даних: проєктування схеми та міграції Alembic на асинхронному SQLAlchemy 2.0, усунення N+1, навантажувальне тестування на таблицях із мільйонами рядків.',
        'exp.inbulk.b7': 'Платформа: WebSocket-сповіщення, інтеграції з Odoo ERP, S3 і Google Maps, Docker, Prometheus, фонові воркери, CI/CD. AI-асистент для управління платформою на LangChain (RAG).',

        'exp.tekra.role': 'Software Developer · part-time',
        'exp.tekra.period': 'бер. 2024 – черв. 2026',
        'exp.tekra.place': 'Remote',
        'exp.tekra.context': 'Проєктна співпраця із сезонним навантаженням: починав як розробник, далі здебільшого прототипи, перевірка гіпотез і внутрішні інструменти на запит.',
        'exp.tekra.b1': 'Кросплатформний десктопний застосунок на Python/PyQt6 із системою генерації та перевірки ліцензійних ключів; інсталятори Inno Setup.',
        'exp.tekra.b2': 'Боти для автоматизації внутрішніх бізнес-процесів і бекенд-сервіси на FastAPI.',
        'exp.tekra.b3': 'Оптимізація багатопотоковості, що скоротила час обробки даних у десктопному застосунку.',

        'exp.also.heading': 'Також',
        'exp.also.1': 'Ментор Data Science у GoIT, лист. 2024 – лют. 2025: код-рев’ю, воркшопи та індивідуальна підтримка студентів.',
        'exp.also.2': 'Фриланс: Telegram-бот магазину аюрведи, трав. – серп. 2024. Див. Проєкти нижче.',

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
        'projects.sub': 'Open-source утиліти та фриланс. Основна продуктова робота в INBULK закрита і описана вище.',
        'projects.1.meta': 'Фриланс · 2024 · у продакшні',
        'projects.1.title': 'Telegram-бот магазину аюрведи',
        'projects.1.desc': 'Бот-магазин на aiogram з вебхуками FastAPI: каталог і кошик, реферальна програма, інтеграція Monobank API, промо-розсилки з Google Sheets, двостороння синхронізація з KeyCRM.',
        'projects.1.link1': 'Відкрити бота',
        'projects.1.link2': 'Сайт клієнта',
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
        'projects.6.desc': 'Python-скрипт без залежностей, що рендерить A4-резюме з dict у HTML і PDF. CV на цій сторінці зібране ним.',

        'skills.heading': 'Навички',
        'skills.g1': 'Бекенд',
        'skills.g2': 'Дані',
        'skills.g2.opt': 'Оптимізація запитів',
        'skills.g2.pipe': 'Excel / PDF пайплайни',
        'skills.g3': 'Інфраструктура',
        'skills.g3.workers': 'Фонові воркери',
        'skills.g4': 'AI',
        'skills.g4.flow': 'AI-native процес розробки',
        'skills.g5': 'Інше',
        'skills.g5.mt': 'Багатопотоковість',
        'skills.g5.odoo': 'Інтеграція з Odoo ERP',
        'skills.g5.tg': 'Telegram-боти',
        'skills.g6': 'Мови',
        'skills.langs': 'Українська: рідна · English: B1',

        'edu.heading': 'Освіта',
        'edu.1.school': 'Одеський національний економічний університет',
        'edu.1.degree': 'Бакалавр, фінанси та банківська справа',
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

        'footer.left': 'Владислав Скопенко · Одеса · Оновлено у вересні 2026',
        'footer.source': 'Код сайту'
    };

    var TITLES = {
        en: 'Vladyslav Skopenko · Backend Engineer (Python)',
        uk: 'Владислав Скопенко · Backend-інженер (Python)'
    };

    var root = document.documentElement;
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

    var initial = root.getAttribute('data-lang') === 'uk' ? 'uk' : 'en';
    applyLang(initial);
})();
