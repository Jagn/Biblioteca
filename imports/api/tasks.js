import { Mongo } from 'meteor/mongo';
import { Meteor} from 'meteor/meteor';
import { chek } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');
export const Users = new Mongo.Collection('users');
export const Estudiantes = new Mongo.Collection('estudiantes');
export const Libros = new Mongo.Collection('libros);


Meteor.methods({

	
});

if (Meteor.isServer){
	Meteor.publish('estudiantes' , function tasksPublication(){
		return Estudiantes.find();
	});
}
if (Meteor.isServer){
	Meteor.publish('estudiantes' , function tasksPublication(){
		return Libros.find();
	});
}