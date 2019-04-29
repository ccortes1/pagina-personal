const $actionWebDesing = document.getElementById('servicio_webdising');
const $descripcionDesarrolloWeb = document.getElementById('descripcionDesarrolloWeb');
$actionWebDesing.addEventListener('click', function(){
  $descripcionDesarrolloWeb.classList.replace('servOff', 'servOn');
  $descripcionMarketing.classList.replace('servOn', 'servOff');
$descripcionProyectos.classList.replace('servOn', 'servOff');
});

const $actionMarketing = document.getElementById('servicio_marketing');
const $descripcionMarketing = document.getElementById('descripcionMarketing');
$actionMarketing.addEventListener('click', function(){
  $descripcionDesarrolloWeb.classList.replace('servOn', 'servOff');
  $descripcionMarketing.classList.replace('servOff', 'servOn');
  $descripcionProyectos.classList.replace('servOn', 'servOff');
});

const $actionProyectos = document.getElementById('servicios_proyectos');
const $descripcionProyectos = document.getElementById('descripcionProyectos');
$actionProyectos.addEventListener('click', function(){
  $descripcionDesarrolloWeb.classList.replace('servOn', 'servOff');
  $descripcionMarketing.classList.replace('servOn', 'servOff');
  $descripcionProyectos.classList.replace('servOff', 'servOn');
});


// function replace(evento){
//
//   if  {
//
//   }
// }
