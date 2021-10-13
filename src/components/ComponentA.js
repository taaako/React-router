import React from 'react'
import { useHistory } from 'react-router'
import { useStateContext } from '../context/StateProvider'

const ComponentA = () => {
  const history = useHistory()
  const { isOn, setIsOn } = useStateContext()

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold my-1">ComponentA</p>
      <p onClick={() => history.push('/')}>Go Root</p>
      on? off?:{isOn ? 'on' : 'off'}
      <button
        type="button"
        className="bg-gray-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOn((isOn) => !isOn)}
      >
        toggle
      </button>
    </div>
  )
}

export default ComponentA
