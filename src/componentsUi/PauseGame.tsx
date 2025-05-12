"use client"
import { useDispatch, useSelector } from 'react-redux';
import { togglePause } from './store/pauseSlice';
import type { RootState } from './store';

const PauseGame = () => {
    const dispatch = useDispatch()
    const paused =  useSelector((state: RootState) => state.pause.paused)

    return (
    <div>
        <p>PauseGame</p>
        <button onClick={()=>dispatch(togglePause())}> </button>
        { paused ? "resume" : "pause" }
    </div>
  )
}

export default PauseGame