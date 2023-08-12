import './style.css';
import * as THREE from 'three';

// build the scene and attach it to the canvas
const scene = new THREE.Scene();
const view = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true,
});

// setup renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, view);

// torus object
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

// camera object
const cameraTexture = new THREE.TextureLoader().load('shutter.png');
const camera = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: cameraTexture }));
scene.add(camera);

// inital positions
camera.position.z = -5;
camera.position.x = 2;
view.position.z = 1;
view.position.x = 0;
view.rotation.y = 0;

// rotate camera on scroll
function rotateCamera() {
  camera.rotation.y += 0.05;
  camera.rotation.z += 0.05;
}
document.body.onscroll = rotateCamera;
rotateCamera();

// animation loop
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, view);
}
animate();