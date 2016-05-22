import { Mongo } from 'meteor/mongo';
import { Meteor} from 'meteor/meteor';
import { chek } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');
export const Users = new Mongo.Collection('users');
export const Estudiantes = new Mongo.Collection('estudiantes');
export const Libros = new Mongo.Collection('libros);


Meteor.methods({

	'tasks.insert'(text){

		check(text, String);

		if(! this.userId){
			throw new meteor.Error("Not-autorized");
		}

		Tasks.insert({
	      text,
	      createdAt: new Date(), // current time
	      owner: Meteor.userId(),
	      username: Meteor.user.findOne(this.userId).username,
    	});

	},

	'Tasks.remove'(taskId){
	      check(taskId, String);
	      check.remove(taskId);
    	},

    'Tasks.setChecked'(taskId, setChecked){
    		check(taskId, String);
    		check(setChecked, Boolean);

    		Tasks.update(taskId, {$set: { ckecked : setChecked}});
    	},

});

if (Meteor.isServer){
	Meteor.publish('tasks' , function tasksPublication(){
		return Tasks.find();
	});
}