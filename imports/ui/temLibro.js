 
import { Template } from 'meteor/templating';
 
import { Libros} from '../api/tasks.js';
 
import './temLibro.html';




Template.temEstu.helpers({
    estado: function () {
        items = [
          {value:'Disponible' , selected:true},
          {value:'No Disponible' , selected:true}
        ]          
        
        return ['Disponible','No Disponible'];
    },

    imp_titulo: function(){
      return Session.get("titulo");
    },
    imp_anio: function(){
      return Session.get("anio");
    },
    imp_autor: function(){
      return Session.get("autor");
    },
    imp_isbn: function(){
      return Session.get("isbn");
    },
    imp_estado: function(){
      return Session.get("estado");
    }

  });
  
  Template.temLis.helpers({
    libros: function (){
      return Libros.find().fetch();
    }  

    });

  Template.templateListar.events({
    'click .delete':function(){
      //console.log("User: ",user);
      Libros.remove(this._id);
    },

    
    'click .user':function(){
        Session.set('titulo',this.titulo);
        Session.set('anio',this.anio);
        Session.set('autor',this.autor);
        Session.set('isbn',this.isbn);
        Session.set('estado',this.estado);
        console.log("user: ",this.titulo);
    }
     
  });


Template.temLibro.events({

    'submit #form-a' : function(event, template){
      event.preventDefault();

      //var _name = events.target.fInput.value  
      var titulo =event.target.titulo.value;
      var anio =event.target.anio.value;    
      var autor=event.target.autor.value;  
      var isbn=event.target.isbn.value;
      var estado =Session.get('estado');   
      

      if(estado === undefined){
        alert("select state");
      }else{     

        Session.set('titulo',this.titulo);
        Session.set('anio',this.anio);
        Session.set('autor',this.autor);
        Session.set('isbn',this.isbn);
        Session.set('estado',this.estado);

        var libros= {
            titulo:titulo,
            anio:anio,
            autor:autor,
            isbn:isbn,
            estado:estado
        };

        Libros.insert(libros);

        console.log("titulo: ", titulo);
        console.log("Año: ", anio);
        console.log("Autor: ", autor);
        console.log("ISBN: ", isbn);       
        console.log("Estado: ", estado);   

        event.target.titulo.value='';
        event.target.anio.value='';
        event.target.autor.value='';
        event.target.isbn.value='';
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
Meteor.subscribe('libros');

});