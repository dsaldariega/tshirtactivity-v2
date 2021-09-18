import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSelector, useDispatch } from "react-redux";
import TshirtModel from "./components/TshirtModel";

function App() {
  const dispatch = useDispatch();
  const tshirtModel = useSelector((state) => state.tshirtModel);

  return (
    <div>
      <Canvas camera={{ position: [-5, 2, 117], fov: 50 }}>
        <OrbitControls />
        <hemisphereLight position={[0, 10, 0]} />
        <directionalLight position={[0.5, 0, 0.866]} />
        <directionalLight position={[-0.5, 0, -0.866]} />
        <Suspense fallback={null}>
          <TshirtModel dispatch={dispatch} tshirtModel={tshirtModel} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
