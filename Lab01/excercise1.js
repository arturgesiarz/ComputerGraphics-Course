var scene;
var camera;

function buildChristmassTree(
  posX,
  posY,
  posZ,
  leafsColor = 0x00ff00,
  trunkColor = 0x964b00
) {
  // Props
  let leafsPositions = [
    { x: -1.5, y: 0.0, z: 4.0 },
    { x: -1.5, y: 1.0, z: 4.0 },
    { x: -1.5, y: 2.0, z: 4.0 },
  ];

  let trunkPosition = { x: -2, y: -2.0, z: 4.0 };

  // Geometry
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

  // Color
  var triangleMaterial = new THREE.MeshBasicMaterial({
    color: leafsColor,
    side: THREE.DoubleSide,
  });

  var trunkMaterial = new THREE.MeshBasicMaterial({
    color: trunkColor,
    side: THREE.DoubleSide,
  });

  // Positioning
  var trianglesMesh = trianglesGeometry.map((geometry, index) => {
    var mesh = new THREE.Mesh(geometry, triangleMaterial);
    mesh.position.set(...Object.values(leafsPositions[index]));
    return mesh;
  });

  var trunkMesh = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunkMesh.position.set(...Object.values(trunkPosition));

  // Grouping
  var treeGroup = new THREE.Group();
  trianglesMesh.forEach((mesh) => treeGroup.add(mesh));
  treeGroup.add(trunkMesh);
  treeGroup.position.set(posX, posY, posZ);

  return treeGroup;
}

function buildGregoryHouse() {
  // Props
  let houseColor = 0x8080;
  let roofColor = 0x818589;
  let chimneyColor = 0x000000;
  let doorsColor = chimneyColor;
  let windowColor = 0x2c23cf;

  let housePosition = { x: 1.5, y: -1.0, z: 4.0 };
  let roofPosition = { x: 1.5, y: 1.0, z: 4.0 };
  let chimneyPosition = { x: 1.3, y: 0.5, z: 3.9 };
  let doorsPosition = { x: 1.0, y: -2, z: 4.0 };
  let windowLeftPosition = { x: 0.75, y: -0.75, z: 4.0 };
  let windowRightPosition = { x: 1.8, y: -0.75, z: 4.0 };

  // Geometry
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

  var chimneyGeometry = new THREE.Geometry();
  chimneyGeometry.vertices.push(new THREE.Vector3(0.0, 1.0, 0.0));
  chimneyGeometry.vertices.push(new THREE.Vector3(1.0, 1.0, 0.0));
  chimneyGeometry.vertices.push(new THREE.Vector3(0.0, -0.5, 0.0));
  chimneyGeometry.vertices.push(new THREE.Vector3(1.0, -0.5, 0.0));
  chimneyGeometry.faces.push(new THREE.Face3(0, 1, 3));
  chimneyGeometry.faces.push(new THREE.Face3(0, 2, 3));

  var doorsGeometry = new THREE.Geometry();
  doorsGeometry.vertices.push(new THREE.Vector3(0.0, 1, 0.0));
  doorsGeometry.vertices.push(new THREE.Vector3(1.0, 1, 0.0));
  doorsGeometry.vertices.push(new THREE.Vector3(0.0, 0, 0.0));
  doorsGeometry.vertices.push(new THREE.Vector3(1.0, 0, 0.0));
  doorsGeometry.faces.push(new THREE.Face3(0, 1, 3));
  doorsGeometry.faces.push(new THREE.Face3(0, 2, 3));

  var windowGeometry = new THREE.Geometry();
  windowGeometry.vertices.push(new THREE.Vector3(0.0, 0.5, 0.0));
  windowGeometry.vertices.push(new THREE.Vector3(0.5, 0.5, 0.0));
  windowGeometry.vertices.push(new THREE.Vector3(0.0, 0, 0.0));
  windowGeometry.vertices.push(new THREE.Vector3(0.5, 0, 0.0));
  windowGeometry.faces.push(new THREE.Face3(0, 1, 3));
  windowGeometry.faces.push(new THREE.Face3(0, 2, 3));

  // Color
  var houseMaterial = new THREE.MeshBasicMaterial({
    color: houseColor,
    side: THREE.DoubleSide,
  });

  var roofMaterial = new THREE.MeshBasicMaterial({
    color: roofColor,
    side: THREE.DoubleSide,
  });

  var chimenyMaterial = new THREE.MeshBasicMaterial({
    color: chimneyColor,
    side: THREE.DoubleSide,
  });

  var doorsMaterial = new THREE.MeshBasicMaterial({
    color: doorsColor,
    side: THREE.DoubleSide,
  });

  var windowMaterial = new THREE.MeshBasicMaterial({
    color: windowColor,
    side: THREE.DoubleSide,
  });

  // Positioning
  var houseMesh = new THREE.Mesh(houseGeometry, houseMaterial);
  houseMesh.position.set(...Object.values(housePosition));

  var roofMesh = new THREE.Mesh(roofGeometry, roofMaterial);
  roofMesh.position.set(...Object.values(roofPosition));

  var chimneyMesh = new THREE.Mesh(chimneyGeometry, chimenyMaterial);
  chimneyMesh.position.set(...Object.values(chimneyPosition));

  var doorsMesh = new THREE.Mesh(doorsGeometry, doorsMaterial);
  doorsMesh.position.set(...Object.values(doorsPosition));

  var windowLeftMesh = new THREE.Mesh(windowGeometry, windowMaterial);
  windowLeftMesh.position.set(...Object.values(windowLeftPosition));

  var windowRightMesh = new THREE.Mesh(windowGeometry, windowMaterial);
  windowRightMesh.position.set(...Object.values(windowRightPosition));

  // Grouping
  var roofGroup = new THREE.Group();
  roofGroup.add(roofMesh);
  roofGroup.add(chimneyMesh);

  var houseGroup = new THREE.Group();
  houseGroup.add(roofGroup);
  houseGroup.add(houseMesh);
  houseGroup.add(doorsMesh);
  houseGroup.add(windowLeftMesh);
  houseGroup.add(windowRightMesh);
  houseGroup.position.set(0, 0, 0);

  return houseGroup;
}

function initializeScene() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0x34b7eb, 1);

  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;

  renderer.setSize(canvasWidth, canvasHeight);
  document.getElementById("WebGLCanvas").appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 1, 100);
  camera.position.set(0, 0, 15);
  camera.lookAt(scene.position);
  scene.add(camera);

  // Christmass Trees
  var treesGroup = new THREE.Group();
  treesGroup.add(buildChristmassTree(-2, 0, 0, 0x00fc00, 0x964b00));
  treesGroup.add(buildChristmassTree(-4.3, 0, 1, 0x00fc00, 0x964a00));
  treesGroup.add(buildChristmassTree(-0.7, 1.5, -0.1, 0x3c5700, 0x964a00));
  treesGroup.add(buildChristmassTree(-3.5, 1.5, -0.1, 0x3c5700, 0x964a00));
  treesGroup.position.set(0, 0, -2);
  scene.add(treesGroup);

  // Gregory House
  scene.add(buildGregoryHouse());
}

function renderScene() {
  renderer.render(scene, camera);
}

initializeScene();
renderScene();
