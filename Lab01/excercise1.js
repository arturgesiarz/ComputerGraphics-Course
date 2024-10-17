// Additional file for the first excercise of the first lab - 2D Christmass Tree without any animations

var scene;
var camera;

let christmassTree;
let gregoryHouse;
let greogryCar;

// 2D Christmass Tree - First attempt
function buildChristmassTree(
  posX = -2,
  posY = 0,
  posZ = 0,
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

  var treesGroup = new THREE.Group();
  treesGroup.add(buildChristmassTree(-2, 0, 0, 0x00fc00, 0x964b00));
  treesGroup.add(buildChristmassTree(-4.3, 0, 1, 0x00fc00, 0x964a00));
  treesGroup.add(buildChristmassTree(-0.7, 1.5, -0.1, 0x3c5700, 0x964a00));
  treesGroup.add(buildChristmassTree(-3.5, 1.5, -0.1, 0x3c5700, 0x964a00));
  treesGroup.position.set(0, 0, -2);
  scene.add(treesGroup);
}

function renderScene() {
  renderer.render(scene, camera);
}

initializeScene();
renderScene();
