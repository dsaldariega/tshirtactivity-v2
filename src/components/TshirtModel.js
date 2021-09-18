import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGroupToState } from "./../redux/actions";

function TshirtModel(props) {
  const { dispatch, tshirtModel} = props;
  console.log('%c 🧀 tshirtModel: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', tshirtModel);
  const scene = useThree((state) => state.scene);
  const gltf = useGLTF("tshirtModel.glb");
  const { Scene } = gltf.nodes;
  useEffect(() => {
    scene.add(Scene);
    dispatch(addGroupToState(Scene));
  });
  return <></>;
}

export default TshirtModel;
