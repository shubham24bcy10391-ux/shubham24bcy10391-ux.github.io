import { addLog } from './main.js';

export function initBruteForce() {
  const startBtn   = document.getElementById('btn-start-brute');
  const logBox     = document.getElementById('brute-logs');
  const passwordIn = document.getElementById('brute-password');
  const speedSel   = document.getElementById('brute-speed');
  const vaultStatus = document.getElementById('vault-status');
  const rings      = [
    document.getElementById('ring-1'),
    document.getElementById('ring-2'),
    document.getElementById('ring-3'),
  ];

  if (!startBtn || !logBox) return;

  let running = false;

  function log(msg, color = '') { addLog(logBox, msg, color); }

  function setRingNum(ring, num) {
    if (!ring) return;
    const spans = ring.querySelectorAll('.ring-num');
    spans.forEach((s, i) => {
      s.style.color = i === num ? '#ffffff' : '';
      s.style.textShadow = i === num ? '0 0 8px #00ffc4' : '';
    });
    ring.scrollTop = num * 30;
  }

  startBtn.addEventListener('click', () => {
    if (running) return;
    const target   = passwordIn.value.replace(/\D/g, '').slice(0, 3).padStart(3, '0');
    const speedMul = parseInt(speedSel.value);
    const digits   = target.split('').map(Number);

    if (target.length !== 3) {
      log('[ERROR] Enter a valid 3-digit password.', '#ff3366');
      return;
    }

    running = true;
    startBtn.textContent = 'CRACKING...';
    startBtn.disabled    = true;
    vaultStatus.textContent = 'LOCKED';
    vaultStatus.style.color = '#ff3366';

    rings.forEach(r => r && r.classList.add('spinning'));
    log(`[INIT]  Target lock: ${target}`, '#ffcc00');
    log(`[INIT]  Speed: ${speedMul === 1 ? 'Realistic' : speedMul === 10 ? 'High Speed' : 'Matrix Level'}`);
    log(`[ATCK]  Initiating dictionary key injection...`, '#ff3366');

    let current = 0;
    const max   = 999;
    const delay = speedMul === 1 ? 66 : speedMul === 10 ? 5 : 1;

    const crack = setInterval(() => {
      const d0 = Math.floor(current / 100);
      const d1 = Math.floor((current % 100) / 10);
      const d2 = current % 10;

      setRingNum(rings[0], d0);
      setRingNum(rings[1], d1);
      setRingNum(rings[2], d2);

      if (current % Math.max(1, Math.floor(100 / speedMul)) === 0 || current === parseInt(target)) {
        log(`[KEY]   Trying: ${String(current).padStart(3, '0')}`, current === parseInt(target) ? '#00ff66' : '');
      }

      if (current === parseInt(target)) {
        clearInterval(crack);
        rings.forEach(r => r && r.classList.remove('spinning'));
        rings.forEach(r => r && r.classList.add('cracked'));
        vaultStatus.textContent = 'CRACKED';
        vaultStatus.style.color = '#00ff66';
        log(`[BOOM]  PASSWORD FOUND: ${target}`, '#00ff66');
        log(`[INFO]  ${current + 1} keys attempted.`);
        log(`[WARN]  Use strong passwords! Weak credentials = easy breach.`, '#ffcc00');
        running = false;
        startBtn.textContent = 'RUN_DECRYPTION_ATTACK';
        startBtn.disabled    = false;
        setTimeout(() => rings.forEach(r => r && r.classList.remove('cracked')), 3000);
      } else if (current >= max) {
        clearInterval(crack);
        rings.forEach(r => r && r.classList.remove('spinning'));
        log(`[FAIL]  Target not found in range 000-999.`, '#ff3366');
        running = false;
        startBtn.textContent = 'RUN_DECRYPTION_ATTACK';
        startBtn.disabled    = false;
      }
      current++;
    }, delay);
  });
}
