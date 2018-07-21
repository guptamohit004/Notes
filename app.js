console.log("                                           	My Notes app                    ");

const notes=require('./notes.js');

const yargs=require('yargs');
const argv = yargs
	.options({
		Add:{
			alias : 'add',
			describe :'Command to add New Note',
			string : true
		}})
		.options({
		Remove:{
			alias : 'remove',
			describe :'Command to Delete a Note',
			string : true
		}})
		.options({
		List:{
			alias : 'list',
			describe :'Command to list all the present  Notes',
			string : true
		}})
		.options({
		Read:{
			alias : 'read',
			describe :'Command to Read a  Note',
			string : true
		}})
	.help()
	.alias('help','h')
	.argv;
var input=process.argv[2]; 

console.log("Comand given by User is",input);
// console.log(argv); 

if(input === 'Add')
{
	console.log("Adding....",argv.title,argv.body);
	notes.addNote(argv.title , argv.body);
}
else if(input === 'Delete')
{
	console.log("Deleting");
	notes.deleteNote(argv.title);
}
else if(input=== 'List')
{
	notes.getAll();
}
else if(input ==='Read')
{
	console.log("Reading your file");
	notes.readNote(argv.title);
}
else
{
	console.log("Invalid Operation.");
}
