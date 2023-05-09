import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

export default async function stlToGltf(stlFileUrl) {
  return new Promise((resolve, reject) => {
    const loader = new STLLoader();
    loader.load(stlFileUrl, geometry => {
      const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
      const scene = new THREE.Scene();
      scene.add(mesh);

      const exporter = new GLTFExporter();

      exporter.parse(scene, gltf => {
        // resolve(gltf);
        const blob = new Blob([JSON.stringify(gltf)], {
          type: 'application/octet-stream',
        });
        // Blob URL 생성
        const url = URL.createObjectURL(blob);
        resolve(url);
      });
    });
  });
}
