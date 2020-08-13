var scene,
    camera,
    renderer,
    geometry,
    group,
    controls;

init();
render();

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 10;
 
  
  geometry = new THREE.BoxGeometry( 1, 1, 1 );

  var leaveDarkMaterial = new THREE.MeshLambertMaterial( { color: 0x91E56E } );
  var leaveLightMaterial = new THREE.MeshLambertMaterial( { color: 0xA2FF7A } );
  var leaveDarkDarkMaterial = new THREE.MeshLambertMaterial( { color: 0x71B356 } );
  var stemMaterial = new THREE.MeshLambertMaterial( { color: 0x7D5A4F } );
  var houseMaterial = new THREE.MeshLambertMaterial( { color: 'orange' } );
  var doorMaterial = new THREE.MeshLambertMaterial( { color: 0x7D5A4F } );
  var windowMaterial = new THREE.MeshLambertMaterial( { color: 'lightblue' } );
  var pyramidmaterial = new THREE.MeshLambertMaterial( { color: 'red' } );
  
  var light = new THREE.DirectionalLight( 0xEEFFD3, 1 );
  light.position.set( 0, 5, 10 );
  scene.add( light );
  light.castShadow = true;
  
  light.shadow.mapSize.width = 100;  // default
  light.shadow.mapSize.height = 100; // default
  light.shadow.camera.near = 0.5;    // default
  light.shadow.camera.far = 15; 

  var light1 = new THREE.DirectionalLight( 0xEEFFD3, 1 );
  light1.position.set( 0, 0, 1 );
  scene.add( light1 );

  var light2 = new THREE.DirectionalLight( 0xFF0000, 0.4 );
  light2.position.set( 1, 0, 0 );
  scene.add( light2 );

  var light3 = new THREE.DirectionalLight( 0xFFFFFF, 0.2 );
  light3.position.set( 0, 1, 0 );
  scene.add( light3 );

  var stem = new THREE.Mesh( geometry, stemMaterial );
  stem.position.set( 0, 0, 3.4 );
  stem.scale.set( 0.3, 1.5, 0.3 );
  stem.castShadow = true; //default is false
  stem.receiveShadow = false;
  
  var squareLeave01 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave01.position.set( 0.5, 1.6, 3.4+0.5 );
  squareLeave01.scale.set( 0.8, 0.8, 0.8 );
  squareLeave01.castShadow = true; //default is false
  squareLeave01.receiveShadow = false;

  var squareLeave02 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave02.position.set( -0.4, 1.3, -0.4+3.4 );
  squareLeave02.scale.set( 0.7, 0.7, 0.7 );
  squareLeave02.castShadow = true; //default is false
  squareLeave02.receiveShadow = false;
  
  var squareLeave03 = new THREE.Mesh( geometry, leaveDarkMaterial );
  squareLeave03.position.set( 0.4, 1.7, -0.5+3.4 );
  squareLeave03.scale.set( 0.7, 0.7, 0.7 );
  squareLeave03.castShadow = true; //default is false
  squareLeave03.receiveShadow = false;
  
  var leaveDark = new THREE.Mesh( geometry, leaveDarkMaterial );
  leaveDark.position.set( 0, 1.2, 3.4 );
  leaveDark.scale.set( 1, 2, 1 );
  leaveDark.castShadow = true; //default is false
  leaveDark.receiveShadow = false;
  
  var leaveLight = new THREE.Mesh( geometry, leaveLightMaterial );
  leaveLight.position.set( 0, 1.2, 3.4 );
  leaveLight.scale.set( 1.1, 0.5, 1.1 );
  leaveLight.castShadow = true; //default is false
  leaveLight.receiveShadow = false;
  
  var ground = new THREE.Mesh( geometry, leaveDarkDarkMaterial );
  ground.position.set( 0, -1, 0 );
  ground.scale.set( 10.4, 0.8, 10.4 );
  ground.receiveShadow = true;
  
  var house = new THREE.Mesh( geometry, houseMaterial );
  house.position.set( 0, 0, 0 );
  house.scale.set( 2.5, 2.5, 2.5 );
  house.castShadow = true; //default is false
  house.receiveShadow = false;
  
  var door = new THREE.Mesh( geometry, doorMaterial );
  door.position.set( -1.23, 0, 0 );
  door.scale.set( 0.1, 1, 0.7 );
  
  var house2 = new THREE.Mesh( geometry, houseMaterial );
  house2.position.set( -4, 0, 0 );
  house2.scale.set( 1.2, 1.2, 1.2 );
  house2.castShadow = true; //default is false
  house2.receiveShadow = false;
  
  var door2 = new THREE.Mesh( geometry, doorMaterial );
  door2.position.set( -3.4, 0, 0 );
  door2.scale.set( 0.1, 0.5, 0.3 );
  
  var windo = new THREE.Mesh( geometry, windowMaterial );
  windo.position.set( -1.23, 0.8, 0 );
  windo.scale.set( 0.1, 0.5, 0.5 );
  
  var windo1 = new THREE.Mesh( geometry, windowMaterial );
  windo1.position.set( 0, 0.8, -1.23 );
  windo1.scale.set( 0.5, 0.5, 0.1 );
  
  var windo2 = new THREE.Mesh( geometry, windowMaterial );
  windo2.position.set( 0, 0.8, 1.23 );
  windo2.scale.set( 0.5, 0.5, 0.1 );
  
  var windo3 = new THREE.Mesh( geometry, windowMaterial );
  windo3.position.set( 1.23, 0.8, 0 );
  windo3.scale.set( 0.1, 0.5, 0.5 );
  
  var flag = new THREE.Mesh( geometry, windowMaterial );
  flag.position.set( 3.4, 2.9, 0.5 );
  flag.scale.set( 0.1, 0.7, 1 );
  flag.castShadow = true; //default is false
  flag.receiveShadow = false;
  
  var geo = new THREE.CylinderGeometry(0.5, 0.5, 4.6, 10, 0)
  var pole = new THREE.Mesh( geo, doorMaterial );
  pole.position.set( 3.4, 1, 0 );
  pole.scale.set( 0.1, 1, 0.1 );
  pole.castShadow = true; //default is false
  pole.receiveShadow = false;
  
  
  var geo0 = new THREE.CylinderGeometry(1.5, 1.5, 3, 10, 0)
  var stem2 = new THREE.Mesh( geo0, stemMaterial );
  stem2.position.set( 0, 0, -3.4 );
  stem2.scale.set( 0.1, 1, 0.1 );
  stem2.castShadow = true; //default is false
  stem2.receiveShadow = false;
  
  
  var geo1 = new THREE.CylinderGeometry(0, 5, 3, 8, 1)
  var pyramid = new THREE.Mesh(geo1, pyramidmaterial);
  pyramid.position.set( 0, 2, 0 );
  pyramid.scale.set( 0.5, 0.5, 0.5 );
  pyramid.castShadow = true; //default is false
  pyramid.receiveShadow = false;
  
  var bush = new THREE.Mesh(geo1, leaveLightMaterial);
  bush.position.set( 0, 0.5, -3.4);
  bush.scale.set( 0.15, 0.15, 0.15 );
  bush.castShadow = true; //default is false
  bush.receiveShadow = false;
  
  var bush1 = new THREE.Mesh(geo1, leaveLightMaterial);
  bush1.position.set( 0, 1, -3.4 );
  bush1.scale.set( 0.11, 0.11, 0.11 );
  bush1.castShadow = true; //default is false
  bush1.receiveShadow = false;
  
  var bush2 = new THREE.Mesh(geo1, leaveLightMaterial);
  bush2.position.set( 0, 1.5, -3.4 );
  bush2.scale.set( 0.1, 0.1, 0.1 );
  bush2.castShadow = true; //default is false
  bush2.receiveShadow = false;
  
  var pyramid2 = new THREE.Mesh(geo1, pyramidmaterial);
  pyramid2.position.set( -4, 0.8, 0 );
  pyramid2.scale.set( 0.22, 0.22, 0.22 );
  pyramid2.castShadow = true; //default is false
  pyramid2.receiveShadow = false;

  
  
  
 
  
  scenery = new THREE.Group();
  scenery.add( leaveDark );
  scenery.add( leaveLight );
  scenery.add( squareLeave01 );
  scenery.add( squareLeave02 );
  scenery.add( squareLeave03 );
  scenery.add( ground );
  scenery.add( stem );
  scenery.add( stem2 );
  scenery.add( bush );
  scenery.add( bush1 );
  scenery.add( bush2 );
  scenery.add( house );
  scenery.add( door );
  scenery.add( house2 );
  scenery.add( door2 );
  scenery.add( windo );
  scenery.add( windo1 );
  scenery.add( windo2 );
  scenery.add( windo3 );
  scenery.add( pyramid );
  scenery.add( pyramid2 );
  scenery.add( pole );
  scenery.add( flag );
  
  scenery.rotation.y = 0.5;
  scenery.rotation.x = 0.1;

  scene.add( scenery );

  

  renderer =  new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild( renderer.domElement );
  controls = new THREE.OrbitControls( camera, renderer.domElement );

 
  


}

function render() {

  requestAnimationFrame( render );

  scenery.rotation.y += 0.007;
  
  renderer.render( scene, camera );

}