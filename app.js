/* ============================================================================
   Jurisprudence | Юриспруденция — основное приложение
   ============================================================================ */

/* ---------------------------- Иконки (SVG) ------------------------------- */
const ICONS = {
  home: '<svg class="ic" viewBox="0 0 24 24"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h5v-5h2v5h5v-9"/></svg>',
  book: '<svg class="ic" viewBox="0 0 24 24"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>',
  clipboard: '<svg class="ic" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 11h6M9 15h6M9 8h3"/></svg>',
  scale: '<svg class="ic" viewBox="0 0 24 24"><path d="M12 3v18M8 21h8"/><path d="M5 7l-3 6a3 3 0 0 0 6 0z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0z"/><path d="M4 7h16"/><path d="M12 3l4 4"/></svg>',
  person: '<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>',
  chart: '<svg class="ic" viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M2 20h20"/></svg>',
  bell: '<svg class="ic" viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 6 2 7H4c.5-1 2-3 2-7z"/><path d="M9.5 19a2.5 2.5 0 0 0 5 0"/></svg>',
  search: '<svg class="ic" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  chevron: '<svg class="ic" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
  plus: '<svg class="ic" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  trash: '<svg class="ic" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/><path d="M10 11v6M14 11v6"/></svg>',
  gear: '<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1z"/></svg>',
  logout: '<svg class="ic" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  back: '<svg class="ic" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
  users: '<svg class="ic" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 19c0-3.3 3-5 6.5-5s6.5 1.7 6.5 5"/><path d="M16 4.5a3 3 0 0 1 0 6"/><path d="M18.5 14.3c2 .5 3 1.8 3 4.2"/></svg>',
  close: '<svg class="ic" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  edit: '<svg class="ic" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  empty: '<svg class="ic" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>'
};

/* ---------------------------- DOM helper --------------------------------- */
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

/* ---------------------------- Firebase ------------------------------------ */
let db = null;
let firebaseReady = false;
let firebaseConfigured = !(typeof firebaseConfig === 'undefined' || firebaseConfig.apiKey === 'ВСТАВЬТЕ_СЮДА');

if (firebaseConfigured) {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
  } catch (e) {
    console.error('Firebase init error:', e);
    firebaseConfigured = false;
  }
}

/* ---------------------------- Утилиты -------------------------------------- */
async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function normUsername(u) {
  return (u || '').trim().toLowerCase().replace(/\s+/g, '');
}

function fmtDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
      ' ' + d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  } catch (e) { return ''; }
}

function initials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = el(`<div class="toast"></div>`);
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}

/* ---------------------------- Состояние ------------------------------------ */
let state = {
  view: 'loading',
  sectionIdx: null, tab: 'dates', lawId: null, search: '', revealed: new Set(),
  session: null,        // { username, name, role }
  users: [],            // admin: список всех пользователей
  tests: [],            // [{ id, title, questions:[{q, options:[4], correct}] }]
  results: [],          // результаты тестов текущего пользователя
  allResults: [],       // все результаты (для админ-статистики), грузится лениво
  quiz: null,
  modal: null,
  authError: '',
  authBusy: false,
  soonLabel: ''
};

function persistSession() {
  if (state.session) localStorage.setItem('jur_session', JSON.stringify(state.session));
  else localStorage.removeItem('jur_session');
}

/* ---------------------------- Инициализация / Auth -------------------------- */
async function boot() {
  const app = document.getElementById('app');

  if (!firebaseConfigured) {
    app.innerHTML = '';
    app.appendChild(renderConfigMissing());
    return;
  }

  try {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        try { await firebase.auth().signInAnonymously(); }
        catch (e) { showFatalError(e); }
        return;
      }
      firebaseReady = true;
      await afterAuthReady();
    });
  } catch (e) {
    showFatalError(e);
  }
}

function showFatalError(e) {
  console.error(e);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(el(`<div class="loading-screen" style="padding:24px;text-align:center;">
    <p style="color:#fff;font-weight:700;font-size:15px;margin:0 0 8px;">Не удалось подключиться к базе данных</p>
    <p style="font-size:12.5px;line-height:1.6;">Проверьте firebase-config.js и правила доступа Firestore.<br>Подробности в консоли браузера (F12).</p>
  </div>`));
}

async function afterAuthReady() {
  try {
    const usersSnap = await db.collection('users').limit(1).get();
    if (usersSnap.empty) {
      state.view = 'setup-admin';
      render();
      return;
    }
  } catch (e) {
    showFatalError(e);
    return;
  }

  const saved = localStorage.getItem('jur_session');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const doc = await db.collection('users').doc(parsed.username).get();
      if (doc.exists) {
        const d = doc.data();
        state.session = { username: parsed.username, name: d.name, role: d.role };
        await loadUserScopedData();
        state.view = 'home';
        render();
        return;
      } else {
        localStorage.removeItem('jur_session');
      }
    } catch (e) { console.error(e); }
  }
  state.view = 'login';
  render();
}

async function loadUserScopedData() {
  if (!state.session) return;
  try {
    const [testsSnap, resultsSnap] = await Promise.all([
      db.collection('tests').get(),
      db.collection('results').where('username', '==', state.session.username).get()
    ]);
    state.tests = testsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    state.results = resultsSnap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  } catch (e) { console.error(e); }
}

async function loadAdminUsers() {
  try {
    const snap = await db.collection('users').get();
    state.users = snap.docs.map(d => ({ username: d.id, ...d.data() }))
      .sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''));
  } catch (e) { console.error(e); showToast('Не удалось загрузить пользователей'); }
}

async function loginSubmit(username, password) {
  const u = normUsername(username);
  if (!u || !password) { state.authError = 'Введите логин и пароль'; render(); return; }
  state.authBusy = true; state.authError = ''; render();
  try {
    const doc = await db.collection('users').doc(u).get();
    if (!doc.exists) { state.authError = 'Неверный логин или пароль'; state.authBusy = false; render(); return; }
    const d = doc.data();
    const hash = await sha256(password);
    if (hash !== d.passwordHash) { state.authError = 'Неверный логин или пароль'; state.authBusy = false; render(); return; }
    state.session = { username: u, name: d.name, role: d.role };
    persistSession();
    state.authBusy = false;
    await loadUserScopedData();
    state.view = 'home';
    render();
  } catch (e) {
    console.error(e);
    state.authError = 'Ошибка соединения с базой данных';
    state.authBusy = false;
    render();
  }
}

