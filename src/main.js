import './style.css';
import * as THREE from 'three';

// build the scene and attach it to the canvas
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true,
});

// setup renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


// lighting
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

// logo object
const logoTexture = new THREE.TextureLoader().load('shutter.png');
const logo = new THREE.Mesh(new THREE.CylinderGeometry( 2, 2, 0.8, 64 ), new THREE.MeshBasicMaterial({ map: logoTexture }));
scene.add(logo);

// inital positions
logo.position.z = -7;
logo.position.x = 7;
camera.position.z = 3;
camera.position.x = 0;
camera.rotation.y = 0;

// rotate logo on scroll
function rotatelogo() {
  //logo.rotation.x += 0.05;
  logo.rotation.y += 0.05;
  //logo.rotation.z += 0.05;
}
document.body.onscroll = rotatelogo;
rotatelogo();

// animation loop
function animate() {
  requestAnimationFrame(animate);
  logo.rotation.y += 0.02;
  logo.rotation.x += 0.01;
  renderer.render(scene, camera);
}
animate();