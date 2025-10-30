export async function ensureModelViewer() {
  if (typeof window === 'undefined') return;
  if (window.customElements && window.customElements.get('model-viewer')) return;

  await new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-model-viewer]');
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', () => reject(new Error('model-viewer failed to load')), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    script.setAttribute('data-model-viewer', '');
    script.onload = resolve;
    script.onerror = () => reject(new Error('model-viewer failed to load'));
    document.head.appendChild(script);
  });
}

