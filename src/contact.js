import { newHeader, newParagraph } from "./pageBuilder";
import { displayPage } from "./index.js";

function buildContact() {
    newHeader('Conatct Us');
    newParagraph('For inquiries or reservations, please do not reach out to us.');
    newParagraph('If you must insist, you can find us at:');
    newParagraph('________________');
}

const contactButton = document.getElementById('conact_button');

contactButton.addEventListener('click', function() {
    displayPage(buildContact);
});

// 

export {
    buildContact
}