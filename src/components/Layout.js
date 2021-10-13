import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { useStateContext } from '../context/StateProvider'
import { Link } from 'react-router-dom'
import { LogoutIcon } from '@heroicons/react/outline'
import Modal from './Modal'

const Layout = ({ children }) => {
  const { serviceName, isLogin } = useStateContext()
  const history = useHistory()
  const location = useLocation()
  const [modalOn, setModalOn] = useState(false)

  useEffect(() => {
    if (!isLogin) history.push('/login')
  })

  return (
    <div className="flex items-center flex-col min-h-screen text-gray-600 font-mono">
      <header className="flex items-center pl-8 h-14 bg-gray-600 w-screen">
        <nav className="bg-gray-600 w-screen">
          <div className="flex justify-between">
            <div className="">
              <span className="font-semibold text-xl tracking-tight text-white">
                {serviceName}!!
              </span>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/"
              >
                Root
              </Link>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/component-a"
              >
                ComponentA
              </Link>
            </div>
            <div className="">
              <LogoutIcon
                className="h-8 w-10 text-gray-200 hover:bg-gray-700 px-1 mr-5 rounded"
                aria-hidden="true"
                onClick={() => {
                  setModalOn(true)
                }}
              />
              {modalOn ? <Modal setModalOn={setModalOn} /> : null}
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {location.pathname === '/' ? null : <Link to="/">Top</Link>}
      <footer className="bg-gray-400 w-screen absolute bottom-0 h-14">
        <div className="flex justify-center items-center">
          <p className="pt-3">{serviceName}@2021</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout

