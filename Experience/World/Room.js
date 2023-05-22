import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;
    this.roomChildren = {};

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.setScale();
    this.onMouseMove();
    // this.gui = new GUI;
    // this.obj= {
    //     positionObj: {x: 0, y:0, z: 0}
    // };
    // this.setGUI();
  }

  // setGUI(){
  //         this.gui.addPosition(this.obj, "positionObj",0,90).onChange(()=> {
  //             this.RectAreaLight.position.copy(this.obj.positionObj)
  //             console.log(this.obj.positionObj);
  //         });
  //     }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          console.log(groupchild.material);
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }

      // console.log(child);

      // child.scale.set(0, 0, 0);
      // if (child.name === "Cube") {
      //   // child.scale.set(1, 1, 1);
      //   child.position.set(0, -1, 0);
      //   child.rotation.y = Math.PI / 4;
      // }

      this.roomChildren[child.name.toLowerCase()] = child;
    });

    const width = 0.3;
    const height = 0.3;
    const intensity = 1;
    const rectLight = new THREE.RectAreaLight(
      0xffffff,
      intensity,
      width,
      height
    );
    rectLight.position.set(-0.5, 1.2, -1);
    rectLight.rotation.x = -Math.PI / 1.28;
    rectLight.rotation.z = Math.PI / 2;
    rectLight.rotation.y = Math.PI / -4.3;
    this.actualRoom.add(rectLight);

    this.roomChildren["rectLight"] = rectLight;

    // const rectLightHelper = new RectAreaLightHelper(rectLight);
    // rectLight.add(rectLightHelper);
    // console.log(this.room);

    this.scene.add(this.actualRoom);
  }

  setScale() {
    this.mobile = window.matchMedia("(max-width: 767px)").matches;

    if (this.mobile) {
      this.actualRoom.scale.set(0.6, 0.6, 0.6);
    } else {
      this.actualRoom.scale.set(1, 1, 1);
    }
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.05;
    });
  }

  resize() {
    this.setScale();
  }

  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );

    this.actualRoom.rotation.y = this.lerp.current;

    //this.mixer.update(this.time.delta * 0.0009);
  }
}
