export function initTerminal() {
  const input    = document.getElementById('terminal-input');
  const output   = document.getElementById('terminal-output');
  const toggleBtn = document.getElementById('terminal-toggle-btn');
  const container = document.getElementById('hud-terminal');
  const mainPanel = document.querySelector('.hud-panel-container');

  if (!input || !output) return;

  const commands = {
    help: () => `Available commands:\n  whoami     — display operator profile\n  skills     — list skill matrix\n  projects   — list security projects\n  certs      — list certifications\n  contact    — show contact info\n  clear      — clear terminal\n  nmap       — run mock port scan\n  status     — system status`,
    whoami:   () => `Operator: Shubham Sharma\nDegree:   B.Tech CSE — Cybersecurity & Digital Forensics\nUniversity: VIT Bhopal University\nFocus:    Penetration Testing | IoT Security | Digital Forensics\nStatus:   Open to Internships`,
    skills:   () => `[SEC] Kali Linux | Burp Suite | Metasploit | Nmap | Wireshark | SQLmap | Gobuster\n[DEV] Python | Java | SQL | Bash | HTML/CSS | JavaScript\n[DOM] Web App Pentesting | Network Security | IoT Security | Digital Forensics`,
    projects: () => `[01] BruteForceLab — Brute force simulation framework\n     Contribution: GUI Development & System Integration\n[02] VITGuard     — 6-Layer IoT Security Monitoring System\n     Contribution: Victim App Simulation + Security Engine`,
    certs:    () => `[THM] TryHackMe Labs                    — Active\n[GCP] Google Cybersecurity Certificate  — Completed\n[CY1] Foundations of Cybersecurity      — Completed\n[NET] Bits and Bytes of Networking      — Completed\n[MDB] MongoDB Developer                 — Completed\n[eJPT] eJPT / CEH Training             — In Progress`,
    contact:  () => `Email:    shubham2chaipa1102@gmail.com\nGitHub:   github.com/shubham24bcy10391-ux\nLinkedIn: linkedin.com/in/shubham-sharma-513230325\nWhatsApp: +91 7891464270`,
    clear:    () => { output.innerHTML = ''; return null; },
    nmap:     () => {
      setTimeout(() => addOut('PORT     STATE  SERVICE  VERSION'), 300);
      setTimeout(() => addOut('22/tcp   open   ssh      OpenSSH 8.9'), 600);
      setTimeout(() => addOut('80/tcp   open   http     nginx 1.18'), 900);
      setTimeout(() => addOut('443/tcp  open   https    nginx 1.18'), 1200);
      setTimeout(() => addOut('3306/tcp open   mysql    MySQL 8.0'), 1500);
      setTimeout(() => addOut('[DONE] Scan complete. 4 services discovered.'), 1800);
      return '> Starting Nmap scan on target 192.168.1.1...';
    },
    status: () => `SYS_STATUS:    ONLINE\nTHREAT_LEVEL:  MINIMAL\nFIREWALL:      ACTIVE\nIDS:           ARMED\nUPTIME:        ${Math.floor(Math.random()*999)} hours\nOPERATOR:      AUTHENTICATED`,
  };

  function addOut(text, color = '') {
    const div = document.createElement('div');
    div.textContent = text;
    if (color) div.style.color = color;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.value.trim().toLowerCase();
    if (!cmd) return;
    addOut(`guest@shubham.sec:~$ ${cmd}`, '#00ffc4');
    const fn = commands[cmd];
    if (fn) {
      const result = fn();
      if (result) result.split('\n').forEach(line => addOut(line));
    } else {
      addOut(`bash: ${cmd}: command not found. Type 'help' for available commands.`, '#ff3366');
    }
    input.value = '';
  });

  // Toggle minimize
  if (toggleBtn && container && mainPanel) {
    toggleBtn.addEventListener('click', () => {
      container.classList.toggle('minimized');
      mainPanel.classList.toggle('terminal-minimized');
      toggleBtn.textContent = container.classList.contains('minimized') ? '□ EXPAND' : '_ MINIMIZE';
    });
  }
}
