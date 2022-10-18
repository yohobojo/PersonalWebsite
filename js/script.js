const mainContent = document.getElementById('mainContent');
const CVContent = document.getElementById('CVContent');

const homeBtn = document.getElementById('homeBtn');
const CVBtn = document.getElementById('CVBtn');
const CVBtnMobile = document.getElementById('CVBtnMobile');
const projectsBtn = document.getElementById('projectsBtn');

CVBtn.addEventListener('click', () => {
  if (CVContent.classList.contains('hidden')) {
    mainContent.classList.toggle('hidden');
    CVContent.classList.toggle('hidden');
    CVBtn.classList.toggle('text-blue-700');
  }
});
CVBtnMobile.addEventListener('click', () => {
  if (CVContent.classList.contains('hidden')) {
    mainContent.classList.toggle('hidden');
    CVContent.classList.toggle('hidden');
    CVBtn.classList.toggle('text-blue-700');
  }
});
homeBtn.addEventListener('click', () => {
  if (mainContent.classList.contains('hidden')) {
    mainContent.classList.toggle('hidden');
    CVContent.classList.toggle('hidden');
    CVBtn.classList.toggle('text-blue-700');
  }
});

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});
CVBtnMobile.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});
