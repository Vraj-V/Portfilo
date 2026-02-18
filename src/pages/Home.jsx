import React,{Suspense,useState,useEffect,useRef} from 'react'
{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    POPUP
</div> */}
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import { Island } from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import  Plane  from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
const Home = () => {

    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.7;
    audioRef.current.loop = true;
    
    const [isRotating, setIsRotating] = useState(true);
    const [currentStage,setCurrentStage] = useState(1);
    const [isSoundOn, setIsSoundOn] = useState(true);

    useEffect(() => {
        if(isSoundOn){
            audioRef.current.play();
        }
        return () => {
            audioRef.current.pause();
        }
    }, [isSoundOn]);

    const adjustIslandForScreenSize =()=>{
        let screenScale= null;
        let ScreenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];
        if(window.innerWidth < 768){
            screenScale= [0.9,0.9,0.9]
    }else{
        screenScale = [1, 1, 1];
    }
    return [screenScale,ScreenPosition,rotation];
}


// Plane glb

const adjustPlaneForScreenSize =()=>{
        let screenScale, screenPosition;

        if(window.innerWidth < 768){
            screenScale= [1.5, 1.5 , 1.5];
            screenPosition = [0, -1.5, 0];
    }else{
        screenScale = [3, 3, 3];
        screenPosition = [0, -4, -4];
    }
    return [screenScale,screenPosition];
}

const [isLandScale,isLandPosition,isLandRotation] = adjustIslandForScreenSize();
const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className=" w-full h-screen relative">
<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    {currentStage && <HomeInfo currentStage={currentStage} />}
</div>
    <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
    camera={{near:0.1, far:1000}}
    >
        <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor='#b1eff' groundColor='#000000' intensity={1}/>
            
            <Bird />
            <Sky isRotating={isRotating} />
            <Island rotation={isLandRotation}  position={isLandPosition} scale={isLandScale} isRotating={isRotating} setIsRotating={setIsRotating} currentStage={currentStage} setCurrentStage={setCurrentStage}   />
            
            
            <Plane isRotating={isRotating}
            scale={planeScale} 
            position={planePosition}  
            rotation={[0,20,0]} />
        
        
        
        </Suspense>
    </Canvas>
        <div className="absolute bottom-2 left-2  z-10 ">
            <img src={isSoundOn ? soundon : soundoff} 
                alt="sound" 
                className="w-10 h-10 cursor-pointer object-contain" 
                onClick={() => setIsSoundOn(!isSoundOn)} />
        </div>
    </section>
  )
}

export default Home