/** Ícones inline (SVG). Sem biblioteca externa: zero requisição, zero JS. */

const svg = (d, extra = '') =>
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;

export const ICONES = {
  sol: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  predio: svg('<path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 9h5a1 1 0 0 1 1 1v11M8 8h2M8 12h2M8 16h2M16 13h1M16 17h1"/>'),
  divisao: svg('<path d="M12 3v18M5 8h4M5 16h4M15 8h4M15 16h4"/><circle cx="12" cy="12" r="1.6"/>'),
  selo: svg('<path d="M12 2l2.4 2.1 3.1-.5 1.1 3 2.8 1.4-1.2 2.9 1.2 2.9-2.8 1.4-1.1 3-3.1-.5L12 20l-2.4-2.1-3.1.5-1.1-3-2.8-1.4L3.8 11 2.6 8.1l2.8-1.4 1.1-3 3.1.5z"/><path d="M9.5 11.5l1.8 1.8 3.4-3.4"/>'),
  lupa: svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
  alerta: svg('<path d="M12 3.5L2.8 19.5a1 1 0 0 0 .87 1.5h16.66a1 1 0 0 0 .87-1.5z"/><path d="M12 9v5M12 17.5h.01"/>'),
  pessoa: svg('<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>'),
  relogio: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 1.9"/>'),
  fatura: svg('<path d="M6 2h12a1 1 0 0 1 1 1v18l-3-2-3 2-3-2-3 2V3a1 1 0 0 1 1-1z"/><path d="M9 7h6M9 11h6M9 15h3"/>'),
  raio: svg('<path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12z"/>'),
  medidor: svg('<circle cx="12" cy="12" r="9"/><path d="M12 12l4-3"/><path d="M7.5 16.5h9"/><path d="M12 5v1.5"/>'),
  cartao: svg('<rect x="2.5" y="5" width="19" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M5.2 16.2a3.6 3.6 0 0 1 6.6 0M14.5 10h4M14.5 13.5h4"/>'),
  predios: svg('<path d="M3 21h18M4 21V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14M14 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10M7 9h1M7 12h1M7 15h1M16.5 13.5h1M16.5 16.5h1"/>'),
  tendencia: svg('<path d="M3 20h18"/><path d="M5 16l4.5-5 3.5 3 5.5-7"/><path d="M15 7h4v4"/>'),
  carregador: svg('<rect x="3" y="3" width="10" height="18" rx="1.6"/><path d="M3 8h10"/><path d="M6.4 12.2h3.2l-2 3.4h3.2"/><path d="M13 11h3.5a1.5 1.5 0 0 1 1.5 1.5V17a1.6 1.6 0 0 0 3.2 0V9.4l-2.2-2.2"/><path d="M2 21h12"/>'),
  escudo: svg('<path d="M12 2.5l7.5 3v6c0 4.6-3.1 8.7-7.5 10-4.4-1.3-7.5-5.4-7.5-10v-6z"/><path d="M9.2 11.8l1.9 1.9 3.7-3.7"/>'),
};

export const CHECK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>`;

export const CHECK_CLARO = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AD629" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>`;

export const ZAP = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.13c-.25.69-1.45 1.32-2 1.4-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07s.77-2.18 1.04-2.48c.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.6.84 2.06.91 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.07.12.07.72-.18 1.41z"/></svg>`;
