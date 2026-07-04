(function () {
  const nav = document.getElementById('sectionNav');
  const main = document.getElementById('main');

  function render(id) {
    const section = SECTIONS.find((s) => s.id === id) || SECTIONS[0];
    main.innerHTML = `<section class="view active">${section.render()}</section>`;
    [...nav.children].forEach((btn) => btn.classList.toggle('active', btn.dataset.id === section.id));
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    location.hash = section.id;
  }

  SECTIONS.forEach((s) => {
    const btn = document.createElement('button');
    btn.textContent = s.label;
    btn.dataset.id = s.id;
    btn.addEventListener('click', () => render(s.id));
    nav.appendChild(btn);
  });

  const startId = (location.hash || '').replace('#', '') || SECTIONS[0].id;
  render(SECTIONS.some((s) => s.id === startId) ? startId : SECTIONS[0].id);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
})();