async function registerFirstAdminSubmit(name, username, password) {
  const u = normUsername(username);
  if (!name.trim() || !u || password.length < 4) {
    state.authError = 'Заполните все поля (пароль — от 4 символов)';
    render();
    return;
  }
  state.authBusy = true; state.authError = ''; render();
  try {
    const hash = await sha256(password);
    await db.collection('users').doc(u).set({
      name: name.trim(), passwordHash: hash, role: 'admin', createdAt: new Date().toISOString()
    });
    state.session = { username: u, name: name.trim(), role: 'admin' };
    persistSession();
    state.authBusy = false;
    await loadUserScopedData();
    state.view = 'home';
    render();
  } catch (e) {
    console.error(e);
    state.authError = 'Ошибка соединения с базой данных';
    state.authBusy = false;
    render();
  }
}

function logout() {
  state.session = null;
  state.tests = []; state.results = []; state.users = [];
  persistSession();
  state.view = 'login';
  render();
}

/* ---------------------------- Рендер-диспетчер ------------------------------ */
function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  if (state.view === 'loading') { app.appendChild(renderLoading()); return; }
  if (state.view === 'setup-admin') { app.appendChild(renderSetupAdmin()); return; }
  if (state.view === 'login') { app.appendChild(renderLogin()); return; }

  if (state.view === 'home') app.appendChild(renderHome());
  else if (state.view === 'book-sections') app.appendChild(renderBookSections());
  else if (state.view === 'book-section') app.appendChild(renderBookSection());
  else if (state.view === 'npa-list') app.appendChild(renderNpaList());
  else if (state.view === 'npa-reader') app.appendChild(renderNpaReader());
  else if (state.view === 'tests-list') app.appendChild(renderTestsList());
  else if (state.view === 'quiz') app.appendChild(renderQuiz());
  else if (state.view === 'quiz-result') app.appendChild(renderQuizResult());
  else if (state.view === 'profile') app.appendChild(renderProfile());
  else if (state.view === 'admin') app.appendChild(renderAdminHome());
  else if (state.view === 'admin-users') app.appendChild(renderAdminUsers());
  else if (state.view === 'admin-tests') app.appendChild(renderAdminTests());
  else if (state.view === 'admin-category') app.appendChild(renderAdminCategory());
  else app.appendChild(renderHome());

  app.appendChild(renderBottomNav());
  if (state.modal) app.appendChild(renderModal());
}

function renderLoading() {
  return el(`<div class="loading-screen">
    <div class="spinner"></div>
    <p>Загрузка…</p>
  </div>`);
}

function renderConfigMissing() {
  return el(`<div class="loading-screen" style="padding:24px;text-align:center;">
    <p style="color:#fff;font-weight:700;font-size:16px;margin:0 0 10px;">Firebase не настроен</p>
    <p style="font-size:13px;line-height:1.6;max-width:320px;">Откройте файл <b style="color:#fff;">firebase-config.js</b> и вставьте данные вашего проекта Firebase. Инструкция — в SETUP_GUIDE.md.</p>
  </div>`);
}

/* ---------------------------- Экраны авторизации ---------------------------- */
function authLogoBlock() {
  return `<div class="auth-logo">
    <img src="logo.png" alt="logo">
    <p class="an">Jurisprudence</p>
    <p class="ar">Юриспруденция</p>
  </div>`;
}

function renderLogin() {
  const wrap = el(`<div class="auth-screen">
    ${authLogoBlock()}
    <div class="auth-card">
      <h2>Вход</h2>
      <p class="auth-sub">Введите логин и пароль, которые выдал администратор</p>
      ${state.authError ? `<div class="auth-error"></div>` : ''}
      <div class="field"><label>Логин</label><input type="text" id="f-username" autocomplete="username"></div>
      <div class="field"><label>Пароль</label><input type="password" id="f-password" autocomplete="current-password"></div>
      <button class="btn-primary" id="btn-login">${state.authBusy ? 'Входим…' : 'Войти'}</button>
    </div>
  </div>`);
  if (state.authError) wrap.querySelector('.auth-error').textContent = state.authError;
  const loginBtn = wrap.querySelector('#btn-login');
  loginBtn.disabled = state.authBusy;
  const doLogin = () => loginSubmit(wrap.querySelector('#f-username').value, wrap.querySelector('#f-password').value);
  loginBtn.onclick = doLogin;
  wrap.querySelector('#f-password').onkeydown = (e) => { if (e.key === 'Enter') doLogin(); };
  return wrap;
}

function renderSetupAdmin() {
  const wrap = el(`<div class="auth-screen">
    ${authLogoBlock()}
    <div class="auth-card">
      <h2>Первый запуск</h2>
      <p class="auth-sub">Пользователей ещё нет — создайте аккаунт администратора</p>
      <div class="auth-note">Это будет главный аккаунт: он сможет добавлять и удалять остальных пользователей и вопросы тестов.</div>
      ${state.authError ? `<div class="auth-error"></div>` : ''}
      <div class="field"><label>Ваше имя</label><input type="text" id="f-name" placeholder="Например, Азиз"></div>
      <div class="field"><label>Логин</label><input type="text" id="f-username" placeholder="admin" autocomplete="username"></div>
      <div class="field"><label>Пароль</label><input type="password" id="f-password" autocomplete="new-password"></div>
      <button class="btn-primary" id="btn-setup">${state.authBusy ? 'Создаём…' : 'Создать аккаунт администратора'}</button>
    </div>
  </div>`);
  if (state.authError) wrap.querySelector('.auth-error').textContent = state.authError;
  const btn = wrap.querySelector('#btn-setup');
  btn.disabled = state.authBusy;
  btn.onclick = () => registerFirstAdminSubmit(
    wrap.querySelector('#f-name').value,
    wrap.querySelector('#f-username').value,
    wrap.querySelector('#f-password').value
  );
  return wrap;
}

/* ---------------------------- Общие компоненты ------------------------------ */
const NAV_ITEMS = [
  { key: 'home', icon: ICONS.home, label: 'Главная', views: ['home'] },
  { key: 'book-sections', icon: ICONS.book, label: 'Теория', views: ['book-sections', 'book-section'] },
  { key: 'tests-list', icon: ICONS.clipboard, label: 'Тесты', views: ['tests-list', 'quiz', 'quiz-result'] },
  { key: 'npa-list', icon: ICONS.scale, label: 'Законы', views: ['npa-list', 'npa-reader'] },
  { key: 'profile', icon: ICONS.person, label: 'Профиль', views: ['profile', 'admin', 'admin-users', 'admin-tests', 'admin-category'] },
];

function renderBottomNav() {
  const nav = el('<nav class="bottom-nav"></nav>');
  NAV_ITEMS.forEach(item => {
    const active = item.views.includes(state.view);
    const btn = el(`<button class="nav-item ${active ? 'active' : ''}">
      ${item.icon}
      <span class="nlabel"></span>
    </button>`);
    btn.querySelector('.nlabel').textContent = item.label;
    btn.onclick = () => {
      state.view = item.key;
      state.search = '';
      render();
    };
    nav.appendChild(btn);
  });
  return nav;
}

