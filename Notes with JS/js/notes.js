console.log("Welcome to iNotes App");
showNotes();
// if user adds a Note , add it to a localstorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes();
});
// function to show elements to localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = ""; // display note below the form
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
            <div class="noteCard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                </div>
            </div>
            </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `It Seems to be No Note Added Here!`
    }
}

//funtion to delete Notes

function deleteNote(index) {
    // console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index , 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById("searchText");
search.addEventListener("input" , function(){
    let inputVal = search.value.toLowerCase();
    // console.log("input event firing!" , inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })

})