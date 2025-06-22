// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const XLSX = require('xlsx');
const Chart = require('chart.js');

contextBridge.exposeInMainWorld('electronAPI', {
  readWorkbook: (path) => {
    const wb = XLSX.readFile(path);
    return XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 });
  },
  Chart
});
