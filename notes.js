const fs=require('fs');

// Reuse code of fetching and adding to previous
var fetch = () => {
	try{						// Check file present or not.......
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch(e){
		return [];
	}
};

var save = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
} ;

//.............................................................Add Note...................................................
var addNote = (title,body) =>{
	var notes = fetch();			
//	var notes =[]               // Array blank to store data from file either empty or not....
	var note = {				// use ES-6 to make a note.....
		title,
		body
	};
/*
	try{						// Check file present or not.......
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	}
	catch(e){
	}
*/	
	var dup = notes.filter((note) => {
		return note.title === title;
	});

	if(dup.length === 0){
	notes.push(note);
	save(notes);
//	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
	console.log("Added");
	}
	else
	{
		console.log("Note with same titile already exists. Plz choose other titile");
	}
	};
//............................##########...............................................................................########
//...................................................Delete a Note............................................................
	var deleteNote =(title) => {
	console.log("Deleting.",title);
	// Fetch notes.............
	var notes=fetch();	
	// Filter notes.............
	var deleted = notes.filter((note) => note.title !== title);
	// Add new............... 
	save(deleted);
	if(notes.length !== deleted.length)
	{
		console.log("Found..Note Removed");
	}
	else
	{
		console.log("Note not Removed");
	}

	};
//.........################################################################################################################
// ..........................................................Get Note.........................................................
	var readNote = (title) => {
	console.log("Reading.",title);
	var notes = fetch();
	var read = notes.filter((note) => {
			return note.title === title;
	});
	if(read[0])
	{
		console.log("Found");
		console.log("Note :");
		console.log(`						Title is ${read[0].title}`); 
		console.log(`						Body is ${read[0].body}`);
	}
	else
	{
		console.log("Note not Found");
	}
	};
//.........................................................List all Notes............................................
	var getAll = () => {
	console.log("Listing all prsent Notes");
	var list = fetch();
	console.log("No of notes are...",list.length);
	for(i=0;i<list.length;i++)
	{
		console.log(i+1,"Note is");
		console.log(list[i].title);
		console.log(list[i].body);

	}
};
module.exports = {
	addNote,
	getAll,
	deleteNote,
	readNote
};


