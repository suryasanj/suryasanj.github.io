import { loadAside } from './aside.js';

function initAsideLogic() {
  const sidebar          = document.getElementById('sidebar');
  const sidebarToggle    = document.getElementById('sidebar-toggle');
  const sidebarText      = document.querySelectorAll('.sidebar-text');
  const dropdownToggle   = document.querySelectorAll('.dropdown-toggle');
  const sidebarToggleSvg = document.getElementById('sidebar-svg');

	const collapsedSVG = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"> <path fill-rule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" /> </svg> `;

	const expandedSVG = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"> <path fill-rule="evenodd" d="M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z" clip-rule="evenodd" /> </svg> `;

  let collapsed = false;

  dropdownToggle.forEach(el => {
    el.addEventListener('click', () => {
      const parent = el.parentElement.parentElement;
      const list   = parent.querySelector('.dropdown-list');
      if (list.classList.contains('hidden')) {
        el.classList.add('rotate-270'); el.classList.remove('text-blue-500');
        list.classList.remove('hidden');
        parent.classList.add('border-2','border-blue-200/25','rounded-xl','bg-slate-200/25');
        if (sidebar.classList.contains('w-32')) {
          sidebar.classList.remove('w-32');
          sidebar.classList.add('w-[13.5rem]'); // Tailwind: arbitrary value; replace w-54
          sidebarText.forEach(t => t.classList.remove('hidden'));
          sidebarToggle.innerHTML = expandedSVG;
        }
      } else {
        el.classList.remove('rotate-270'); el.classList.add('text-blue-500');
        list.classList.add('hidden');
        parent.classList.remove('border-2','border-blue-200/25','rounded-xl','bg-slate-200/25');
      }
    });
  });

  sidebarToggle.addEventListener('click', () => {
    collapsed = !collapsed;
    if (collapsed) {
      sidebar.classList.remove('w-[13.5rem]'); sidebar.classList.add('w-32');
      sidebarText.forEach(t => t.classList.add('hidden'));
      sidebarToggle.innerHTML = collapsedSVG;
      dropdownToggle.forEach(el => {
        const parent = el.parentElement.parentElement;
        const list   = parent.querySelector('.dropdown-list');
        if (!list.classList.contains('hidden')) {
          el.classList.remove('rotate-270'); el.classList.add('text-blue-500');
          list.classList.add('hidden');
          parent.classList.remove('border-2','border-blue-200/25','rounded-xl','bg-slate-200/25');
        }
      });
    } else {
      sidebar.classList.remove('w-32'); sidebar.classList.add('w-[13.5rem]');
      sidebarText.forEach(t => t.classList.remove('hidden'));
      sidebarToggle.innerHTML = expandedSVG;
    }
  });

  // ToC
  const h2s = document.getElementsByTagName('h2');
  const toc = document.getElementById('toc');
  for (let i = 0; i < h2s.length; i++) {
    const h2 = h2s[i];
    if (!h2.id) h2.id = `h2-${i}`;
    toc.insertAdjacentHTML('beforeend', `<li class="truncate"><a href="#${h2.id}">${h2.textContent}</a></li>`);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  await loadAside();
  initAsideLogic();
});

