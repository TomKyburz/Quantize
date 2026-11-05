import * as THREE from 'three';

const screen = document.getElementById("world");

let screenW = screen.clientWidth;
let screenH = screen.clientHeight;

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(screenW, screenH);
renderer.setClearColor(0x000000, 0);
screen.appendChild(renderer.domElement);

screen.addEventListener('click', () => {
  window.location.href = "map/index.html";
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, screenW / screenH, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(3, 3, 3);
const edges = new THREE.EdgesGeometry(geometry);
const material = new THREE.LineBasicMaterial({color: 0x32CD32});
const cube = new THREE.LineSegments(edges, material);

scene.add(cube);
const cubespeed = 0.017

function animate() {

  requestAnimationFrame(animate);

  cube.rotation.x += cubespeed;
  cube.rotation.y += cubespeed;

  renderer.render(scene, camera);
}

animate();

// const colors = [
  //   0x006fff,
  //   0x006fff,
  //   0x559fff,
  //   0x559fff,
  //   0x1d7df9,
  //   0xfff
  // ];
  //
  // const materials = colors.map(
    //   color => new THREE.MeshBasicMaterial({ color })
    // );
    //
    // const geometry = new THREE.BoxGeometry(3, 3, 3);
    //
    // const cube = new THREE.Mesh(
      //   geometry,
      //   materials
      // );
      //
      // scene.add(cube);
