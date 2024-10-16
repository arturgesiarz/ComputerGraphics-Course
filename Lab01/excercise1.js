var scene;
var camera;

function buildChristmassTree() {
  let leafsColor = 0x00ff00;
  let leafsPositions = [
    { x: -1.5, y: 0.0, z: 4.0 },
    { x: -1.5, y: 1.0, z: 4.0 },
    { x: -1.5, y: 2.0, z: 4.0 },
  ];

  let trunkColor = 0x964b00;
  let trunkPosition = { x: -2, y: -2.0, z: 4.0 };

  // -- Geometry
  var trianglesGeometry = Array(3)
    .fill(null)
    .map(() => new THREE.Geometry());

  trianglesGeometry.forEach((geometry, _) => {
    geometry.vertices.push(new THREE.Vector3(0.0, 1.0, 0.0));
    geometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
    geometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
    geometry.faces.push(new THREE.Face3(0, 1, 2));
  });

  var trunkGeometry = new THREE.Geometry();
  trunkGeometry.vertices.push(new THREE.Vector3(0.0, 1.0, 0.0));
  trunkGeometry.vertices.push(new THREE.Vector3(1.0, 1.0, 0.0));
  trunkGeometry.vertices.push(new THREE.Vector3(0.0, 0.0, 0.0));
  trunkGeometry.vertices.push(new THREE.Vector3(1.0, 0.0, 0.0));
  trunkGeometry.faces.push(new THREE.Face3(0, 1, 3));
  trunkGeometry.faces.push(new THREE.Face3(0, 2, 3));

  // -- Color
  var triangleMaterial = new THREE.MeshBasicMaterial({
    color: leafsColor,
    side: THREE.DoubleSide,
  });

  var trunkMaterial = new THREE.MeshBasicMaterial({
    color: trunkColor,
    side: THREE.DoubleSide,
  });

  // -- Positioning
  var trianglesMesh = trianglesGeometry.map((geometry, index) => {
    var mesh = new THREE.Mesh(geometry, triangleMaterial);
    mesh.position.set(...Object.values(leafsPositions[index]));
    return mesh;
  });

  var trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunkMesh.position.set(...Object.values(trunkPosition));

  trianglesMesh.forEach((mesh) => scene.add(mesh));
  scene.add(trunkMesh);
}

function buildGregoryHouse() {
  let houseColor = 0x8080;
  let housePosition = { x: 1.5, y: -1.0, z: 4.0 };

  let roofColor = 0x818589;
  let roofPosition = { x: 1.5, y: 1.0, z: 4.0 };

  // -- Geometry
  var houseGeometry = new THREE.Geometry();
  houseGeometry.vertices.push(new THREE.Vector3(-1.0, 1.0, 0.0));
  houseGeometry.vertices.push(new THREE.Vector3(1.0, 1.0, 0.0));
  houseGeometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
  houseGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
  houseGeometry.faces.push(new THREE.Face3(0, 1, 2));
  houseGeometry.faces.push(new THREE.Face3(0, 2, 3));

  var roofGeometry = new THREE.Geometry();
  roofGeometry.vertices.push(new THREE.Vector3(0.0, 1.0, 0.0));
  roofGeometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
  roofGeometry.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
  roofGeometry.faces.push(new THREE.Face3(0, 1, 2));

  // -- Color
  var houseMaterial = new THREE.MeshBasicMaterial({
    color: houseColor,
    side: THREE.DoubleSide,
  });

  var roofMaterial = new THREE.MeshBasicMaterial({
    color: roofColor,
    side: THREE.DoubleSide,
  });

  // -- Positioning
  var houseMesh = new THREE.Mesh(houseGeometry, houseMaterial);
  houseMesh.position.set(...Object.values(housePosition));

  var roofMesh = new THREE.Mesh(roofGeometry, roofMaterial);
  roofMesh.position.set(...Object.values(roofPosition));

  scene.add(houseMesh);
  scene.add(roofMesh);
}

function initializeScene() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x000000, 1);

  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;

  renderer.setSize(canvasWidth, canvasHeight);
  document.getElementById("WebGLCanvas").appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 100);
  camera.position.set(0, 0, 15);
  camera.lookAt(scene.position);
  scene.add(camera);

  // Christmass Tree
  buildChristmassTree();

  // Gregory House
  buildGregoryHouse();
}

function renderScene() {
  renderer.render(scene, camera);
}

initializeScene();
renderScene();
