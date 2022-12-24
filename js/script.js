const mainContent = document.getElementById('mainContent');
const CVContent = document.getElementById('CVContent');
const projectsContent = document.getElementById('projectsContent');

const homeBtn = document.getElementById('homeBtn');
const CVBtn = document.getElementById('CVBtn');
const projectsBtn = document.getElementById('projectsBtn');

CVBtn.addEventListener('click', () => {
  if (CVContent.classList.contains('d-none')) {
    mainContent.classList.add('d-none');
    CVContent.classList.remove('d-none');
    projectsContent.classList.add('d-none');
    homeBtn.classList.remove('active');
    projectsBtn.classList.remove('active');
    CVBtn.classList.add('active');
  }
});
projectsBtn.addEventListener('click', () => {
  if (projectsContent.classList.contains('d-none')) {
    mainContent.classList.add('d-none');
    CVContent.classList.add('d-none');
    projectsContent.classList.remove('d-none');
    homeBtn.classList.remove('active');
    projectsBtn.classList.add('active');
    CVBtn.classList.remove('active');
  }
});
homeBtn.addEventListener('click', () => {
  if (mainContent.classList.contains('d-none')) {
    mainContent.classList.remove('d-none');
    CVContent.classList.add('d-none');
    projectsContent.classList.add('d-none');
    homeBtn.classList.add('active');
    projectsBtn.classList.remove('active');
    CVBtn.classList.remove('active');
  }
});
