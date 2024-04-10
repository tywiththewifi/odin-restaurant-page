import './styles.css';

import { buildHome } from './home';
import { buildMenu } from './menu';
import { buildContact } from './contact';

const homeButton = document.getElementById('home_button');
const menuButton = document.getElementById('menu_button');
const contactButton = document.getElementById('contact_button');

homeButton.addEventListener('click', function() {

    displayPage(buildHome);

});

menuButton.addEventListener('click', function() {

    displayPage(buildMenu);

});

contactButton.addEventListener('click', function() {

    displayPage(buildContact);

});


function displayPage(pageBuilder) {
    clearPage();
    pageBuilder();
}

function clearPage() {
    const display = document.getElementById('content');

    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

buildHome();