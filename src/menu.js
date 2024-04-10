import { newHeader, newParagraph } from "./pageBuilder";

function buildMenu() {
    newHeader('Menu');
    newParagraph('Item 1');
    newParagraph('Item 2');
    newParagraph('Item 3');
    newParagraph('Item 4');
    newParagraph('Item 5');
}

// 

export {
    buildMenu
}