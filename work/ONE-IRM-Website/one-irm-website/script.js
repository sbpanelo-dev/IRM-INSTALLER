const WINDOWS_DOWNLOAD_URL =
  'https://github.com/sbpanelo-dev/IRM-INSTALLER/releases/download/v0.1.6/ONE.IRM.PRESENTER_0.1.6_x64-setup.exe';

const ANDROID_DOWNLOAD_URL =
  'https://github.com/sbpanelo-dev/IRM-INSTALLER/releases/download/oneirm-android-v1.0.13/oneirm.v1.0.13.apk';

const apps = [
  {
    name: 'ONE IRM Presenter',
    version: '0.1.6',
    description:
      'Worship presentation software for displaying songs, Bible verses, media, announcements, and other content during church services.',
    platforms: ['Windows'],
    icon: 'logo',
    primary: 'Download',
    download: WINDOWS_DOWNLOAD_URL
  },
  {
    name: 'ONE IRM Mobile',
    version: '1.0.13',
    description:
      'An online community app for IRM churches that helps members connect, communicate, receive ministry updates, and grow together in faith.',
    platforms: ['Android'],
    icon: 'logo',
    primary: 'Download APK',
    download: ANDROID_DOWNLOAD_URL
  }
];

const grid = document.querySelector('#appGrid');
const search = document.querySelector('#search');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

function createApplicationCard(app) {
  const icon =
    app.icon === 'logo'
      ? `
        <img
          src="assets/one-irm-logo.png"
          alt="${app.name} logo"
        >
      `
      : app.icon;

  const platformBadges = app.platforms
    .map(platform => `<span>${platform}</span>`)
    .join('');

  return `
    <article class="app-card">
      <div class="app-card-top">
        <div class="app-icon">
          ${icon}
        </div>

        <div>
          <h3>${app.name}</h3>
          <span class="version">Version ${app.version}</span>
        </div>
      </div>

      <p>${app.description}</p>

      <div class="badges">
        ${platformBadges}
      </div>

      <div class="card-actions">
        <a
          class="button primary small"
          href="${app.download}"
        >
          ${app.primary}
        </a>

        <button
          class="details"
          type="button"
          disabled
          title="Dedicated application page coming soon"
        >
          View details →
        </button>
      </div>
    </article>
  `;
}

function renderApplications(list) {
  if (!grid) {
    return;
  }

  if (list.length === 0) {
    grid.innerHTML =
      '<p class="empty">No applications match your search.</p>';

    return;
  }

  grid.innerHTML = list
    .map(createApplicationCard)
    .join('');
}

renderApplications(apps);

if (search) {
  search.addEventListener('input', event => {
    const query = event.target.value
      .trim()
      .toLowerCase();

    const filteredApps = apps.filter(app => {
      const searchableText = [
        app.name,
        app.version,
        app.description,
        ...app.platforms
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });

    renderApplications(filteredApps);
  });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    toggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );
  });

  nav.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
}