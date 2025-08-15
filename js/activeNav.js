// Active link highlight based on location or sections (works for single pages and subpages)
(function(){
  const links = Array.from(document.querySelectorAll('nav .scroll a[href]'));
  // Highlight by pathname for multi-page
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if(!href) return;
    const isActive = (href === path) || (path === 'index.html' && href === 'index.html');
    if(isActive){ a.parentElement && a.parentElement.classList.add('selected'); }
  });

  // IntersectionObserver for single-page sections (if any)
  const sections = document.querySelectorAll('section[id]');
  if(!('IntersectionObserver' in window) || sections.length === 0) return;
  const byId = id => links.find(a => a.getAttribute('href') === `#${id}`);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const a = byId(entry.target.id);
      if(!a) return;
      const li = a.parentElement;
      if(entry.isIntersecting){ li && li.classList.add('selected'); }
      else { li && li.classList.remove('selected'); }
    });
  }, { rootMargin: '-50% 0px -40% 0px', threshold: [0, 0.25, 0.6, 1] });
  sections.forEach(s => obs.observe(s));
})();
