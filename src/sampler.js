import '@vaadin/confirm-dialog';
import '@vaadin/dialog';
import '@vaadin/popover';
import '@vaadin/tooltip';
import { initComponents } from './components.js';
import { initControls } from './controls.js';

const sample = document.querySelector('.sample');
const element = sample && sample.firstElementChild;

if (element) {
  initControls(element);
  initComponents(element);
}
