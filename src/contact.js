import { newHeader, newParagraph } from "./pageBuilder";

function buildContact() {
    newHeader('Conatct Us');
    newParagraph('For inquiries or reservations, please do not reach out to us.');
    newParagraph('If you must insist, you can find us at:');
    newParagraph('________________');
};

// 

export {
    buildContact
}