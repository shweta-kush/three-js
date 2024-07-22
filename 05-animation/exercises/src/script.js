import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap)
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// const ahelp= new THREE.AxesHelper(2)
// scene.add(ahelp)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

//time
//let time= Date.now()

// Clock
//const clock= new THREE.Clock()

gsap.to(mesh.position, { duration:1, delay: 1, x:2})
gsap.to(mesh.position, { duration:1, delay: 2, x:0})

// animation
const tick = () =>
{
    //clock
    //const elapsedTime= clock.getElapsedTime()
    // adding time stamps

    /**
    // const time = Date.now()
    const currTime= Date.now()
    const deltaTime= currTime - time
    time= currTime
     */

    // update object
    // mesh.rotation.y += 0.002 * deltaTime
    //mesh.position.x = Math.sin(elapsedTime)
    //mesh.position.y = Math.cos(elapsedTime)


    //render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
    
}
tick()