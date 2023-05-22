import * as THREE from "three";

import Experience from "../Experience";
import GSAP from "gsap";
//import GUI from "lil-gui";


export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        // this.gui = new GUI;
        // this.obj= {
        //     colorObj: {r: 0, g: 0, b: 0},
        //     intensity: 3,
        // };
        
        this.setSunlight();

        //this.setGUI();
    }

    // setGUI(){
    //     this.gui.addColor(this.obj, "colorObj").onChange(()=> {
    //         this.sunLight.color.copy(this.obj.colorObj)
    //         this.ambientLight.color.copy(this.obj.colorObj)
    //         console.log(this.obj.colorObj);
    //     });
    //     this.gui.add(this.obj, "intensity", 0, 10).onChange(()=>{
    //         this.sunLight.intensity = this.obj.intensity;
    //         this.ambientLight.intensity = this.obj.intensity;
    //     })
    // }

    setSunlight() {
        this.sunLight = new THREE.DirectionalLight("#FFE0A8", 1);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(4096, 4096);
        this.sunLight.shadow.normalBias = 0.05;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        this.sunLight.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight("#FFCDC0", 0.5);
        this.scene.add(this.ambientLight);
    }

    switchTheme(theme) {
        // console.log(this.sunLight);
        if (theme === "dark") {
            GSAP.to(this.sunLight.color, {
                r: 0.03137254901960784,
                g: 0.06666666666666667,
                b: 0.21176470588235294,
            });
            GSAP.to(this.ambientLight.color, {
                r: 0.03137254901960784,
                g: 0.06666666666666667,
                b: 0.21176470588235294,
            });
            GSAP.to(this.sunLight, {
                intensity: 1,
            });
            GSAP.to(this.ambientLight, {
                intensity: 1,
            });
        } else {
            GSAP.to(this.sunLight.color, {
                r: 255 / 255,
                g: 224 / 255,
                b: 168 / 255,
            });
            GSAP.to(this.ambientLight.color, {
                r: 255 / 255,
                g: 205 / 255,
                b: 192 / 255,
            });
            GSAP.to(this.sunLight, {
                intensity: 1,
            });
            GSAP.to(this.ambientLight, {
                intensity: 0.5,
            });
        }
    }

    resize() {

    }

    update() {

    }
}