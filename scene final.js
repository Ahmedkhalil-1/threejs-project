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

//creating group for hirarcy
  scenery = new THREE.Group();
//materialsforobject
  var leaveMaterial = new THREE.MeshLambertMaterial( { color: 0x91E56E } );
  var woodMaterial = new THREE.MeshLambertMaterial( { color: 0x7D5A4F } );
  var houseMaterial = new THREE.MeshLambertMaterial( { color: 'orange' } );
  var windowMaterial = new THREE.MeshLambertMaterial( { color: 'lightblue' } );
  var pyramidmaterial = new THREE.MeshLambertMaterial( { color: 'red' } );



//light source
  var light = new THREE.DirectionalLight( 0xEEFFD3, 1 );
  light.position.set( 0, 5, 10 );
  scene.add( light );
  light.castShadow = true;
  
  light.shadow.mapSize.width = 100;  
  light.shadow.mapSize.height = 100; 
  light.shadow.camera.near = 0.5;    
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



//ground
  var ground = new THREE.Mesh( geometry, leaveMaterial );
  ground.position.set( 0, -1, 0 );
  ground.scale.set( 10.4, 0.8, 10.4 );
  ground.receiveShadow = true;

//tree 1
  tree1 = new THREE.Group();

  var stem = new THREE.Mesh( geometry, woodMaterial );
  stem.position.set( 0, 0, 3.4 );
  stem.scale.set( 0.3, 1.5, 0.3 );
  stem.castShadow = true; //default is false
  stem.receiveShadow = false;
  tree1.add( stem );

  var Leave = new THREE.Mesh( geometry, leaveMaterial );
  Leave.position.set( 0.5, 1.6, 3.4+0.5 );
  Leave.scale.set( 0.8, 0.8, 0.8 );
  Leave.castShadow = true; //default is false
  Leave.receiveShadow = false;
  tree1.add( Leave );
  
  tree1.add( Leave.clone() );
  Leave.scale.set( 0.9, 0.5, 0.9 );
  Leave.position.set( -0.4, 1.3, -0.4+3.4 );
  
  tree1.add( Leave.clone() );
  Leave.scale.set( 0.8, 1.4, 0.8 );
  Leave.position.set( 0.4, 1.7, -0.5+3.4 );
  
  tree1.add( Leave.clone() );
  Leave.scale.set( 0.8, 1.3, 0.8 );
  Leave.position.set( 0, 1.2, 3.4 );
  
  
  
  
//house1
house1 = new THREE.Group();

  var house = new THREE.Mesh( geometry, houseMaterial );
  house.position.set( 2.5, 0, 0 );
  house.scale.set( 2.5, 2.5, 2.5 );
  house.castShadow = true; //default is false
  house.receiveShadow = false;
  house1.add(house);
  
  var door = new THREE.Mesh( geometry, woodMaterial );
  door.position.set( -1.23+2.5, 0, 0 );
  door.scale.set( 0.1, 1, 0.7 );
  house1.add(door);

  var windo = new THREE.Mesh( geometry, windowMaterial );
  windo.position.set( -1.23+2.5, 0.8, 0 );
  windo.scale.set( 0.1, 0.5, 0.5 );
  house1.add(windo);

  var windo1 = new THREE.Mesh( geometry, windowMaterial );
  windo1.position.set( 0+2.5, 0.8, -1.23 );
  windo1.scale.set( 0.5, 0.5, 0.1 );
  house1.add(windo1);

  var windo2 = new THREE.Mesh( geometry, windowMaterial );
  windo2.position.set( 0+2.5, 0.8, 1.23 );
  windo2.scale.set( 0.5, 0.5, 0.1 );
  house1.add(windo2);

  var windo3 = new THREE.Mesh( geometry, windowMaterial );
  windo3.position.set( 1.23+2.5, 0.8, 0 );
  windo3.scale.set( 0.1, 0.5, 0.5 );
  house1.add(windo3);

  var geo1 = new THREE.CylinderGeometry(0, 5, 3, 8, 1)
  var pyramid = new THREE.Mesh(geo1, pyramidmaterial);
  pyramid.position.set( 0+2.5, 2, 0 );
  pyramid.scale.set( 0.5, 0.5, 0.5 );
  pyramid.castShadow = true; //default is false
  pyramid.receiveShadow = false;
  house1.add(pyramid);

 //house2
house2 = new THREE.Group();
  var henhouse = new THREE.Mesh( geometry, houseMaterial );
  henhouse.position.set( -4, 0, 0 );
  henhouse.scale.set( 1.2, 1.2, 1.2 );
  henhouse.castShadow = true; //default is false
  henhouse.receiveShadow = false;
  house2.add(henhouse);

  var door2 = new THREE.Mesh( geometry, woodMaterial );
  door2.position.set( -3.4, 0, 0 );
  door2.scale.set( 0.1, 0.5, 0.3 );
  house2.add(door2);

  var pyramid2 = new THREE.Mesh(geo1, pyramidmaterial);
  pyramid2.position.set( -4, 0.8, 0 );
  pyramid2.scale.set( 0.22, 0.22, 0.22 );
  pyramid2.castShadow = true; //default is false
  pyramid2.receiveShadow = false;
  house2.add(pyramid2);
  
//tree2
tree2 = new THREE.Group();
  var geo0 = new THREE.CylinderGeometry(1.5, 1.5, 3, 10, 0)
  var stem2 = new THREE.Mesh( geo0, woodMaterial );
  stem2.position.set( 0, 0, -3.4 );
  stem2.scale.set( 0.1, 1, 0.1 );
  stem2.castShadow = true; //default is false
  stem2.receiveShadow = false;
  tree2.add(stem2);

  var bush = new THREE.Mesh(geo1, leaveMaterial);
  bush.position.set( 0, 0.5, -3.4);
  bush.scale.set( 0.15, 0.15, 0.15 );
  bush.castShadow = true; //default is false
  bush.receiveShadow = false;
  tree2.add(bush);
  tree2.add(bush.clone());
  bush.scale.set( 0.10, 0.15, 0.15 );
  bush.position.set( 0, 1, -3.4);
  tree2.add(bush.clone());
  bush.scale.set( 0.07, 0.15, 0.15 ); 
  bush.position.set( 0, 1.5, -3.4);


//flag
flager = new THREE.Group();
  var flag = new THREE.Mesh( geometry, windowMaterial );
  flag.position.set( 0, 3, 0.5 );
  flag.scale.set( 0.1, 0.7, 1 );
  flag.castShadow = true; //default is false
  flag.receiveShadow = false;
  
  flager.add(flag);
  
  var geo = new THREE.CylinderGeometry(0.5, 0.5, 4.6, 10, 0)
  var pole = new THREE.Mesh( geo, woodMaterial );
  pole.position.set( 0, 1, 0 );
  pole.scale.set( 0.1, 1, 0.1 );
  pole.castShadow = true; //default is false
  pole.receiveShadow = false;
  flager.add(pole);  

  
  

  
  
  
 
  
  scenery.add( ground );
  tree1.castShadow = true;
  scenery.add( tree1 );
  scenery.add( house1 );
  scenery.add( house2 );
  scenery.add( tree2 );
  scenery.add( flager );
  
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

  scenery.rotation.y +=0.01
  flager.rotation.y +=0.07
  
  renderer.render( scene, camera );

}