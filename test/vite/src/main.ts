import './style.css';
import { getFingerprint, getId } from 'fingerprinty';
console.log(getFingerprint());
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Browser Fingerprint</h1>
  <h2>Id: ${getId()}</h2>

  <div class="container">
  ${Object.entries(getFingerprint())
    .map(([key, value]) => {
      return `<div><strong>${key}:</strong> <pre>${JSON.stringify(value, null, 2)}</pre></div>`;
    })
    .join('')}
  </div>
`;
