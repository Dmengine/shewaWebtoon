import React from 'react'
import LandingScreen from './components/LandingScreen';
import { newBg } from './assets'


export const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${newBg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }} >
      <LandingScreen />
    </div>
  )
}

export default App;