const DOWNLOAD_URL =
  'https://github.com/sbpanelo-dev/IRM-INSTALLER/releases/download/v0.1.6/ONE-IRM-PRESENTER-0.1.6-Windows-x64-Setup.exe';

const apps = [
  {
    name: 'ONE IRM Presenter',
    version: '0.1.6',
    description:
      'Worship presentation software for songs, Bible verses, media, and church services.',
    platforms: ['Windows'],
    icon: 'logo',
    primary: 'Download',
    download: DOWNLOAD_URL
  }
];

const grid = document.querySelector('#appGrid');
const search = document.querySelector('#search');

function render(list) {
  grid.innerHTML = list.length
    ? list
        .map(
          app => `
            <article class="app-card">
              <div class="app-card-top">
                <div class="app-icon">
                  ${
                    app.icon === 'logo'
                      ? '<img src="assets/one-irm-logo.png" alt="ONE IRM logo">'
                      : app.icon
                  }
                </div>

                <div>
                  <h3>${app.name}</h3>
                  <span class="version">Version ${app.version}</span>
                </div>
              </div>

              <p>${app.description}</p>

              <div class="badges">
                ${app.platforms
                  .map(platform => `<span>${platform}</span>`)
                  .join('')}
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
          `
        )
        .join('')
    : '<p class="empty">No applications match your search.</p>';
}

render(apps);

search.addEventListener('input', event => {
  const query = event.target.value.trim().toLowerCase();

  const results = apps.filter(app =>
    `${app.name} ${app.description} ${app.platforms.join(' ')}`
      .toLowerCase()
      .includes(query)
  );

  render(results);
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
});