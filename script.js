// 1st Scene
const scene = new THREE.Scene();
const group = new THREE.Scene();


// 1st
// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
// model
const material = new THREE.MeshBasicMaterial({
    color: 'gray',
    wireframe: true,
    wireframeLinewidth: 2
});
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
const cube = new THREE.Mesh(geometry, material); // Mesh.(geometry, model)
scene.add(cube);

// 3rd
// Sizes
const sizes = {
    width: 800,
    height: 600
};

// 2nd
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
const camera1 = new THREE.PerspectiveCamera(75, (sizes.width * 2) / (sizes.height * 2));
camera.position.z = 4
camera.position.x = 0.5
camera.position.y = 1.1
// centering the camera
// camera.lookAt(cube.position)
scene.add(camera);
scene.add(camera1);


// 4th
// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height) // adding size
// 5th 
// scene and camera
renderer.render(scene, camera)
