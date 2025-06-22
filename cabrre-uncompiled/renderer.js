// renderer.js
window.addEventListener('DOMContentLoaded', () => {
  document.body.style.background = `url('${__dirname}/build/background.jpg') center/cover no‑repeat`;

  const data = window.electronAPI.readWorkbook('data.xlsx');
  const [labels, ...rows] = data;

  const ctx = document.getElementById('chart').getContext('2d');
  new window.electronAPI.Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: rows.map((r, i) => ({
        label: `Row ${i+1}`,
        data: r,
        borderColor: `hsl(${(i*40)%360}, 70%, 50%)`,
        fill: false
      }))
    }
  });
});
