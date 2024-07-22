// console.log('javascript is running')
import * as THREE from 'three'

// canvas

const canvas = document.querySelector('canvas.webgl')
// scene
const scene = new THREE.Scene()

const geometry= new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'yellow'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// cam
const sizes ={
    width : 800,
    height : 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height)
camera.position.z=3
scene.add(camera)

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene,camera)
