'use strict';
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get({ color: 'red' }, (item) => {
    const tmp: any = document.getElementById('colors');
    tmp.value = item.color;
  });
});
document.getElementById('save').addEventListener('click', () => {
  let color: any = document.getElementById('colors');
  color = color.value;
  chrome.storage.sync.set({ color },
                          () => {
                            console.log(`saved: ${color}`);
                          });
});
// # sourceMappingURL=options.js.map
