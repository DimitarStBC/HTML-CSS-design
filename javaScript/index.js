'use strict'

window.addEventListener('DOMContentLoaded', init);

function render(innerHTML) {
    let content = document.getElementById('content');
    content.innerHTML = innerHTML;
}


function init() {
    document.getElementById('allP').classList.add('currentLink');
    render(allProjects());
    document.getElementById('allP').addEventListener('click', openAll);
    document.getElementById('webP').addEventListener('click', openWeb);
    document.getElementById('logoP').addEventListener('click', openLogo);
    document.getElementById('graphicP').addEventListener('click', openGraphic);
    document.getElementById('uxP').addEventListener('click', openUx);
}


function openAll() {
    document.getElementById('allP').classList.add('currentLink');
    document.getElementById('webP').classList.remove('currentLink');
    document.getElementById('logoP').classList.remove('currentLink');
    document.getElementById('graphicP').classList.remove('currentLink');
    document.getElementById('uxP').classList.remove('currentLink');
    render(allProjects());
}
function openWeb() {
    document.getElementById('allP').classList.remove('currentLink');
    document.getElementById('webP').classList.add('currentLink');
    document.getElementById('logoP').classList.remove('currentLink');
    document.getElementById('graphicP').classList.remove('currentLink');
    document.getElementById('uxP').classList.remove('currentLink');
    render(webProjects());
}
function openLogo() {
    document.getElementById('allP').classList.remove('currentLink');
    document.getElementById('webP').classList.remove('currentLink');
    document.getElementById('logoP').classList.add('currentLink');
    document.getElementById('graphicP').classList.remove('currentLink');
    document.getElementById('uxP').classList.remove('currentLink');
    render(logoProjects());
}
function openGraphic() {
    document.getElementById('allP').classList.remove('currentLink');
    document.getElementById('webP').classList.remove('currentLink');
    document.getElementById('logoP').classList.remove('currentLink');
    document.getElementById('graphicP').classList.add('currentLink');
    document.getElementById('uxP').classList.remove('currentLink');
    render(graphicProjects());
}
function openUx() {
    document.getElementById('allP').classList.remove('currentLink');
    document.getElementById('webP').classList.remove('currentLink');
    document.getElementById('logoP').classList.remove('currentLink');
    document.getElementById('graphicP').classList.remove('currentLink');
    document.getElementById('uxP').classList.add('currentLink');
    render(uxProjects());
}