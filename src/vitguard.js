import { addLog } from './main.js';

export function initVitGuard() {
  const logBox   = document.getElementById('vitguard-logs');
  const injectBtn = document.getElementById('btn-inject-threat');
  const toggleBtn = document.getElementById('btn-toggle-ids');
  const idsStatus = document.getElementById('vitguard-ids-status');
  const targetSel = document.getElementById('vitguard-target');

  if (!logBox || !injectBtn) return;

  let idsArmed = true;

  const nodeMap = {
    lock:   { el: document.getElementById('node-lock'),   line: document.getElementById('line-lock'),   name: 'SmartLock_Node'   },
    cam:    { el: document.getElementById('node-cam'),    line: document.getElementById('line-cam'),    name: 'IP_Camera_Node'   },
    sensor: { el: document.getElementById('node-sensor'), line: document.getElementById('line-sensor'), name: 'ThermalSensor'    },
  };

  function log(msg, color = '') { addLog(logBox, msg, color); }

  injectBtn.addEventListener('click', () => {
    const target = targetSel.value;
    const node   = nodeMap[target];
    if (!node || !node.el) return;

    log(`[ATTACK] Injecting exploit payload to ${node.name}...`, '#ff3366');
    node.el.classList.add('active-threat');
    if (node.line) node.line.setAttribute('stroke', 'rgba(255,51,102,0.7)');

    spawnPacket(node.el);

    if (idsArmed) {
      setTimeout(() => {
        log(`[IDS]    Anomaly detected on ${node.name}!`, '#ffcc00');
        setTimeout(() => {
          log(`[IDS]    Threat neutralized. Node quarantined.`, '#00ffc4');
          node.el.classList.remove('active-threat');
          if (node.line) node.line.setAttribute('stroke', 'rgba(0,255,196,0.3)');
        }, 1500);
      }, 1000);
    } else {
      log(`[WARN]   IDS offline! Exploit executing undetected.`, '#ff3366');
      setTimeout(() => {
        log(`[BREACH] ${node.name} COMPROMISED.`, '#ff3366');
      }, 1200);
    }
  });

  toggleBtn.addEventListener('click', () => {
    idsArmed = !idsArmed;
    idsStatus.textContent = idsArmed ? 'ARMED' : 'DISABLED';
    idsStatus.style.color = idsArmed ? '#00ff66' : '#ff3366';
    log(`[SYS]    IDS Firewall ${idsArmed ? 'ARMED' : 'DISABLED'}.`, idsArmed ? '#00ffc4' : '#ff3366');
  });

  function spawnPacket(targetEl) {
    const container = document.getElementById('packet-container');
    const gateway   = document.getElementById('node-gw');
    if (!container || !gateway || !targetEl) return;

    const gwRect = gateway.getBoundingClientRect();
    const tgRect = targetEl.getBoundingClientRect();
    const crRect = container.getBoundingClientRect();

    const startX = gwRect.left + gwRect.width  / 2 - crRect.left;
    const startY = gwRect.top  + gwRect.height / 2 - crRect.top;
    const endX   = tgRect.left + tgRect.width  / 2 - crRect.left;
    const endY   = tgRect.top  + tgRect.height / 2 - crRect.top;

    const packet = document.createElement('div');
    packet.className = 'exploit-packet';
    packet.style.left = startX + 'px';
    packet.style.top  = startY + 'px';
    container.appendChild(packet);

    const start = performance.now();
    const duration = 800;

    function move(now) {
      const t = Math.min((now - start) / duration, 1);
      packet.style.left = (startX + (endX - startX) * t) + 'px';
      packet.style.top  = (startY + (endY - startY) * t) + 'px';
      if (t < 1) requestAnimationFrame(move);
      else packet.remove();
    }
    requestAnimationFrame(move);
  }
}
