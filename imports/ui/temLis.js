 
import { Template } from 'meteor/templating';
 
import { Estudiantes } from '../api/tasks.js';
 
import './temLis.html';





 Template.temLis.helpers({
    libros: function (){
      return Estudiantes.find().fetch();
    }  
    });

  
  Template.temLis.events({
    'click .delete':function(){
      //console.log("User: ",user);
      Estudiantes.remove(this._id);
    },
	});
