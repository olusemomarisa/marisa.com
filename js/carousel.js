(function(){
  const track = document.querySelector('.carousel-track');
  if(!track) return;
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  const imgs = track.querySelectorAll('img');
  let index = 0;

  function go(dir){
    index = (index + dir + imgs.length) % imgs.length;
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
  }

  prev && prev.addEventListener('click', ()=>go(-1));
  next && next.addEventListener('click', ()=>go(1));

  // keyboard support
  track.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') go(-1);
    if(e.key === 'ArrowRight') go(1);
  });

  // auto-advance
  let timer = setInterval(()=>go(1), 6000);
  [prev, next, track].forEach(el=>{
    el && el.addEventListener('mouseenter', ()=>clearInterval(timer));
    el && el.addEventListener('mouseleave', ()=> timer = setInterval(()=>go(1), 6000));
  });
})();
