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

const $actionButtonMenu = document.getElementById('butonMenu');
const $actionMenu = document.getElementById('menu');
const $clikAncla = document.getElementById('ancla');

$actionButtonMenu.addEventListener('click', function(){
  if ($actionMenu.classList.contains('menu') ) {
    $actionMenu.classList.replace('menu', 'menuOn');
    
  } else {
    $actionMenu.classList.replace('menuOn', 'menu');
    
  }
});

$clikAncla.addEventListener('click', () => {
  if ($actionMenu.classList.contains('menuOn')) {
    $actionMenu.classList.replace('menuOn', 'menu');
    

    console.log('vamos bien');
  } else {
    $actionMenu.classList.replace('menu', 'menuOn')
  }
});

