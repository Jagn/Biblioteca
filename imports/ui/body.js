import { Template } from 'meteor/templating';
import { Estudiantes } from '../api/tasks.js';
import { Libros } from '../api/tasks.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './temEstu.js';
import './temLibro.js';
import './body.html';


Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});



