// 밝은/어두운 화면 — 고른 값이 없으면 기기 설정을 따라요. <head>에서 먼저 불러야 화면이 깜빡이지 않아요.
(function () {
  var KEY = 'edu-tools-theme', root = document.documentElement;
  try { root.dataset.theme = localStorage.getItem(KEY) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
  catch (e) { root.dataset.theme = 'light'; }
  window.toggleTheme = function () {
    var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = t;
    try { localStorage.setItem(KEY, t); } catch (e) {}
  };
})();