function brandRow() {
  return `<div class="brand-row">
    <div class="brand-left">
      <img class="logo" src="logo.png" alt="Jurisprudence">
      <p class="title">Jurisprudence<span class="divider">|</span>Юриспруденция</p>
    </div>
  </div>`;
}

function topbar(title, subtitle, onBack) {
  const h = el(`<header class="topbar">
    ${onBack ? `<button class="back">${ICONS.back}Назад</button>` : ''}
    ${!onBack ? brandRow() : `<p class="title" style="font-size:16px;"></p>`}
    ${subtitle ? '<p class="subtitle"></p>' : ''}
  </header>`);
  if (subtitle) h.querySelector('.subtitle').textContent = subtitle;
  if (onBack) h.querySelector('.title').textContent = title;
  if (onBack) h.querySelector('.back').onclick = onBack;
  return h;
}

/* ---------------------------- Главная -------------------------------------- */
function computeUserStats() {
  const results = state.results;
  const totalAttempts = results.length;
  const catCount = state.tests.length;
  const attemptedCats = new Set(results.map(r => r.categoryId)).size;
  const avgPct = totalAttempts ? Math.round(results.reduce((a, r) => a + r.percent, 0) / totalAttempts) : 0;
  const coveragePct = catCount ? Math.round((attemptedCats / catCount) * 100) : 0;
  return { totalAttempts, catCount, attemptedCats, avgPct, coveragePct };
}

function ringSvg(pct, size, stroke, label) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return `<svg viewBox="0 0 ${size} ${size}">
    <circle class="ring-bg" cx="${size/2}" cy="${size/2}" r="${r}"/>
    <circle class="ring-fg" cx="${size/2}" cy="${size/2}" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${offset}"/>
  </svg>`;
}

function renderHome() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar());
  const stats = computeUserStats();

  const intro = el(`<div style="padding:16px 16px 0;">
    <p style="font-size:19px;font-weight:700;margin:0 0 3px;">Привет, ${state.session.name.split(' ')[0]} 👋</p>
    <p style="font-size:13.5px;color:var(--text-muted);margin:0;">Материалы для подготовки к юридическому факультету</p>
  </div>`);
  wrap.appendChild(intro);

  const hero = el(`<div class="hero-progress">
    <div class="hp-text">
      <p class="hp-title">Твой прогресс</p>
      <p class="hp-sub">Пройдено категорий тестов: ${stats.attemptedCats} из ${stats.catCount}</p>
      <div class="hp-bar"><div class="hp-bar-fill" style="width:${stats.coveragePct}%"></div></div>
    </div>
    <div class="ring-wrap">
      ${ringSvg(stats.coveragePct, 64, 8)}
      <div class="ring-label">${stats.coveragePct}%</div>
    </div>
  </div>`);
  hero.onclick = () => { state.view = 'profile'; render(); };
  wrap.appendChild(hero);

  const totalTerms = BOOK_DATA.reduce((a, s) => a + s.terms.length, 0);
  const totalDates = BOOK_DATA.reduce((a, s) => a + s.dates.length, 0);
  const totalQuotes = BOOK_DATA.reduce((a, s) => a + s.quotes.length, 0);
  const totalQuestions = state.tests.reduce((a, t) => a + (t.questions ? t.questions.length : 0), 0);

  const grid = el('<div class="home-grid"></div>');

  const bookTile = el(`<div class="home-tile">
    <div class="icon-badge" style="background:var(--pale);color:var(--blue);">${ICONS.book}</div>
    <p class="tname">Теория</p>
    <p class="tdesc">${totalTerms} терминов · ${totalDates} дат · ${totalQuotes} цитат</p>
  </div>`);
  bookTile.onclick = () => { state.view = 'book-sections'; state.search = ''; render(); };

  const testsTile = el(`<div class="home-tile">
    <div class="icon-badge" style="background:#e8f0ff;color:var(--blue-bright);">${ICONS.clipboard}</div>
    <p class="tname">Тесты</p>
    <p class="tdesc">${state.tests.length} категорий · ${totalQuestions} вопросов</p>
  </div>`);
  testsTile.onclick = () => { state.view = 'tests-list'; render(); };

  const npaTile = el(`<div class="home-tile">
    <div class="icon-badge" style="background:var(--navy);color:#fff;">${ICONS.scale}</div>
    <p class="tname">Нормативные акты</p>
    <p class="tdesc">${NPA_DATA.length} законов и актов</p>
  </div>`);
  npaTile.onclick = () => { state.view = 'npa-list'; state.search = ''; render(); };

  const profTile = el(`<div class="home-tile">
    <div class="icon-badge" style="background:var(--warning-bg);color:var(--warning-text);">${ICONS.chart}</div>
    <p class="tname">Статистика</p>
    <p class="tdesc">Пройдено тестов: ${stats.totalAttempts} · средний балл ${stats.avgPct}%</p>
  </div>`);
  profTile.onclick = () => { state.view = 'profile'; render(); };

  grid.appendChild(bookTile); grid.appendChild(testsTile); grid.appendChild(npaTile); grid.appendChild(profTile);
  wrap.appendChild(grid);

  const quoteBand = el(`<div class="quote-band">
    ${ICONS.bell}
    <div>
      <p class="qb-title">Мотивация на каждый день</p>
      <p class="qb-sub">Сильные знания — твоя уверенность в будущем.</p>
    </div>
  </div>`);
  wrap.appendChild(quoteBand);

  return wrap;
}

/* ---------------------------- Теория (книга) -------------------------------- */
function renderBookSections() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Теория', 'Выберите раздел', () => { state.view = 'home'; render(); }));
  const list = el('<div class="list" style="margin-top:12px;"></div>');
  BOOK_DATA.forEach((s, i) => {
    const total = s.dates.length + s.quotes.length + s.terms.length;
    const c = el(`<div class="card">
      <div class="card-left">
        <div class="icon-badge" style="background:var(--pale);color:var(--blue);">${ICONS.book}</div>
        <div>
          <p class="card-title"></p>
          <p class="card-sub"></p>
        </div>
      </div>
      <span class="chev">${ICONS.chevron}</span>
    </div>`);
    c.querySelector('.card-title').textContent = 'Раздел ' + s.num;
    c.querySelector('.card-sub').textContent = s.title + ` · ${total} записей`;
    c.onclick = () => { state.view = 'book-section'; state.sectionIdx = i; state.tab = 'dates'; state.search = ''; state.revealed = new Set(); render(); };
    list.appendChild(c);
  });
  wrap.appendChild(list);
  return wrap;
}

