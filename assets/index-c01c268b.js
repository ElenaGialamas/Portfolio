var f=Object.defineProperty;var z=(t,e,i)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var u=(t,e,i)=>(z(t,typeof e!="symbol"?e+"":e,i),i);import{G as v,D as y,P as L,O as C,a as S,W as b,S as M,C as E,b as P,c as R,R as T,d as A,M as m,B as F,e as g,f as O,g as q,A as B,h as D}from"./three-240024e4.js";import{e as l}from"./events-5f626723.js";import{g as o,S as d,a as I,C as W}from"./gsap-4393688f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&h(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();class k extends l.EventEmitter{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.frustrum=5,this.width<968?this.device="mobile":this.device="desktop",window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize"),this.width<968&&this.device!=="mobile"?(this.device="mobile",this.emit("switchdevice",this.device)):this.width>=968&&this.device!=="desktop"&&(this.device="desktop",this.emit("switchdevice",this.device))})}}class G extends l.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}class X extends l.EventEmitter{constructor(e){super(),this.experience=new a,this.renderer=this.experience.renderer,this.assets=e,this.items={},this.queue=this.assets.length,this.loaded=0,this.irradianceMap,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new v,this.loaders.dracoLoader=new y,this.loaders.dracoLoader.setDecoderPath("./draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(const e of this.assets)e.type==="glbModel"&&this.loaders.gltfLoader.load(e.path,i=>{this.singleAssetLoaded(e,i)})}singleAssetLoaded(e,i){this.items[e.name]=i,this.loaded++,this.loaded===this.queue&&this.emit("ready")}}const Z=[{name:"room",type:"glbModel",path:"./models/RoomWebsiteAssets.glb"}];class Y{constructor(){this.experience=new a,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.createPerspectiveCamera(),this.createOrthographicCamera(),this.setOrbitControls()}createPerspectiveCamera(){this.perspectiveCamera=new L(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.x=5,this.perspectiveCamera.position.y=14,this.perspectiveCamera.position.z=12}createOrthographicCamera(){this.orthographicCamera=new C(-this.sizes.aspect*this.sizes.frustrum/2,this.sizes.aspect*this.sizes.frustrum/2,this.sizes.frustrum/2,-this.sizes.frustrum/2,-50,50),this.orthographicCamera.position.y=6.725,this.orthographicCamera.position.z=10,this.orthographicCamera.rotation.x=-Math.PI/6,this.scene.add(this.orthographicCamera)}setOrbitControls(){this.controls=new S(this.perspectiveCamera,this.canvas),this.controls.enableDamping=!0,this.controls.enableZoom=!0}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.top=this.sizes.frustrum/2,this.orthographicCamera.bottom=-this.sizes.frustrum/2,this.orthographicCamera.updateProjectionMatrix()}update(){this.controls.update()}}class j extends l.EventEmitter{constructor(){super(),this.theme="light",this.toggleButton=document.querySelector(".toggle-button"),this.toggleCircle=document.querySelector(".toggle-circle"),this.setEventListeners()}setEventListeners(){this.toggleButton.addEventListener("click",()=>{this.toggleCircle.classList.toggle("slide"),this.theme=this.theme==="light"?"dark":"light",document.body.classList.toggle("dark-theme"),document.body.classList.toggle("light-theme"),this.emit("switch",this.theme)})}}class N{constructor(){this.experience=new a,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new b({canvas:this.canvas,antialias:!0}),this.renderer.useLegacyLights=!0,this.renderer.outputColorSpace=M,this.renderer.toneMapping=E,this.renderer.toneMappingExposure=5.4,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=P,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.render(this.scene,this.camera.orthographicCamera)}}class V{constructor(){this.experience=new a,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.room=this.resources.items.room,this.actualRoom=this.room.scene,this.roomChildren={},this.lerp={current:0,target:0,ease:.1},this.setModel(),this.setScale(),this.onMouseMove()}setModel(){this.actualRoom.children.forEach(r=>{r.castShadow=!0,r.receiveShadow=!0,r instanceof R&&r.children.forEach(n=>{console.log(n.material),n.castShadow=!0,n.receiveShadow=!0}),this.roomChildren[r.name.toLowerCase()]=r});const e=.3,i=.3,h=1,s=new T(16777215,h,e,i);s.position.set(-.5,1.2,-1),s.rotation.x=-Math.PI/1.28,s.rotation.z=Math.PI/2,s.rotation.y=Math.PI/-4.3,this.actualRoom.add(s),this.roomChildren.rectLight=s,this.scene.add(this.actualRoom)}setScale(){this.mobile=window.matchMedia("(max-width: 767px)").matches,this.mobile?this.actualRoom.scale.set(.6,.6,.6):this.actualRoom.scale.set(1,1,1)}onMouseMove(){window.addEventListener("mousemove",e=>{this.rotation=(e.clientX-window.innerWidth/2)*2/window.innerWidth,this.lerp.target=this.rotation*.05})}resize(){this.setScale()}update(){this.lerp.current=o.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.actualRoom.rotation.y=this.lerp.current}}class H{constructor(){this.experience=new a,this.scene=this.experience.scene,this.setFloor(),this.setCircles()}setFloor(){this.geometry=new A(100,100),this.material=new m({color:3945770,side:F}),this.plane=new g(this.geometry,this.material),this.scene.add(this.plane),this.plane.rotation.x=Math.PI/2,this.plane.position.y=-.1,this.plane.receiveShadow=!0}setCircles(){const e=new O(5,64),i=new m({color:15049130});this.circleFirst=new g(e,i),this.circleFirst.position.y=-.29,this.circleFirst.scale.set(0,0,0),this.circleFirst.rotation.x=-Math.PI/2,this.circleFirst.receiveShadow=!0,this.scene.add(this.circleFirst)}resize(){}update(){}}class w{constructor(){console.log(o),console.log(d),this.experience=new a,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.resources=this.experience.resources,this.time=this.experience.time,this.camera=this.experience.camera,o.registerPlugin(d,I,W,"lookAt"),this.positions=[{x:-.15,y:1,z:.6,scale:1},{x:4.42,y:5.18,z:8.46942,scale:3}],this.rotations=[{isEuler:!0,x:-Math.PI/6,y:0,z:0,order:"XYZ"},{isEuler:!0,x:-.397,y:.44,z:.1814,order:"XYZ"}],this.scales=[{x:1,y:1,z:1},{x:.01,y:.01,z:.01}],this.defineAnimationVariables(),this.setScrollTrigger(),this.resize()}setScrollTrigger(){const e=o.timeline({paused:!0}),i=this.camera.orthographicCamera;i.far=1500,i.updateProjectionMatrix(),e.fromTo(i.position,{x:this.positions[0].x,y:this.positions[0].y,z:this.positions[0].z},{duration:1,x:this.positions[1].x,y:this.positions[1].y,z:this.positions[1].z,ease:"linear"},"same").fromTo(i.rotation,{x:this.rotations[0].x,y:this.rotations[0].y,z:this.rotations[0].z},{duration:1,x:this.rotations[1].x,y:this.rotations[1].y,z:this.rotations[1].z,ease:"linear"},"same").fromTo(i.scale,{x:this.scales[0].x,y:this.scales[0].y,z:this.scales[0].z},{duration:1,x:this.scales[1].x,y:this.scales[1].y,z:this.scales[1].z,ease:"linear"},"same"),d.create({trigger:".section-margin",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:h=>{h.direction,e.progress(h.progress)}})}defineAnimationVariables(){this.mobile=window.matchMedia("(max-width: 766px)").matches,this.mobile?(this.positions[1]={x:6.10363,y:3.98048,z:8.53309,scale:3},this.rotations[1]={isEuler:!0,x:-.34669,y:.58263,z:.19623,order:"XYZ"},this.scales[1]={x:.01,y:.01,z:.01}):(this.positions[1]={x:4.41778,y:5.15123,z:8.46942,scale:3},this.rotations[1]={isEuler:!0,x:-.40081,y:.44763,z:.1814,order:"XYZ"},this.scales[1]={x:.01,y:.01,z:.01})}resize(){this.defineAnimationVariables(),this.setScrollTrigger()}update(){}}class K{constructor(){this.experience=new a,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setSunlight()}setSunlight(){this.sunLight=new q("#FFE0A8",1),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=20,this.sunLight.shadow.mapSize.set(4096,4096),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(-1.5,7,3),this.scene.add(this.sunLight),this.ambientLight=new B("#FFCDC0",.5),this.scene.add(this.ambientLight)}switchTheme(e){e==="dark"?(o.to(this.sunLight.color,{r:.03137254901960784,g:.06666666666666667,b:.21176470588235294}),o.to(this.ambientLight.color,{r:.03137254901960784,g:.06666666666666667,b:.21176470588235294}),o.to(this.sunLight,{intensity:1}),o.to(this.ambientLight,{intensity:1})):(o.to(this.sunLight.color,{r:255/255,g:224/255,b:168/255}),o.to(this.ambientLight.color,{r:255/255,g:205/255,b:192/255}),o.to(this.sunLight,{intensity:1}),o.to(this.ambientLight,{intensity:.5}))}resize(){}update(){}}class U extends l.EventEmitter{constructor(){super(),this.experience=new a,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.resources=this.experience.resources,this.theme=this.experience.theme,this.resources.on("ready",()=>{this.environment=new K,this.floor=new H,this.room=new V,this.controls=new w,this.emit("worldready")}),this.theme.on("switch",e=>{this.switchTheme(e)})}switchTheme(e){this.environment&&this.environment.switchTheme(e)}resize(){this.room.resize(),this.controls.resize()}update(){this.room&&this.room.update(),this.controls&&this.controls.update()}}const c=class{constructor(e){if(c.instance)return c.instance;c.instance=this,this.canvas=e,this.scene=new D,this.time=new G,this.sizes=new k,this.camera=new Y,this.renderer=new N,this.resources=new X(Z),this.theme=new j,this.world=new U,this.controls=new w,this.sizes.on("resize",()=>{this.resize()}),this.time.on("update",()=>{this.update()})}resize(){this.camera.resize(),this.world.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update(),this.controls&&this.controls.update()}};let a=c;u(a,"instance");new a(document.querySelector(".experience-canvas"));const J=document.querySelectorAll("[data-popup-target]"),Q=document.querySelectorAll("[data-close-button]"),p=document.getElementById("overlay");J.forEach(t=>{t.addEventListener("click",()=>{const e=document.querySelector(t.dataset.popupTarget);$(e)})});p.addEventListener("click",()=>{document.querySelectorAll(".popup.active").forEach(e=>{x(e)})});Q.forEach(t=>{t.addEventListener("click",()=>{const e=t.closest(".popup");x(e)})});function $(t){t!=null&&(t.classList.add("active"),p.classList.add("active"))}function x(t){t!=null&&(t.classList.remove("active"),p.classList.remove("active"))}