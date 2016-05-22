 
import { Template } from 'meteor/templating';
 
import { Estudiantes } from '../api/tasks.js';
 
import './temLis.html';





 Template.templateListar.helpers({
    libros: function (){
      return Estudiantes.find().fetch();
    }  



    });
  
  Template.templateListar.events({
    'click .delete':function(){
      //console.log("User: ",user);
      Libro.remove(this._id);
    },