function renderBookSection() {
  const s = BOOK_DATA[state.sectionIdx];
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Раздел ' + s.num, s.title, () => { state.view = 'book-sections'; render(); }));

  const tabs = el('<div class="tabs"></div>');
  const tabDefs = [
    ['dates', `Даты (${s.dates.length})`],
    ['quotes', `Цитаты (${s.quotes.length})`],
    ['terms', `Термины (${s.terms.length})`]
  ];
  tabDefs.forEach(([key, label]) => {
    const b = el(`<button class="tab-btn ${state.tab === key ? 'active' : ''}"></button>`);
    b.textContent = label;
    b.onclick = () => { state.tab = key; state.search = ''; render(); };
    tabs.appendChild(b);
  });
  wrap.appendChild(tabs);

  if (state.tab === 'terms') {
    const sb = el(`<div class="search-box">${ICONS.search}<input type="text" placeholder="Поиск термина..."></div>`);
    sb.querySelector('input').value = state.search;
    sb.querySelector('input').oninput = (e) => { state.search = e.target.value; renderBookSectionBody(list); };
    wrap.appendChild(sb);
  }

  const list = el('<div class="list" style="margin-top:8px;"></div>');
  wrap.appendChild(list);
  renderBookSectionBody(list);
  return wrap;
}

function renderBookSectionBody(list) {
  const s = BOOK_DATA[state.sectionIdx];
  list.innerHTML = '';

  if (state.tab === 'dates') {
    if (!s.dates.length) { list.appendChild(renderEmpty('Нет данных')); return; }
    s.dates.forEach(d => {
      const c = el(`<div class="date-card"><p class="date"></p><p class="info"></p></div>`);
      c.querySelector('.date').textContent = d.date;
      c.querySelector('.info').textContent = d.info;
      list.appendChild(c);
    });
  } else if (state.tab === 'quotes') {
    if (!s.quotes.length) { list.appendChild(renderEmpty('Нет данных')); return; }
    s.quotes.forEach((q, i) => {
      const key = 'q' + i;
      const c = el(`<div class="quote-card"><p class="q"></p></div>`);
      c.querySelector('.q').textContent = '«' + q.quote + '»';
      if (state.revealed.has(key)) {
        c.appendChild(el(`<p class="author-shown">— ${q.author}</p>`));
      } else {
        const btn = el('<button class="author-btn">Кто автор?</button>');
        btn.onclick = () => { state.revealed.add(key); renderBookSectionBody(list); };
        c.appendChild(btn);
      }
      list.appendChild(c);
    });
  } else if (state.tab === 'terms') {
    const f = state.search.trim().toLowerCase();
    const filtered = s.terms.filter(t => !f || t.term.toLowerCase().includes(f) || t.definition.toLowerCase().includes(f));
    if (!filtered.length) { list.appendChild(renderEmpty('Ничего не найдено')); return; }
    filtered.forEach(t => {
      const c = el(`<div class="term-card"></div>`);
      if (t.group) c.appendChild(el(`<span class="group-tag">${t.group}</span>`));
      const tt = el('<p class="term"></p>'); tt.textContent = t.term; c.appendChild(tt);
      const dd = el('<p class="def"></p>'); dd.textContent = t.definition; c.appendChild(dd);
      list.appendChild(c);
    });
  }
}

function renderEmpty(text) {
  const d = el(`<div class="empty">${ICONS.empty}<p></p></div>`);
  d.querySelector('p').textContent = text;
  return d;
}

/* ---------------------------- Нормативные акты ------------------------------ */
function renderNpaList() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Нормативные акты', `${NPA_DATA.length} законов и актов`, () => { state.view = 'home'; render(); }));
  const sb = el(`<div class="search-box">${ICONS.search}<input type="text" placeholder="Поиск закона..."></div>`);
  sb.querySelector('input').value = state.search;
  sb.querySelector('input').oninput = (e) => { state.search = e.target.value; renderNpaListBody(list); };
  wrap.appendChild(sb);
  const list = el('<div class="list" style="margin-top:8px;"></div>');
  wrap.appendChild(list);
  renderNpaListBody(list);
  return wrap;
}

function renderNpaListBody(list) {
  list.innerHTML = '';
  const f = state.search.trim().toLowerCase();
  const filtered = NPA_DATA.filter(l => !f || l.title.toLowerCase().includes(f));
  if (!filtered.length) { list.appendChild(renderEmpty('Ничего не найдено')); return; }
  filtered.forEach(l => {
    const c = el(`<div class="card">
      <div class="card-left">
        <div class="icon-badge" style="background:var(--navy);color:#fff;">${ICONS.scale}</div>
        <div><p class="card-title"></p></div>
      </div>
      <span class="chev">${ICONS.chevron}</span>
    </div>`);
    c.querySelector('.card-title').textContent = l.title;
    c.onclick = () => { state.view = 'npa-reader'; state.lawId = l.id; window.scrollTo(0,0); render(); };
    list.appendChild(c);
  });
}

function highlightCallouts(container) {
  const headings = container.querySelectorAll('h3, h4');
  headings.forEach(h => {
    const txt = h.textContent.toLowerCase();
    if (txt.includes('ловушк') || txt.includes('exam-focus') || txt.includes('топ-') || txt.includes('маркер')) {
      let next = h.nextElementSibling;
      if (!next || /^H[1-4]$/.test(next.tagName)) return;
      const box = document.createElement('div');
      box.className = 'callout';
      const clonedHeading = h.cloneNode(true);
      clonedHeading.className = 'callout-title';
      h.replaceWith(box);
      box.appendChild(clonedHeading);
      while (next && !/^H[1-4]$/.test(next.tagName)) {
        const toMove = next;
        next = next.nextElementSibling;
        box.appendChild(toMove);
      }
    }
  });
}

function renderNpaReader() {
  const law = NPA_DATA.find(l => l.id === state.lawId);
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Нормативные акты', law.title.length > 40 ? law.title.slice(0,40)+'…' : law.title, () => { state.view = 'npa-list'; render(); }));
  const reader = el('<div class="npa-reader"></div>');
  reader.innerHTML = law.html;
  wrap.appendChild(reader);
  setTimeout(() => highlightCallouts(reader), 0);
  return wrap;
}

/* ---------------------------- Тесты ----------------------------------------- */
function bestResultForCategory(catId) {
  const attempts = state.results.filter(r => r.categoryId === catId);
  if (!attempts.length) return null;
  return attempts.reduce((best, r) => r.percent > best.percent ? r : best, attempts[0]);
}

