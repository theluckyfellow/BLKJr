const root = document.documentElement;
const gg = 80;
const rr = Math.floor(Math.random() * 4+gg);

const bb = Math.floor(Math.random() * 4+gg);

root.style.setProperty("--color-primary", `rgb(${rr}, ${gg}, ${bb*1.3})`);
root.style.setProperty("--color-secondary", `rgb(${rr*1.8}, ${gg*1.8}, ${bb*1.9})`);
root.style.setProperty("--color-accent", `rgb(${rr*3}, ${gg*3}, ${bb*3})`);
