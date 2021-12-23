function loadScript(path, callback) {
  const script = document.createElement('script');

  script.type = "text/javascript";
  script.src = path;
  script.onload = callback;

  document.body.appendChild(script);
}