function renderTestsList() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Тесты', `${state.tests.length} категорий`, () => { state.view = 'home'; render(); }));
  const list = el('<div class="list" style="margin-top:12px;"></div>');

  if (!state.tests.length) {
    list.appendChild(renderEmpty(state.session.role === 'admin'
      ? 'Пока нет ни одной категории тестов. Добавьте их в панели администратора.'
      : 'Пока нет ни одной категории тестов. Обратитесь к администратору.'));
  } else {
    state.tests.forEach(cat => {
      const qCount = (cat.questions || []).length;
      const best = bestResultForCategory(cat.id);
      const card = el(`<div class="test-cat-card">
        <div class="tc-top">
          <p class="tc-title"></p>
          ${best ? `<span class="tc-best">Лучший: ${best.percent}%</span>` : ''}
        </div>
        <p class="tc-count"></p>
      </div>`);
      card.querySelector('.tc-title').textContent = cat.title;
      card.querySelector('.tc-count').textContent = qCount + (qCount % 10 === 1 && qCount % 100 !== 11 ? ' вопрос' : (qCount % 10 >= 2 && qCount % 10 <= 4 && (qCount % 100 < 10 || qCount % 100 >= 20) ? ' вопроса' : ' вопросов'));
      card.onclick = () => {
        if (!qCount) { showToast('В этой категории пока нет вопросов'); return; }
        startQuiz(cat);
      };
      list.appendChild(card);
    });
  }
  wrap.appendChild(list);
  return wrap;
}

function startQuiz(cat) {
  const questions = [...(cat.questions || [])];
  state.quiz = {
    catId: cat.id, catTitle: cat.title, questions,
    idx: 0, correctCount: 0, selected: null, locked: false
  };
  state.view = 'quiz';
  render();
}

function renderQuiz() {
  const q = state.quiz;
  const question = q.questions[q.idx];
  const wrap = el('<div></div>');
  wrap.appendChild(topbar(q.catTitle, null, () => {
    if (confirm('Прервать тест? Прогресс не сохранится.')) { state.quiz = null; state.view = 'tests-list'; render(); }
  }));

  const pct = Math.round(((q.idx) / q.questions.length) * 100);
  wrap.appendChild(el(`<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>`));
  wrap.appendChild(el(`<p class="quiz-qnum">Вопрос ${q.idx + 1} из ${q.questions.length}</p>`));
  const qEl = el('<p class="quiz-question"></p>'); qEl.textContent = question.q; wrap.appendChild(qEl);

  const optsWrap = el('<div class="quiz-options"></div>');
  const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е'];
  question.options.forEach((opt, i) => {
    const isCorrect = i === question.correct;
    const isSelected = q.selected === i;
    let cls = '';
    if (q.locked) {
      if (isCorrect) cls = 'correct';
      else if (isSelected) cls = 'incorrect';
    } else if (isSelected) cls = 'selected';
    const optEl = el(`<button class="quiz-opt ${cls} ${q.locked ? 'disabled' : ''}">
      <span class="opt-letter">${letters[i] || (i+1)}</span>
      <span class="opt-text"></span>
    </button>`);
    optEl.querySelector('.opt-text').textContent = opt;
    optEl.onclick = () => {
      if (q.locked) return;
      q.selected = i;
      q.locked = true;
      if (isCorrect) q.correctCount++;
      render();
    };
    optsWrap.appendChild(optEl);
  });
  wrap.appendChild(optsWrap);

  const footer = el('<div class="quiz-footer"></div>');
  const nextBtn = el(`<button class="btn-primary">${q.idx === q.questions.length - 1 ? 'Завершить' : 'Далее'}</button>`);
  nextBtn.disabled = !q.locked;
  nextBtn.onclick = () => {
    if (!q.locked) return;
    if (q.idx < q.questions.length - 1) {
      q.idx++; q.selected = null; q.locked = false;
      render();
    } else {
      finishQuiz();
    }
  };
  footer.appendChild(nextBtn);
  wrap.appendChild(footer);

  return wrap;
}

async function finishQuiz() {
  const q = state.quiz;
  const total = q.questions.length;
  const percent = Math.round((q.correctCount / total) * 100);
  const record = {
    username: state.session.username,
    categoryId: q.catId,
    categoryTitle: q.catTitle,
    score: q.correctCount,
    total,
    percent,
    date: new Date().toISOString()
  };
  try {
    const ref = await db.collection('results').add(record);
    state.results.unshift({ id: ref.id, ...record });
  } catch (e) {
    console.error(e);
    showToast('Результат не сохранён — нет соединения');
  }
  state.quiz = { ...q, finished: true, finalPercent: percent };
  state.view = 'quiz-result';
  render();
}

function renderQuizResult() {
  const q = state.quiz;
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Результат', q.catTitle, () => { state.quiz = null; state.view = 'tests-list'; render(); }));

  const pct = q.finalPercent;
  const grade = pct >= 80 ? 'Отлично!' : pct >= 50 ? 'Неплохо!' : 'Стоит повторить материал';

  const hero = el(`<div class="result-hero">
    <div class="result-ring-wrap">
      ${ringSvg(pct, 128, 10)}
      <div class="ring-label">
        <span class="rpct">${pct}%</span>
        <span class="rfrac">${q.correctCount} из ${q.questions.length}</span>
      </div>
    </div>
    <p class="rtitle">${grade}</p>
    <p class="rsub">Результат сохранён в вашем профиле</p>
  </div>`);
  wrap.appendChild(hero);

  const actions = el('<div class="result-actions"></div>');
  const retryBtn = el('<button class="btn-primary">Пройти ещё раз</button>');
  const cat = state.tests.find(c => c.id === q.catId);
  retryBtn.onclick = () => { if (cat) startQuiz(cat); };
  const backBtn = el('<button class="btn-secondary">К списку тестов</button>');
  backBtn.onclick = () => { state.quiz = null; state.view = 'tests-list'; render(); };
  actions.appendChild(retryBtn); actions.appendChild(backBtn);
  wrap.appendChild(actions);

  return wrap;
}

