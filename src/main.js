import { header } from "../componentes/header";
import { ranking } from "../vistas/ranking";
import { home } from "../vistas/home";
import { juego } from "../vistas/juego";
import './estilo.css';
document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = ranking.template
ranking.script()
document.querySelector('main').innerHTML = home.template
home.script()
juego.script();
