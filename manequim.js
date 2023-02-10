// Inicialização da cena
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Criação do manequim
var torsoGeometry = new THREE.CylinderGeometry( 0.5, 0.5, 1.5, 32 );
var torsoMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var torso = new THREE.Mesh( torsoGeometry, torsoMaterial );
torso.position.y = 1;

var headGeometry = new THREE.SphereGeometry( 0.5, 32, 32 );
var headMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var head = new THREE.Mesh( headGeometry, headMaterial );
head.position.y = 2.25;

var armGeometry = new THREE.BoxGeometry( 0.25, 1, 0.25 );
var armMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var arm1 = new THREE.Mesh( armGeometry, armMaterial );
arm1.position.x = 0.5;
arm1.position.y = 1;

var arm2 = arm1.clone();
arm2.position.x = -0.5;

var legGeometry = new THREE.BoxGeometry( 0.25, 1, 0.25 );
var legMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var leg1 = new THREE.Mesh( legGeometry, legMaterial );
leg1.position.x = 0.25;
leg1.position.y = 0.5;

var leg2 = leg1.clone();
leg2.position.x = -0.25;

// Adiciona todas as partes ao manequim
var mannequin = new THREE.Object3D();
mannequin.add( torso );
mannequin.add( head );
mannequin.add( arm1 );
mannequin.add( arm2 );
mannequin.add( leg1 );
mannequin.add( leg2 );

scene.add( mannequin );

camera.position.z = 5;

// Renderização da cena
function animate() {
  requestAnimationFrame( animate );
  mannequin.rotation.y += 0.01;
  renderer.render( scene, camera );
}
animate();