/* ---------------------------- Профиль --------------------------------------- */
function renderProfile() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar());
  const stats = computeUserStats();

  const head = el(`<div class="profile-head">
    <div class="avatar"></div>
    <div>
      <p class="pname"></p>
      <p class="prole"></p>
    </div>
  </div>`);
  head.querySelector('.avatar').textContent = initials(state.session.name);
  head.querySelector('.pname').textContent = state.session.name;
  head.querySelector('.prole').textContent = '@' + state.session.username + (state.session.role === 'admin' ? ' · Администратор' : '');
  wrap.appendChild(head);

  const statGrid = el(`<div class="stat-grid">
    <div class="stat-box"><p class="sval">${stats.totalAttempts}</p><p class="slabel">Тестов пройдено</p></div>
    <div class="stat-box"><p class="sval">${stats.avgPct}%</p><p class="slabel">Средний балл</p></div>
  </div>`);
  wrap.appendChild(statGrid);

  if (state.tests.length) {
    wrap.appendChild(el('<p class="section-label">Прогресс по категориям</p>'));
    const progWrap = el('<div style="padding:0 16px;"></div>');
    state.tests.forEach(cat => {
      const best = bestResultForCategory(cat.id);
      const pct = best ? best.percent : 0;
      const row = el(`<div>
        <div class="prog-row"><span class="pr-name"></span><span class="pr-pct"></span></div>
        <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
      </div>`);
      row.querySelector('.pr-name').textContent = cat.title;
      row.querySelector('.pr-pct').textContent = best ? pct + '%' : 'не пройден';
      progWrap.appendChild(row);
    });
    wrap.appendChild(progWrap);
  }

  wrap.appendChild(el('<p class="section-label">Последние результаты</p>'));
  const resultsCard = el('<div class="list"><div class="card" style="display:block;"></div></div>');
  const inner = resultsCard.querySelector('.card');
  if (!state.results.length) {
    inner.appendChild(renderEmpty('Вы ещё не проходили тесты'));
  } else {
    state.results.slice(0, 8).forEach(r => {
      const badgeCls = r.percent >= 80 ? 'good' : r.percent >= 50 ? 'mid' : 'bad';
      const row = el(`<div class="result-row">
        <div><p class="rname"></p><p class="rdate"></p></div>
        <span class="result-badge ${badgeCls}">${r.percent}%</span>
      </div>`);
      row.querySelector('.rname').textContent = r.categoryTitle;
      row.querySelector('.rdate').textContent = fmtDate(r.date) + ` · ${r.score}/${r.total}`;
      inner.appendChild(row);
    });
  }
  wrap.appendChild(resultsCard);

  const actions = el('<div style="padding:18px 16px 0;display:flex;flex-direction:column;gap:10px;"></div>');
  if (state.session.role === 'admin') {
    const adminBtn = el(`<button class="btn-secondary" style="display:flex;align-items:center;justify-content:center;gap:8px;">${ICONS.gear}Панель администратора</button>`);
    adminBtn.onclick = () => { state.view = 'admin'; render(); };
    actions.appendChild(adminBtn);
  }
  const logoutBtn = el(`<button class="btn-secondary" style="display:flex;align-items:center;justify-content:center;gap:8px;color:var(--danger-text);">${ICONS.logout}Выйти</button>`);
  logoutBtn.onclick = () => { if (confirm('Выйти из аккаунта?')) logout(); };
  actions.appendChild(logoutBtn);
  wrap.appendChild(actions);

  return wrap;
}

/* ---------------------------- Админ: главная -------------------------------- */
function renderAdminHome() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Админ-панель', 'Пользователи и тесты', () => { state.view = 'profile'; render(); }));
  const body = el('<div style="padding:14px 16px;"></div>');

  const usersTile = el(`<div class="admin-tile">
    <div class="icon-badge" style="background:var(--pale);color:var(--blue);">${ICONS.users}</div>
    <div><p class="at-title">Пользователи</p><p class="at-sub">Добавить или удалить доступ</p></div>
    <span class="chev" style="margin-left:auto;">${ICONS.chevron}</span>
  </div>`);
  usersTile.onclick = async () => { await loadAdminUsers(); state.view = 'admin-users'; render(); };

  const testsTile = el(`<div class="admin-tile">
    <div class="icon-badge" style="background:#e8f0ff;color:var(--blue-bright);">${ICONS.clipboard}</div>
    <div><p class="at-title">Тесты</p><p class="at-sub">Категории и вопросы</p></div>
    <span class="chev" style="margin-left:auto;">${ICONS.chevron}</span>
  </div>`);
  testsTile.onclick = () => { state.view = 'admin-tests'; render(); };

  body.appendChild(usersTile);
  body.appendChild(testsTile);

  const statGrid = el(`<div class="stat-grid" style="padding:4px 0;">
    <div class="stat-box"><p class="sval">${state.tests.length}</p><p class="slabel">Категорий тестов</p></div>
    <div class="stat-box"><p class="sval">${state.tests.reduce((a,t)=>a+(t.questions||[]).length,0)}</p><p class="slabel">Всего вопросов</p></div>
  </div>`);
  body.appendChild(statGrid);

  wrap.appendChild(body);
  return wrap;
}

/* ---------------------------- Админ: пользователи ---------------------------- */
function renderAdminUsers() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Пользователи', `${state.users.length} аккаунтов`, () => { state.view = 'admin'; render(); }));
  const body = el('<div style="padding:14px 16px 90px;"></div>');

  if (!state.users.length) {
    body.appendChild(renderEmpty('Загрузка…'));
  } else {
    state.users.forEach(u => {
      const row = el(`<div class="user-row">
        <div>
          <p class="ur-name"></p>
          <p class="ur-meta"></p>
        </div>
      </div>`);
      const nameP = row.querySelector('.ur-name');
      nameP.textContent = u.name;
      const badge = el(`<span class="role-badge ${u.role}"></span>`);
      badge.textContent = u.role === 'admin' ? 'admin' : 'user';
      nameP.appendChild(badge);
      row.querySelector('.ur-meta').textContent = '@' + u.username + ' · создан ' + (u.createdAt ? u.createdAt.slice(0,10) : '—');
      if (u.username !== state.session.username) {
        const delBtn = el(`<button class="btn-danger">${ICONS.trash}</button>`);
        delBtn.onclick = () => deleteUserConfirm(u.username, u.name);
        row.appendChild(delBtn);
      }
      body.appendChild(row);
    });
  }
  wrap.appendChild(body);

  const fab = el(`<button class="fab">${ICONS.plus}</button>`);
  fab.onclick = () => { state.modal = { type: 'add-user' }; render(); };
  wrap.appendChild(fab);

  return wrap;
}

async function deleteUserConfirm(username, name) {
  if (!confirm(`Удалить пользователя «${name}» (@${username})? Он потеряет доступ к сайту. Его результаты тестов тоже будут удалены.`)) return;
  try {
    const resultsSnap = await db.collection('results').where('username', '==', username).get();
    const batch = db.batch();
    resultsSnap.docs.forEach(d => batch.delete(d.ref));
    batch.delete(db.collection('users').doc(username));
    await batch.commit();
    state.users = state.users.filter(u => u.username !== username);
    showToast('Пользователь удалён');
    render();
  } catch (e) {
    console.error(e);
    showToast('Не удалось удалить пользователя');
  }
}

