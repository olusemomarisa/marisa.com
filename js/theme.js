(function(){
  const key = 'theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem(key);
  if(saved){ root.setAttribute('data-theme', saved); }
  function toggle(){
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if(next === 'light'){ root.removeAttribute('data-theme'); localStorage.removeItem(key); }
    else { root.setAttribute('data-theme', 'dark'); localStorage.setItem(key, 'dark'); }
  }
  if(btn){ btn.addEventListener('click', toggle); }
})();
