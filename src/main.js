import './style.css';
import { initThreeScene } from './threeScene.js';
import { initTerminal } from './terminal.js';
import { initVitGuard } from './vitguard.js';
import { initBruteForce } from './bruteforce.js';

// ── Boot sequence ──────────────────────────────────────────────
const bootLogs = [
  '> INITIATING AETHERSEC CORE BOOT...',
  '> Loading kernel security modules...',
  '> Mounting encrypted filesystem [AES-256]...',
  '> Initializing network interface eth0...',
  '> Binding firewall rules [iptables]...',
  '> Starting intrusion detection daemon...',
  '> Loading threat intelligence feeds...',
  '> Connecting to MQTT broker...',
  '> Authenticating operator credentials...',
  '> Decrypting user profile [SHUBHAM.SEC]...',
  '> Calibrating HUD holographic layer...',
  '> Loading skill matrices...',
  '> Syncing certification logs...',
  '> All systems nominal. Welcome, Operator.',
  '> AETHERSEC HUD v1.0.8 — ONLINE',
];

const bootLogBox = document.getElementById('boot-logs');
const bootBar    = document.getElementById('boot-bar');
const bootPct    = document.getElementById('boot-percent');
const bootLoader = document.getElementById('boot-loader');
const hudLayer   = document.getElementById('hud-container');

let logIndex = 0;
const interval = setInterval(() => {
  if (logIndex < bootLogs.length) {
    const div = document.createElement('div');
    div.textContent = bootLogs[logIndex];
    div.style.color = bootLogs[logIndex].includes('ONLINE') || bootLogs[logIndex].includes('nominal') ? '#00ffc4' : '';
    bootLogBox.appendChild(div);
    bootLogBox.scrollTop = bootLogBox.scrollHeight;
    const pct = Math.round(((logIndex + 1) / bootLogs.length) * 100);
    bootBar.style.width = pct + '%';
    bootPct.textContent = pct + '%';
    logIndex++;
  } else {
    clearInterval(interval);
    setTimeout(() => {
      bootLoader.classList.add('fade-out');
      setTimeout(() => {
        bootLoader.style.display = 'none';
        hudLayer.classList.remove('hidden');
        initHUD();
      }, 800);
    }, 600);
  }
}, 120);

// ── HUD Init ───────────────────────────────────────────────────
function initHUD() {
  initThreeScene();
  initTerminal();
  initVitGuard();
  initBruteForce();
  initNavigation();
  initSkills();
  initClock();
  initBinaryStream();
  initAudio();
  initProgressBars();
  initContactForm();
}

// ── Navigation ─────────────────────────────────────────────────
function initNavigation() {
  const navBtns  = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.hud-section');
  const hudTime  = document.getElementById('hud-time');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById('sect-' + btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });
}

// ── Live Clock ─────────────────────────────────────────────────
function initClock() {
  const el = document.getElementById('hud-time');
  const tick = () => {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('en-US', { hour12: false });
  };
  tick();
  setInterval(tick, 1000);
}

// ── Binary Stream ──────────────────────────────────────────────
function initBinaryStream() {
  const el = document.getElementById('binary-stream');
  if (!el) return;
  const chars = '01';
  const tick = () => {
    let out = '';
    for (let i = 0; i < 200; i++) {
      out += Math.random() > 0.5 ? '1' : '0';
      if ((i + 1) % 40 === 0) out += '\n';
    }
    el.textContent = out;
  };
  tick();
  setInterval(tick, 800);
}

// ── Skills Filter & Inspector ──────────────────────────────────
function initSkills() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');
  const inspector  = document.getElementById('skill-inspector');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      skillCards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? '' : 'none';
      });
    });
  });

  document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      inspector.innerHTML = `<span style="color:#00ffc4">> SKILL_ANALYSIS: </span><span style="color:#fff">${tag.textContent}</span> — ${tag.dataset.desc || 'Security tool in active use.'}`;
    });
    tag.addEventListener('mouseleave', () => {
      inspector.innerHTML = '<span class="inspector-prompt">> HOVER OVER ANY MATRIX NODE TO ANALYZE SKILL METRICS...</span>';
    });
  });

  // Project tabs
  document.querySelectorAll('.proj-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.proj-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.project-screen').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const screen = document.getElementById('proj-' + tab.dataset.project);
      if (screen) screen.classList.add('active');
    });
  });
}

// ── Progress Bars ──────────────────────────────────────────────
function initProgressBars() {
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
      const target = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => { bar.style.width = target; }, 200);
    });
  }, 300);
}

// ── Audio Toggle ───────────────────────────────────────────────
function initAudio() {
  const btn     = document.getElementById('sound-toggle');
  const iconOff = btn.querySelector('.icon-sound-off');
  const iconOn  = btn.querySelector('.icon-sound-on');
  const label   = btn.querySelector('.btn-text');
  let enabled   = false;

  btn.addEventListener('click', () => {
    enabled = !enabled;
    iconOff.classList.toggle('hidden', enabled);
    iconOn.classList.toggle('hidden', !enabled);
    label.textContent = enabled ? 'AUDIO ON' : 'AUDIO OFF';
  });
}

// ── Contact Form ───────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  const log  = document.getElementById('contact-transmission-log');
  if (!form || !log) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('form-name').value;
    const email   = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;

    addLog(log, `[TX] Packet initialized from: ${name}`);
    addLog(log, `[TX] Source address: ${email}`);
    addLog(log, `[TX] Payload size: ${message.length} bytes`);
    addLog(log, `[TX] Encrypting with AES-256...`);
    setTimeout(() => addLog(log, `[OK] Transmission complete. Awaiting response.`), 1000);

    // Open email client
    window.location.href = `mailto:shubham2chaipa1102@gmail.com?subject=Portfolio Contact from ${name}&body=${message}`;
  });
}

export function addLog(container, message, color = '') {
  const div = document.createElement('div');
  div.textContent = message;
  if (color) div.style.color = color;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}