async function addUserSubmit(name, username, password, role) {
  const u = normUsername(username);
  if (!name.trim() || !u || password.length < 4) { showToast('Заполните все поля (пароль — от 4 символов)'); return; }
  const existing = state.users.find(x => x.username === u);
  if (existing) { showToast('Такой логин уже занят'); return; }
  try {
    const hash = await sha256(password);
    const record = { name: name.trim(), passwordHash: hash, role: role || 'user', createdAt: new Date().toISOString() };
    await db.collection('users').doc(u).set(record);
    state.users.push({ username: u, ...record });
    state.modal = null;
    showToast('Пользователь добавлен');
    render();
  } catch (e) {
    console.error(e);
    showToast('Ошибка при сохранении');
  }
}

/* ---------------------------- Админ: тесты (категории) ----------------------- */
function renderAdminTests() {
  const wrap = el('<div></div>');
  wrap.appendChild(topbar('Тесты', `${state.tests.length} категорий`, () => { state.view = 'admin'; render(); }));
  const body = el('<div style="padding:14px 16px 90px;"></div>');

  if (!state.tests.length) {
    body.appendChild(renderEmpty('Пока нет ни одной категории'));
    const seedBtn = el('<button class="btn-secondary" style="margin-top:14px;">Загрузить примеры вопросов</button>');
    seedBtn.onclick = seedSampleTests;
    body.appendChild(seedBtn);
  } else {
    state.tests.forEach(cat => {
      const c = el(`<div class="card">
        <div class="card-left">
          <div class="icon-badge" style="background:#e8f0ff;color:var(--blue-bright);">${ICONS.clipboard}</div>
          <div><p class="card-title"></p><p class="card-sub"></p></div>
        </div>
        <span class="chev">${ICONS.chevron}</span>
      </div>`);
      c.querySelector('.card-title').textContent = cat.title;
      c.querySelector('.card-sub').textContent = `${(cat.questions||[]).length} вопросов`;
      c.onclick = () => { state.view = 'admin-category'; state.currentCatId = cat.id; render(); };
      body.appendChild(c);
    });
  }
  wrap.appendChild(body);

  const fab = el(`<button class="fab">${ICONS.plus}</button>`);
  fab.onclick = () => { state.modal = { type: 'add-category' }; render(); };
  wrap.appendChild(fab);

  return wrap;
}

async function seedSampleTests() {
  const samples = [
    { title: 'Конституция Республики Узбекистан', questions: [
      { q: 'В каком году была принята действующая Конституция Республики Узбекистан?', options: ['1991', '1992', '1993', '1995'], correct: 1 },
      { q: 'Сколько глав в Конституции Республики Узбекистан (в первоначальной редакции)?', options: ['19', '21', '26', '30'], correct: 2 },
      { q: 'Кто является главой государства согласно Конституции?', options: ['Премьер-министр', 'Президент', 'Спикер парламента', 'Председатель Верховного суда'], correct: 1 }
    ]},
    { title: 'Основы государства и права', questions: [
      { q: 'Что из перечисленного является признаком правового государства?', options: ['Верховенство закона', 'Отсутствие разделения властей', 'Единоличное правление', 'Отсутствие суда'], correct: 0 },
      { q: 'Какая ветвь власти принимает законы?', options: ['Исполнительная', 'Судебная', 'Законодательная', 'Муниципальная'], correct: 2 }
    ]},
    { title: 'Гражданское право', questions: [
      { q: 'С какого возраста наступает полная гражданская дееспособность в общем порядке?', options: ['14 лет', '16 лет', '18 лет', '21 год'], correct: 2 },
      { q: 'Что такое договор?', options: ['Одностороннее обещание', 'Соглашение двух и более сторон', 'Судебное решение', 'Закон'], correct: 1 }
    ]}
  ];
  try {
    const batch = db.batch();
    samples.forEach(s => {
      const ref = db.collection('tests').doc();
      batch.set(ref, { title: s.title, questions: s.questions, createdAt: new Date().toISOString() });
    });
    await batch.commit();
    const snap = await db.collection('tests').get();
    state.tests = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    showToast('Примеры вопросов загружены');
    render();
  } catch (e) {
    console.error(e);
    showToast('Не удалось загрузить примеры');
  }
}

async function addCategorySubmit(title) {
  if (!title.trim()) { showToast('Введите название категории'); return; }
  try {
    const ref = await db.collection('tests').add({ title: title.trim(), questions: [], createdAt: new Date().toISOString() });
    state.tests.push({ id: ref.id, title: title.trim(), questions: [] });
    state.modal = null;
    showToast('Категория добавлена');
    render();
  } catch (e) {
    console.error(e);
    showToast('Ошибка при сохранении');
  }
}

async function deleteCategoryConfirm(catId, title) {
  if (!confirm(`Удалить категорию «${title}» вместе со всеми её вопросами?`)) return;
  try {
    await db.collection('tests').doc(catId).delete();
    state.tests = state.tests.filter(c => c.id !== catId);
    state.view = 'admin-tests';
    showToast('Категория удалена');
    render();
  } catch (e) {
    console.error(e);
    showToast('Не удалось удалить категорию');
  }
}

/* ---------------------------- Админ: вопросы категории ------------------------ */
function renderAdminCategory() {
  const cat = state.tests.find(c => c.id === state.currentCatId);
  const wrap = el('<div></div>');
  if (!cat) { state.view = 'admin-tests'; return renderAdminTests(); }
  wrap.appendChild(topbar(cat.title, `${(cat.questions||[]).length} вопросов`, () => { state.view = 'admin-tests'; render(); }));

  const body = el('<div style="padding:14px 16px 90px;"></div>');
  const delCatBtn = el(`<button class="btn-danger" style="margin-bottom:14px;display:flex;align-items:center;gap:6px;">${ICONS.trash}Удалить категорию целиком</button>`);
  delCatBtn.onclick = () => deleteCategoryConfirm(cat.id, cat.title);
  body.appendChild(delCatBtn);

  const questions = cat.questions || [];
  if (!questions.length) {
    body.appendChild(renderEmpty('В этой категории пока нет вопросов'));
  } else {
    const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е'];
    questions.forEach((q, idx) => {
      const row = el(`<div class="q-editor-row">
        <div class="qer-top">
          <p class="qer-q"></p>
        </div>
        <p class="qer-opts"></p>
      </div>`);
      row.querySelector('.qer-q').textContent = (idx + 1) + '. ' + q.q;
      const optsP = row.querySelector('.qer-opts');
      optsP.innerHTML = q.options.map((o, i) => `${letters[i]||i+1}) <span class="${i===q.correct?'correct-opt':''}">${o.replace(/</g,'&lt;')}</span>`).join('<br>');

      const btnRow = el('<div style="display:flex;gap:6px;margin-top:8px;justify-content:flex-end;"></div>');
      const editBtn = el(`<button class="icon-btn-sm">${ICONS.edit}</button>`);
      editBtn.onclick = () => { state.modal = { type: 'edit-question', catId: cat.id, qIndex: idx }; render(); };
      const delBtn = el(`<button class="icon-btn-sm danger">${ICONS.trash}</button>`);
      delBtn.onclick = () => deleteQuestionConfirm(cat.id, idx);
      btnRow.appendChild(editBtn); btnRow.appendChild(delBtn);
      row.appendChild(btnRow);

      body.appendChild(row);
    });
  }
  wrap.appendChild(body);

  const fab = el(`<button class="fab">${ICONS.plus}</button>`);
  fab.onclick = () => { state.modal = { type: 'add-question', catId: cat.id }; render(); };
  wrap.appendChild(fab);

  return wrap;
}

