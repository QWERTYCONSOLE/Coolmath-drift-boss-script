(function() {
    'use strict';
    console.log("🧱 Heavy Brick Mod Loaded...");

    let hasHacked = false;
    let carMesh = null;

    const originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = function(callback) {
        return originalRAF.call(window, function(timestamp) {
            callback(timestamp);

            if (hasHacked && carMesh && carMesh.physicsImpostor) {
                let vel = carMesh.physicsImpostor.getLinearVelocity();
                
                if (Math.abs(vel.x) > 0.5) {
                    carMesh.physicsImpostor.setLinearVelocity(new window.BABYLON.Vector3(0, vel.y, vel.z));
                }
            }

            if (hasHacked) return;

            if (typeof window.BABYLON !== 'undefined' && window.BABYLON.Engine && window.BABYLON.Engine.Instances.length > 0) {
                let engine = window.BABYLON.Engine.Instances[0];
                let scene = engine.scenes[0];
                
                if (scene) {
                    if (window.BABYLON.Vector3) {
                        scene.gravity = new window.BABYLON.Vector3(0, -20, 0); 
                    }
                    
                    if (scene.meshes) {
                        scene.meshes.forEach(mesh => {
                            if (mesh.physicsImpostor && mesh.position.y > 0) {
                                console.log("🚗 Found Car! Applying brick physics.");
                                carMesh = mesh;
                                
                                mesh.physicsImpostor.setMass(500);
                                mesh.physicsImpostor.setFriction(100); 
                                mesh.physicsImpostor.setRestitution(0);
                            }
                        });
                    }
                    
                    hasHacked = true;
                }
            }
        });
    };
})();
