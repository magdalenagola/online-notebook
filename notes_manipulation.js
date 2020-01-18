function main() {
    // event handlers and other code here

    document.getElementById("add__note__button").addEventListener('click', addNewNote);
}

function addNewNote() {
    const empty_note = `
    <li class="note">
    <div class="note__content-wrapper">
        <form class="note__title" method="GET">
            <span class="note__title">
                <label for="note__title"></label>
                <input type="text" name="note__title" placeholder="Note title" />
                <br />
            </span>
        </form>
        <form class="note_text" method="GET">
            <span class="note_text">
                <label for="note_text"></label>
                <p><textarea placeholder="Write a note here" rows="15" cols="30"
                        name="note_text"></textarea></p>
                <br />
            </span>
        </form>
        <span class="delete_note"></span>
        <div>
    </li>`;

    document.getElementsByClassName("notes__wrapper")[0].insertAdjacentHTML('beforeend', empty_note);
}

main();