async function saveQuestion(catId, question, qIndex) {
  const cat = state.tests.find(c => c.id === catId);
  if (!cat) return;
  const questions = [...(cat.questions || [])];
  if (qIndex === undefined || qIndex === null) questions.push(question);
  else questions[qIndex] = question;
  try {
    await db.collection('tests').doc(catId).update({ questions });
    cat.questions = questions;
    state.modal = null;
    showToast('Сохранено');
    render();
  } catch (e) {
    console.error(e);
    showToast('Не удалось сохранить вопрос');
  }
}

async function deleteQuestionConfirm(catId, qIndex) {
  if (!confirm('Удалить этот вопрос?')) return;
  const cat = state.tests.find(c => c.id === catId);
  if (!cat) return;
  const questions = (cat.questions || []).filter((_, i) => i !== qIndex);
  try {
    await db.collection('tests').doc(catId).update({ questions });
    cat.questions = questions;
    showToast('Вопрос удалён');
    render();
  } catch (e) {
    console.error(e);
    showToast('Не удалось удалить вопрос');
  }
}

/* ---------------------------- Модальные окна --------------------------------- */
function closeModal() { state.modal = null; render(); }

function renderModal() {
  const m = state.modal;
  const overlay = el('<div class="modal-overlay"></div>');
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };

  let sheet;
  if (m.type === 'add-user') sheet = renderAddUserModal();
  else if (m.type === 'add-category') sheet = renderAddCategoryModal();
  else if (m.type === 'add-question') sheet = renderQuestionModal(m.catId, null);
  else if (m.type === 'edit-question') sheet = renderQuestionModal(m.catId, m.qIndex);
  else sheet = el('<div class="modal-sheet"></div>');

  overlay.appendChild(sheet);
  return overlay;
}

function modalHeader(title) {
  const row = el(`<div class="modal-close-row"><button>${ICONS.close}</button></div>`);
  row.querySelector('button').onclick = closeModal;
  const h = el(`<h3></h3>`);
  h.textContent = title;
  const frag = document.createDocumentFragment();
  frag.appendChild(row); frag.appendChild(h);
  return frag;
}

function renderAddUserModal() {
  const sheet = el('<div class="modal-sheet"></div>');
  sheet.appendChild(modalHeader('Новый пользователь'));
  sheet.appendChild(el(`<div class="field"><label>Имя и фамилия</label><input type="text" id="m-name" placeholder="Например, Дилноза Каримова"></div>`));
  sheet.appendChild(el(`<div class="field"><label>Логин</label><input type="text" id="m-username" placeholder="dilnoza"></div>`));
  sheet.appendChild(el(`<div class="field"><label>Пароль</label><input type="text" id="m-password" placeholder="минимум 4 символа"></div>`));
  sheet.appendChild(el(`<div class="field"><label>Роль</label>
    <select id="m-role"><option value="user">Пользователь</option><option value="admin">Администратор</option></select>
  </div>`));
  const btn = el('<button class="btn-primary">Добавить</button>');
  btn.onclick = () => addUserSubmit(
    sheet.querySelector('#m-name').value,
    sheet.querySelector('#m-username').value,
    sheet.querySelector('#m-password').value,
    sheet.querySelector('#m-role').value
  );
  sheet.appendChild(btn);
  return sheet;
}

function renderAddCategoryModal() {
  const sheet = el('<div class="modal-sheet"></div>');
  sheet.appendChild(modalHeader('Новая категория тестов'));
  sheet.appendChild(el(`<div class="field"><label>Название</label><input type="text" id="m-title" placeholder="Например, Уголовное право"></div>`));
  const btn = el('<button class="btn-primary">Создать</button>');
  btn.onclick = () => addCategorySubmit(sheet.querySelector('#m-title').value);
  sheet.appendChild(btn);
  return sheet;
}

function renderQuestionModal(catId, qIndex) {
  const cat = state.tests.find(c => c.id === catId);
  const existing = (qIndex !== null && qIndex !== undefined) ? cat.questions[qIndex] : null;
  const sheet = el('<div class="modal-sheet"></div>');
  sheet.appendChild(modalHeader(existing ? 'Изменить вопрос' : 'Новый вопрос'));

  sheet.appendChild(el(`<div class="field"><label>Текст вопроса</label><input type="text" id="m-q" placeholder="Введите вопрос"></div>`));
  sheet.querySelector('#m-q').value = existing ? existing.q : '';

  const optsLabel = el('<label style="display:block;font-size:12.5px;font-weight:600;color:var(--text-muted);margin-bottom:6px;">Варианты ответа (отметьте правильный)</label>');
  sheet.appendChild(optsLabel);

  const optsWrap = el('<div id="m-opts"></div>');
  const letters = ['А', 'Б', 'В', 'Г'];
  for (let i = 0; i < 4; i++) {
    const row = el(`<div class="radio-row">
      <input type="radio" name="m-correct" value="${i}">
      <input type="text" id="m-opt-${i}" placeholder="Вариант ${letters[i]}">
    </div>`);
    if (existing) {
      row.querySelector('input[type=text]').value = existing.options[i] || '';
      if (existing.correct === i) row.querySelector('input[type=radio]').checked = true;
    } else if (i === 0) {
      row.querySelector('input[type=radio]').checked = true;
    }
    optsWrap.appendChild(row);
  }
  sheet.appendChild(optsWrap);

  const btn = el(`<button class="btn-primary">${existing ? 'Сохранить изменения' : 'Добавить вопрос'}</button>`);
  btn.onclick = () => {
    const qText = sheet.querySelector('#m-q').value.trim();
    const options = [0,1,2,3].map(i => sheet.querySelector('#m-opt-' + i).value.trim());
    const correctRadio = sheet.querySelector('input[name=m-correct]:checked');
    if (!qText || options.some(o => !o) || !correctRadio) { showToast('Заполните вопрос, все варианты и отметьте правильный'); return; }
    const question = { q: qText, options, correct: parseInt(correctRadio.value, 10) };
    saveQuestion(catId, question, qIndex);
  };
  sheet.appendChild(btn);
  return sheet;
}

/* ---------------------------- Старт ------------------------------------------- */
boot();
