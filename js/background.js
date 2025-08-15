(function(){
  // Images present in Edited/ folder (subset and safe filenames); can be extended.
  const images = [
    'Edited/Portrait.jpg',
    'Edited/Top-Down-BW.jpg',
    'Edited/upright-smile.jpg',
    'Edited/Blueface.jpg',
    'Edited/Side-eye%20Mawisa.jpg',
    'Edited/BW%20Badass.jpg'
  ];

  // Create global background rotator behind the page
  const rotator = document.createElement('div');
  rotator.className = 'bg-rotator';
  const l1 = document.createElement('div');
  const l2 = document.createElement('div');
  l1.className = 'layer';
  l2.className = 'layer hidden';
  rotator.appendChild(l1); rotator.appendChild(l2);
  document.body.appendChild(rotator);

  let i = 0; let showingFirst = true;
  function setBg(el, src){ el.style.backgroundImage = `url('${src}')`; }
  setBg(l1, images[0]);
  setBg(l2, images[1 % images.length]);

  function swapLayers(){
    i = (i + 1) % images.length;
    const next = images[i];
    if(showingFirst){
      setBg(l2, next); l2.classList.remove('hidden'); l1.classList.add('hidden');
    } else {
      setBg(l1, next); l1.classList.remove('hidden'); l2.classList.add('hidden');
    }
    showingFirst = !showingFirst;
  }
  setInterval(swapLayers, 5000);

  // Hero background rotator (5s fade)
  const hero = document.querySelector('.hero');
  if(hero){
    const h1 = document.createElement('div');
    const h2 = document.createElement('div');
    h1.className = 'bg-layer';
    h2.className = 'bg-layer hidden';
    hero.insertBefore(h2, hero.firstChild);
    hero.insertBefore(h1, hero.firstChild);
    let hi = 0; let first = true;
    const setHero = (el, src)=> el.style.backgroundImage = `url('${src}')`;
    setHero(h1, images[0]);
    setHero(h2, images[1 % images.length]);
    setInterval(()=>{
      hi = (hi + 1) % images.length;
      const next = images[hi];
      if(first){ setHero(h2, next); h2.classList.remove('hidden'); h1.classList.add('hidden'); }
      else { setHero(h1, next); h1.classList.remove('hidden'); h2.classList.add('hidden'); }
      first = !first;
    }, 5000);
  }
})();
