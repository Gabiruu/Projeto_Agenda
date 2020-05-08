import {adm_check} from './app';

let box_welcome = document.getElementById('box-welcome');

box_welcome.addEventListener('load', adm_check(3000));
