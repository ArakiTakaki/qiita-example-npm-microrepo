import * as THREE from 'three';
export class SampleObject extends THREE.Object3D {
  constructor() {
    super();
    this.add(
      new THREE.Mesh(
        new THREE.BoxGeometry(10, 10, 10),
        new THREE.MeshDistanceMaterial()
      )
    );
  }
}