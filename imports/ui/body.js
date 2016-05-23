import { Template } from 'meteor/templating';
import { Estudiantes } from '../api/tasks.js';
import { Libros } from '../api/tasks.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './temEstu.js';
import './temLibro.js';
import './body.html';

//estado del estudiante...

Template.body.helpers({
  estudiantes() {
  	const instance = Template.instance();
    if (instance.state.get('estudiantes')) {
      // If hide completed is checked, filter tasks
      return Estudiantes.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }

    return Estudiantes.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
    return Estudiantes.find({ checked: { $ne: true } }).count();
  },
});

Template.body.helpers({
  libros() {
  	const instance = Template.instance();
    if (instance.state.get('libros')) {
      // If hide completed is checked, filter tasks
      return Libros.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }

    return Libros.find({}, { sort: { createdAt: -1 } });
  },
  incompleteCount() {
    return Libros.find({ checked: { $ne: true } }).count();
  },
});

//event
Template.body.events({
  'submit .new-estu'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const text = event.target.text.value;
 
    // Insert a task into the collection
    Meteor.call('estudiantes.insert', text);
 
    // Clear form
    event.target.text.value = '';
  },

  'change .hide-completed input'(event, instance) {
    instance.state.set('estudiantes', event.target.checked);
  },


Template.body.events({
  'submit .new-libro'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const text = event.target.text.value;
 
    // Insert a task into the collection
    Meteor.call('libros.insert', text);
 
    // Clear form
    event.target.text.value = '';
  },

  'change .hide-completed input'(event, instance) {
    instance.state.set('libros', event.target.checked);
  },
});


Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('estudiantes');
});
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('libros');
});



