// ── CURSOR ──────────────────────────────────────────────
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
(function animRing() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
})();

// ── CANVAS PARTICLES ────────────────────────────────────
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.4 + 0.1;
    const hues = [220, 260, 190];
    this.hue = hues[Math.floor(Math.random()*hues.length)];
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if(this.x<0||this.x>W||this.y<0||this.y>H) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${this.hue},80%,70%,${this.alpha})`;
    ctx.fill();
  }
}

for(let i=0;i<100;i++) particles.push(new Particle());

function connectParticles() {
  for(let i=0;i<particles.length;i++) {
    for(let j=i+1;j<particles.length;j++) {
      const dx = particles[i].x-particles[j].x;
      const dy = particles[i].y-particles[j].y;
      const d = Math.sqrt(dx*dx+dy*dy);
      if(d < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(99,130,246,${0.06*(1-d/100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animCanvas() {
  ctx.clearRect(0,0,W,H);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animCanvas);
}
animCanvas();

// ── PROGRESS BAR ────────────────────────────────────────
const pb = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  pb.style.width = pct + '%';
});

// ── NAV SCROLL ──────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── NAV ACTIVE ──────────────────────────────────────────
const secs = document.querySelectorAll('section[id]');
const nls = document.querySelectorAll('.nav-links a');
const io2 = new IntersectionObserver(es => {
  es.forEach(e => {
    if(e.isIntersecting) {
      nls.forEach(a => a.classList.remove('active'));
      const l = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if(l) l.classList.add('active');
    }
  });
}, { threshold: 0.4 });
secs.forEach(s => io2.observe(s));

// ── BURGER ──────────────────────────────────────────────
const burger = document.getElementById('burger');
const mobMenu = document.getElementById('mob-menu');
burger.addEventListener('click', () => {
  mobMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(a => {
  a.addEventListener('click', () => mobMenu.classList.remove('open'));
});

// ── THEME ───────────────────────────────────────────────
const themeBtn = document.getElementById('theme-btn');
let dark = true;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '🌙' : '☀️';
});

// ── TYPED ANIMATION ─────────────────────────────────────
const phrases = [
  'Frontend Developer',
  'React.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'CS Graduate 2026'
];
let pi = 0, ci = 0, del = false;
const typedEl = document.getElementById('typed');

function typeLoop() {
  const cur = phrases[pi];
  if(!del) {
    typedEl.textContent = cur.slice(0, ++ci);
    if(ci === cur.length) { del = true; setTimeout(typeLoop, 1600); return; }
    setTimeout(typeLoop, 75);
  } else {
    typedEl.textContent = cur.slice(0, --ci);
    if(ci === 0) { del = false; pi = (pi+1) % phrases.length; setTimeout(typeLoop, 300); return; }
    setTimeout(typeLoop, 40);
  }
}
typeLoop();

// ── REVEAL ANIMATIONS ───────────────────────────────────
const revObs = new IntersectionObserver(es => {
  es.forEach((e, i) => {
    if(e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), i * 100);
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('[data-reveal], [data-reveal="left"], [data-reveal="right"]')
  .forEach(el => revObs.observe(el));

// ── SKILL BARS ──────────────────────────────────────────
const sbObs = new IntersectionObserver(es => {
  es.forEach(e => {
    if(e.isIntersecting) {
      e.target.querySelectorAll('.sb-fill').forEach(f => {
        f.style.width = f.getAttribute('data-w') + '%';
      });
      sbObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
const sbars = document.getElementById('sbars');
if(sbars) sbObs.observe(sbars);

// ── COUNTER ─────────────────────────────────────────────
function countUp(el, target) {
  let cur = 0;
  const step = target / 50;
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = Math.round(cur);
    if(cur >= target) clearInterval(timer);
  }, 25);
}
const cntObs = new IntersectionObserver(es => {
  es.forEach(e => {
    if(e.isIntersecting) {
      e.target.querySelectorAll('.counter').forEach(el => countUp(el, parseInt(el.getAttribute('data-t'))));
      cntObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.about-cards').forEach(el => cntObs.observe(el));

// ── PROJECT FILTERS ─────────────────────────────────────
document.querySelectorAll('.filt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-f');
    document.querySelectorAll('.pcard').forEach(c => {
      const cat = c.getAttribute('data-cat') || '';
      const show = f === 'all' || cat.includes(f);
      c.classList.toggle('hidden', !show);
    });
  });
});

// ── CONTACT FORM ────────────────────────────────────────
document.getElementById('cform').addEventListener('submit', e => {
  e.preventDefault();
  const btn = document.getElementById('fsub');
  const txt = document.getElementById('fbtxt');
  btn.disabled = true;
  txt.textContent = 'Sending...';
  setTimeout(() => {
    btn.disabled = false;
    txt.textContent = 'Send Message →';
    document.getElementById('fsuc').classList.add('show');
    document.getElementById('cform').reset();
  }, 1500);
});
