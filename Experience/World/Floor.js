import * as THREE from "three";
import Experience from "../Experience.js";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setFloor();
    this.setCircles();
  }

  setFloor() {
    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshStandardMaterial({
      color: 0x3c352a,
      side: THREE.BackSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.position.y = -0.1;
    this.plane.receiveShadow = true;
  }

  setCircles() {
    const geometry = new THREE.CircleGeometry(5, 64);
    const material = new THREE.MeshStandardMaterial({ color: 0xe5a1aa });

    this.circleFirst = new THREE.Mesh(geometry, material);

    this.circleFirst.position.y = -0.29;

    this.circleFirst.scale.set(0, 0, 0);

    this.circleFirst.rotation.x = -Math.PI / 2;

    this.circleFirst.receiveShadow = true;

    this.scene.add(this.circleFirst);
}
  resize() {}

  update() {}
}
