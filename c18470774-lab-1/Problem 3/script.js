

document.getElementById("add").addEventListener("click", add);

//This function is where I add notes
//At the start of my code i added an event ;istener and thats
//what i use to make this function
function add(evt) {

    //console.log("Hello World!");

    // this prevent method prevents the form
    //from being submited when the Submit button is pressed on my form
    evt.preventDefault()

    //This is where i create my dic div div tag
    //and add a class called note-container
    //this note-container is where i store the users title and body
    //which they submit throught the form
    let divTag = document.createElement('div');
    divTag.classList.add('note-container');

    //here is were i store the elements entered into the form by the user
    //and place them in variables
    let note_title = document.getElementById('title').value;
    let note_body = document.getElementById('note').value;

    //I reset the form to be blank again
    document.getElementById('title').value = "";
    document.getElementById('note').value = "";

    //This is where I use innerhtml to create a new note which gets stored in my
    //'notes' container after
    //I also set up my delete button here which i use later
    divTag.innerHTML =  '<div class = "note-content">' +
                            '<h2 class = "note-title">'+ note_title +'</h2>' +
                            '<p class = "note-body">'+ note_body +'</p>' +
                            '<button class="note_delete" onclick="note_delete(this)">Delete Note</button>' +
                            '<button class="note_edit" onclick="note_edit(this)">Edit Note</button>' +
                            '</div>';



    //This is where i add the new note into my 'notes' container
    let divContainer = document.getElementById('notes');
    divContainer.appendChild(divTag);
  }



  //***************************************************************************************************************
  //***************************************************************************************************************

  //Delete Function
  //this is where i use the delete button i set up in the add notes Function
  //to delete notes
  function note_delete(delete_button){

    //node counter
    let counter = delete_button;

    //this while loop, loops up the parent nodes until it reachs note content
    //this basically means it deletes everything in the note container until it reaches
    //the end of the nte
    while(counter.className != "note-container"){
        counter = counter.parentNode;
    }

    //This is where we remove the entire node
    counter.remove();



  }

  //***************************************************************************************************************
  //***************************************************************************************************************

  //Edit note
  //This is my edit function where i allow users to edit notes
  function note_edit(edit_button) {

    // I create const content where  i store all the content of the
    // current note
    const content = edit_button.closest(".note-content");

    //I then query the content variable and seperate the title from
    //the content as i will be using these two new const to fill in my
    //form so the user can actually edit there note and they wont
    //have to write a new one
    const note_title = content.querySelector('.note-title').textContent;
    const note_body = content.querySelector('.note-body').textContent;


    content.innerHTML = '<label for="title">Title' +
                            '<textarea type="text" class="edit-note-title" cols="30" rows="1">' + note_title + '</textarea>' +
                            '</label>' +
                            '<br>' +
                            '<label for="note-body">Note' +
                            '<textarea type="text" class="edit-note-body" cols="40" rows="12">' + note_body + '</textarea>' +
                            '</label>' +
                            '<button class="note_save" onclick="note_save(this)">Save Changes</button>';

   }


   //This function uses the save button i created in the function above
  function note_save(save_button){

    //Saving all of the title and body of the current note
    // into a const called content
    const content = save_button.parentNode;

    //Querying the conent const to split it into to two
    //knew const. this is so i can split the title and body of the note
    const note_title = content.querySelector('.edit-note-title').value;
    const note_body = content.querySelector('.edit-note-body').value;

    content.innerHTML = '<div class = "note-content">' +
                            '<h2 class = "note-title">'+ note_title +'</h2>' +
                            '<p class = "note-body">'+ note_body +'</p>' +
                            '<button class="note_delete" onclick="note_delete(this)">Delete Note</button>' +
                            '<button class="note_edit" onclick="note_edit(this)">Edit Note</button>' +
                            '</div>';

  }
