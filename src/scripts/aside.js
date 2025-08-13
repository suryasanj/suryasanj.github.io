export async function loadAside() {
  const res = await fetch('./src/snippets/aside.html');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  document.getElementById('aside-placeholder').innerHTML = await res.text();
}

