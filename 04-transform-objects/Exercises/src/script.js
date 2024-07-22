import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// positioning
// mesh.position.x = 0.7
// mesh.position.y = -0.4
// mesh.position.z = -1
//console.log(mesh.position.length()) // dist from origin to obje
//mesh.position.normalize() // set the vector to 1
//console.log(mesh.position.length()) // dist from origin to obje
// mesh.position.set(0.7, -0.6, -1)

/**Scale 
mesh.scale.x = 2
mesh.scale.y = 0.5
mesh.scale.z = 0.5
*/
// mesh.scale.set(2,0.5, 0.5)


/**
// Axes Helper
const axesHelper = new THREE.AxesHelper() // it is an obj, so add it to scene
scene.add(axesHelper)
*/

/**Rotation */
// mesh.rotation.reorder('YXZ') // change the order of rotation
// mesh.rotation.y =  Math.PI //to do half rotation
// mesh.rotation.z =  2 //to do half rotation


/**
 GROUPING!!
 */
const group = new THREE.Group()
group.position.set(0, 1, 0)
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
cube3.position.x = 2
group.add(cube3)



/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)
//console.log(mesh.position.distanceTo(camera.position)) // dist from camera to obje

// camera.lookAt(mesh.position) //set the cam so it points to the centre of the objeect



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)