console.log("Welcome to pocket notes app.this is app.js");
shownotes();

//if user adds a note,add it to the localstrage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addTxt.value = "";
  //console.log(notesobj);
  shownotes();
});
//function to show elements from localstorage
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="notescard my-2 mx-2 card" style ="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text"> ${element + 1} </p>
      <button id="${index}"onclick="deletenotes(this.id)" class="btn btn-primary">Delete notes</button>
    
  </div>
</div> `;
  });
  let noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `Nothing to show !Use "Add a Note" section above to add notes.`;
  }
}

//function to delete note
//this.id = work below function
function deletenotes(index) {
  // console.log(" I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  //console.log("input event fired!", inputVal);
  let notescard = document.getElementsByClassName("notescard");
  Array.from(notescard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    //console.log(cardTxt);
  });
});

/*
 new features:
1.add DataTransferItemList
2.mark a note as important
*/
