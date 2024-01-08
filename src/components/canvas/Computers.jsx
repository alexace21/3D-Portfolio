import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, lights }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  if (lights) {
    return (
      <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
      // reference
        object={computer.scene}
        // SIZE
        scale={isMobile ? 0.7 : 0.75}
        // POSITION on the display
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        // ROTATION on the screen
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
    )
  } else {
    const randomNumer = Math.random() * 10;
    console.log(randomNumer)
    if (randomNumer < 2.7) {
      
      return (
        <mesh>
          <hemisphereLight intensity={0.15} groundColor='black' />  
        <primitive
        // reference
          object={computer.scene}
          // SIZE
          scale={isMobile ? 0.7 : 0.75}
          // POSITION on the display
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          // ROTATION on the screen
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
      )

    } else {
      
      return (
        <mesh>
        <primitive
        // reference
          object={computer.scene}
          // SIZE
          scale={isMobile ? 0.7 : 0.75}
          // POSITION on the display
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          // ROTATION on the screen
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
      )

    }
    
  }

  // return (
  //   <mesh>
  //     <hemisphereLight intensity={0.15} groundColor='black' />
  //     <spotLight
  //       position={[-20, 50, 10]}
  //       angle={0.12}
  //       penumbra={1}
  //       intensity={1}
  //       castShadow
  //       shadow-mapSize={1024}
  //     />
  //     <pointLight intensity={1} />
  //     <primitive
  //     // reference
  //       object={computer.scene}
  //       // SIZE
  //       scale={isMobile ? 0.7 : 0.75}
  //       // POSITION on the display
  //       position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
  //       // ROTATION on the screen
  //       rotation={[-0.01, -0.2, -0.1]}
  //     />
  //   </mesh>
  // );
};

const ComputersCanvas = ({lights}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense allows us to use Loader while our model is loading...  */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows us to move our model around using mouse input  */}
        <OrbitControls
        // No zoom
          enableZoom={false}
          // Set boundaries and control over the ability to move the model
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} lights={lights} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
