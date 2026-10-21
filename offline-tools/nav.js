// nav.js
(function () {
  // 自動清理各頁面中舊有的頂部選單佔位節點
  const mount = document.getElementById('header-mount');
  if (mount) {
    mount.remove();
  }
})();

const Utils = {
  async copyText(idOrVal, btn) {
    let t = '';
    const el = document.getElementById(idOrVal);
    t = el ? (el.value !== undefined ? el.value : el.innerText) : idOrVal;
    if (!t) return;

    try {
      await navigator.clipboard.writeText(t);
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '<span>✓ 已複製</span>';
        btn.classList.add('bg-emerald-100', 'text-emerald-700', 'border-emerald-300');
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.classList.remove('bg-emerald-100', 'text-emerald-700', 'border-emerald-300');
        }, 1500);
      }
    } catch (e) {
      if (el && el.select) el.select();
      document.execCommand('copy');
    }
  }
};