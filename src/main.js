import './style.css';
import * as THREE from 'three';
// Setup

const scene = new THREE.Scene();

const view = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
view.position.setZ(30);
view.position.setX(-3);

renderer.render(scene, view);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

//const ambientLight = new THREE.AmbientLight(0xffffff);
//scene.add(pointLight, ambientLight);



// Background

//const spaceTexture = new THREE.TextureLoader().load('space.jpg');
//scene.background = spaceTexture;


// Avatar

const cameraTexture = new THREE.TextureLoader().load('shutter.png');

const camera = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: cameraTexture }));

scene.add(camera);

camera.position.z = -5;
camera.position.x = 2;
view.position.z = 1;
view.position.x = 0;
view.rotation.y = 0;

// Scroll Animation


function moveCamera() {
  const t = 1;

  camera.rotation.y += 0.05;
  camera.rotation.z += 0.05;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  // controls.update();

  renderer.render(scene, view);
}

animate();