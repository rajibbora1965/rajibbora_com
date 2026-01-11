/**
 * Simple client-side access gate.
 * NOTE: This is for deterrence only, not secure access control.
 * 
 * To rotate the passcode, update the PASSCODE constant below.
 */
const PASSCODE = "icdt-ops-2026";

document.addEventListener('DOMContentLoaded', () => {
  const gate = document.getElementById('gate');
  const content = document.getElementById('content');
  const form = document.getElementById('gate-form');
  const input = document.getElementById('passcode-input');
  const errorMsg = document.getElementById('error-msg');

  // Check session storage to see if already unlocked in this session
  if (sessionStorage.getItem('icdt_access_granted') === 'true') {
    unlock();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    
    if (val === PASSCODE) {
      unlock();
    } else {
      errorMsg.style.display = 'block';
      input.value = '';
      input.focus();
    }
  });

  function unlock() {
    gate.style.display = 'none';
    content.style.display = 'block';
    sessionStorage.setItem('icdt_access_granted', 'true');
  }
});
