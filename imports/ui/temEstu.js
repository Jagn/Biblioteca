
import { Template } from 'meteor/templating';
 
import { Estudiantes } from '../api/tasks.js';
 
import './temEstu.html';



Template.temEstu.helpers({
    estado: function () {
        items = [
          {value:'Disponible' , selected:true},
          {value:'No Disponible' , selected:true}
        ]          
        
        return ['Disponible','No Disponible'];
    },

    name: function(){
      return Session.get("nombre");
    },
    Edad: function(){
      return Session.get("edad");
    },
    codigo: function(){
      return Session.get("codigo");

  });
  

});

  Template.templateListar.events({
    'click .delete':function(){
      //console.log("User: ",user);
      Estudiantes.remove(this._id);
    },     
   

    'click .user':function(){
        Session.set('name',this.name);
        Session.set('edad',this.edad);
        Session.set('codigo',this.codigo);        
        console.log("user: ",this.name);
        
    }
     
  });

  Template.temEstu.events({

    'submit #form-a' : function(event, template){
      event.preventDefault();

      //var _name = events.target.fInput.value  
      var name =event.target.name.value;
      var edad =event.target.edad.value;    
      var codigo=event.target.codigo.value;  
      var estado =Session.get('estado');   
      

      if(estado === undefined){
        alert("select state");
      }else{     

        Session.set('name',this.name;
        Session.set('edad',this.edad);
        Session.set('codigo',this.codigo);
        Session.set('estado',this.estado);

        var estudiantes = {
            name:name,
            edad:edad,
            codigo:codigo,
            estado:estado
        };

        Estudiantes.insert(estudiantes);

        console.log("Name: ", titulo);
        console.log("edad: ", anio);
        console.log("Codigo: ", autor);
        console.log("Estado: ", estado);   

        event.target.name.value='';
        event.target.edad.value='';
        event.target.codigo.value='';
   
      }

    },     

    'change select': function(evt){
      evt.preventDefault();
      console.log("value: h");
      var newValue=$(evt.target).val();
      Session.set('estado',newValue);
      console.log("value: ",newValue);
    }  
  });


Template.body.onCreated(function bodyOnCreated () {
this.state = new ReactiveDict();
Meteor.subscribe('tasks');

});