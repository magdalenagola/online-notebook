function main() {
    // event handlers and other code here

    document.getElementById("add__note__button").addEventListener('click', addNewNote);
    addRemoveNoteEventListener();
    window.addEventListener('beforeunload', saveNotes);
    window.addEventListener('onload', restoreNotes);


}

function addNewNote() {
    const empty_note = `
    <li class="note">
        <div class="note__content-wrapper">
            <form class="note__title" method="GET">
                <label for="note__title"></label>
                <input type="text" name="note__title" class="note__title__header" placeholder="Note title" />
                <br />
            </form>
            <form class="note_text" method="GET">
            <label for="note_text"></label>
            <p class="text__area__wrapper"><textarea placeholder="Write a note here" class="note__text__input" rows="15"
                cols="30" name="note_text"></textarea></p>
            <br />
            </form>
        <span class="delete_note"></span>
        </div>
    </li>`;

    document.getElementsByClassName("notes__wrapper")[0].insertAdjacentHTML('beforeend', empty_note);
    addRemoveNoteEventListener();
}

function removeNote() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}


function addRemoveNoteEventListener() {
    let delete_buttons = document.getElementsByClassName("delete_note");
    for (let delete_button of delete_buttons) {
        delete_button.addEventListener('click', removeNote);
    }
}

function saveNotes() {
    let titles = document.getElementsByClassName("note__title__header");
    let notesTitles = [];
    for (let noteTitle of titles) {
        notesTitles.push(noteTitle.value);     
    }

    let texts = document.getElementsByClassName("note__text__input");
    let notesTexts = [];
    for (let noteText of texts) {
        notesTexts.push(noteText.value);     
    }
    let notesContents = {
        'titles': notesTitles,
        "texts": notesTexts
    };
    let jsonNotesContents = JSON.stringify(notesContents);
    localStorage.setItem('notes', jsonNotesContents);
}

function restoreNotes() {
    const jsonTitle = localStorage.getItem('notes');
    const noteTitle = JSON.parse(jsonTitle);
    document.getElementsByClassName("note__title__header")[0].value = noteTitle;

}


main();