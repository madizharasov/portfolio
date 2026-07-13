const translations = {
	en: {
		navAbout: 'About',
		navSkills: 'Skills',
		navExperience: 'Experience',
		navProjects: 'Projects',
		navContact: 'Contact',
		heroKicker: 'Frontend Developer',
		heroTitle: 'Building clean, responsive web interfaces with React and TypeScript.',
		heroText:
			'I am a frontend developer with 2 years of experience at Bank CenterCredit. I create modern web applications using React, JavaScript, TypeScript, HTML and CSS.',
		viewProjects: 'View projects',
		statExperience: 'Years in banking IT',
		statStack: 'Frontend stack',
		statTs: 'Typed UI development',
		statBank: 'Joined Bank CenterCredit',
		aboutKicker: 'About',
		aboutTitle: 'Frontend developer focused on practical, polished interfaces.',
		aboutText1:
			'I work with React, JavaScript, TypeScript, HTML, CSS and Git. My focus is building readable interfaces, responsive layouts and applications that feel simple for people to use.',
		aboutText2:
			'Since 2023, I have been working at Bank CenterCredit, gaining experience in a real business environment with production-minded workflows and team collaboration.',
		skillsKicker: 'Skills',
		skillsTitle: 'Technologies I work with',
		backgroundKicker: 'Experience & Education',
		backgroundTitle: 'Background',
		bankDate: '2023 - Present',
		bankText:
			'2 years of experience in the banking industry, working with web interfaces, development workflows and technology-driven business tasks.',
		mastersTitle: "Master's Degree",
		mastersText:
			"Completed a two-year master's program, continuing technical and analytical education after the bachelor's degree.",
		satbayevText:
			'Completed bachelor studies at Satbayev University, building a foundation in engineering, technology and problem solving.',
		projectsKicker: 'Projects',
		projectsTitle: 'Selected work',
		allRepos: 'All repositories',
		movieType: 'React app',
		movieText:
			'A movie search application with a dark streaming-style UI, poster cards and OMDb API integration.',
		rickText:
			'An interactive character explorer with search, filters and responsive layout powered by the Rick and Morty API.',
		liveSite: 'Live site',
		contactKicker: 'Contact',
		contactTitle: "Let's connect",
		contactText: 'I am open to frontend opportunities, collaboration and new projects.',
		githubProfile: 'GitHub Profile',
		themeLight: 'Light',
		themeDark: 'Dark',
	},
	ru: {
		navAbout: 'Обо мне',
		navSkills: 'Навыки',
		navExperience: 'Опыт',
		navProjects: 'Проекты',
		navContact: 'Контакты',
		heroKicker: 'Frontend-разработчик',
		heroTitle: 'Создаю чистые и адаптивные веб-интерфейсы на React и TypeScript.',
		heroText:
			'Я frontend-разработчик с 2 годами опыта в Bank CenterCredit. Создаю современные веб-приложения на React, JavaScript, TypeScript, HTML и CSS.',
		viewProjects: 'Посмотреть проекты',
		statExperience: 'Года опыта в банковском IT',
		statStack: 'Frontend стек',
		statTs: 'Типизированная UI-разработка',
		statBank: 'Устроился в Bank CenterCredit',
		aboutKicker: 'Обо мне',
		aboutTitle: 'Frontend-разработчик с фокусом на практичные и аккуратные интерфейсы.',
		aboutText1:
			'Я работаю с React, JavaScript, TypeScript, HTML, CSS и Git. Мой фокус - понятные интерфейсы, адаптивная верстка и приложения, которыми удобно пользоваться.',
		aboutText2:
			'С 2023 года работаю в Bank CenterCredit, где получил опыт в реальной бизнес-среде, командной разработке и production-oriented процессах.',
		skillsKicker: 'Навыки',
		skillsTitle: 'Технологии, с которыми я работаю',
		backgroundKicker: 'Опыт и образование',
		backgroundTitle: 'Бэкграунд',
		bankDate: '2023 - настоящее время',
		bankText:
			'2 года опыта в банковской сфере: работа с веб-интерфейсами, процессами разработки и технологическими бизнес-задачами.',
		mastersTitle: 'Магистратура',
		mastersText:
			'Окончил двухлетнюю магистратуру, продолжив техническое и аналитическое образование после бакалавриата.',
		satbayevText:
			'Окончил бакалавриат в Satbayev University, получив базу в инженерии, технологиях и решении задач.',
		projectsKicker: 'Проекты',
		projectsTitle: 'Избранные работы',
		allRepos: 'Все репозитории',
		movieType: 'React приложение',
		movieText:
			'Приложение для поиска фильмов с темным интерфейсом в стиле онлайн-кинотеатра, карточками постеров и интеграцией OMDb API.',
		rickText:
			'Интерактивный каталог персонажей с поиском, фильтрами и адаптивной версткой на основе Rick and Morty API.',
		liveSite: 'Открыть сайт',
		contactKicker: 'Контакты',
		contactTitle: 'Будем на связи',
		contactText: 'Я открыт к frontend-вакансиям, сотрудничеству и новым проектам.',
		githubProfile: 'Профиль GitHub',
		themeLight: 'Светлая',
		themeDark: 'Темная',
	},
}

const root = document.documentElement
const langButton = document.querySelector('[data-lang-toggle]')
const themeButton = document.querySelector('[data-theme-toggle]')

const savedLang = localStorage.getItem('portfolio-lang') || 'en'
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'

function setLanguage(lang) {
	root.lang = lang
	document.querySelectorAll('[data-i18n]').forEach(element => {
		const key = element.dataset.i18n
		element.textContent = translations[lang][key]
	})
	langButton.textContent = lang === 'en' ? 'RU' : 'EN'
	localStorage.setItem('portfolio-lang', lang)
	updateThemeButton()
}

function setTheme(theme) {
	root.dataset.theme = theme
	localStorage.setItem('portfolio-theme', theme)
	updateThemeButton()
}

function updateThemeButton() {
	const lang = root.lang || 'en'
	const theme = root.dataset.theme || 'dark'
	themeButton.textContent =
		theme === 'dark' ? translations[lang].themeLight : translations[lang].themeDark
}

langButton.addEventListener('click', () => {
	setLanguage(root.lang === 'en' ? 'ru' : 'en')
})

themeButton.addEventListener('click', () => {
	setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark')
})

setTheme(savedTheme)
setLanguage(savedLang)
