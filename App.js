import React,{useState} from 'react';
import {AppLoading} from 'expo'

import { boot } from './src/utils/boot';
import { AppNavig } from './src/navigation/AppNavig';

export default function App() {
  const [isReady,setIsReady] = useState(false)

  if(!isReady){
    return <AppLoading onFinish={()=>setIsReady(true)} onError={err=>console.log(err)} startAsync={boot}/>
  }

  return <AppNavig/>
}

