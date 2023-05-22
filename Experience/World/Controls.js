// import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { CSSPlugin } from "gsap";

export default class Controls {
  constructor() {
    console.log(GSAP);
    console.log(ScrollTrigger);
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    GSAP.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSPlugin, "lookAt");

    // this.room = this.experience.world.room.actualRoom;
    // this.room.children.forEach((child) => {
    //   if (child.type === "RectAreaLight") {
    //     this.rectLight = child;
    //   }
    // });
    // console.log(this.experience.world.floor);
    // this.circleFirst = this.experience.world.floor.circleFirst;

    // Define the camera positions, rotations, and scales
    this.positions = [
      { x: -0.15, y: 1, z: 0.6, scale: 1 },
      {
        x: 4.42,
        y: 5.18,
        z: 8.46942,
        scale: 3,
      },
    ];
    this.rotations = [
      { isEuler: true, x: -Math.PI / 6, y: 0, z: 0, order: "XYZ" },
      {
        isEuler: true,
        x: -0.397,
        y: 0.44,
        z: 0.1814,
        order: "XYZ",
      },
    ];
    this.scales = [
      { x: 1, y: 1, z: 1 },
      { x: 0.01, y: 0.01, z: 0.01 },
    ];
    this.defineAnimationVariables();
    this.setScrollTrigger();
    this.resize();
  }

  setScrollTrigger() {
    const forwardTimeline = GSAP.timeline({ paused: true });

    const camera = this.camera.orthographicCamera;
    camera.far = 1500; // increase the "far" value
    camera.updateProjectionMatrix(); // update the camera's projection matrix

    // Add the camera animations to the timeline
    forwardTimeline
      .fromTo(
        camera.position,
        {
          x: this.positions[0].x,
          y: this.positions[0].y,
          z: this.positions[0].z,
        },
        {
          duration: 1,
          x: this.positions[1].x,
          y: this.positions[1].y,
          z: this.positions[1].z,
          ease: "linear",
        },
        "same"
      )
      .fromTo(
        camera.rotation,
        {
          x: this.rotations[0].x,
          y: this.rotations[0].y,
          z: this.rotations[0].z,
        },
        {
          duration: 1,
          x: this.rotations[1].x,
          y: this.rotations[1].y,
          z: this.rotations[1].z,
          ease: "linear",
        },
        "same"
      )
      .fromTo(
        camera.scale,
        {
          x: this.scales[0].x,
          y: this.scales[0].y,
          z: this.scales[0].z,
        },
        {
          duration: 1,
          x: this.scales[1].x,
          y: this.scales[1].y,
          z: this.scales[1].z,
          ease: "linear",
        },
        "same"
      );

    // Set up the ScrollTrigger
    ScrollTrigger.create({
      trigger: ".section-margin",
      start: "top top",
      end: "bottom bottom",
      // pin: true,
      scrub: true,
      onUpdate: (self) => {
        // Trigger the forward timeline when scrolling down
        if (self.direction === 1) {
          forwardTimeline.progress(self.progress);
        }
        // Trigger the reverse timeline when scrolling up
        else {
          forwardTimeline.progress(self.progress);
        }
      },
    });
  }

  defineAnimationVariables() {
    this.mobile = window.matchMedia("(max-width: 766px)").matches;

    if (this.mobile) {
      // Update the values for mobile
      this.positions[1] = { x: 6.10363, y: 3.98048, z: 8.53309, scale: 3 };
      this.rotations[1] = {
        isEuler: true,
        x: -0.34669,
        y: 0.58263,
        z: 0.19623,
        order: "XYZ",
      };
      this.scales[1] = { x: 0.01, y: 0.01, z: 0.01 };
    } else {
      // Update the values for desktop
      this.positions[1] = {
        x: 4.41778,
        y: 5.15123,
        z: 8.46942,
        scale: 3,
      };
      this.rotations[1] = {
        isEuler: true,
        x: -0.40081,
        y: 0.44763,
        z: 0.1814,
        order: "XYZ",
      };
      this.scales[1] = { x: 0.01, y: 0.01, z: 0.01 };
    }
  }

  resize() {
    this.defineAnimationVariables();
    this.setScrollTrigger();
  }

  update() {}
}
