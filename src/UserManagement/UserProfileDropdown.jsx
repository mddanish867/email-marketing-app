import { useState, useRef, useEffect } from 'react'
import { useNavigate, } from 'react-router-dom'

export default function UserProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const router = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...')
    router('/login')
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {/* {Danish.slice(0, 2).toUpperCase()} */}
            DA
          </span>
        </div>       
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
         <span className="text-gray-700">Danish</span>
          <a
            href="profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            onClick={() => router('/profile')}
          >
            Profile
          </a>
          <a
            href="/dashboard"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            onClick={() => router('/role-management')}
          >
            Dashboard
          </a>
          <a
            href="/role-management"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            onClick={() => router('/role-management')}
          >
            Role Management 
          </a>
          <a
            href="/pricing"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            onClick={() => router('/pricing')}
          >
            Billing
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            onClick={() => router('/settings')}
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            onClick={handleLogout}
          >
            Logout
          </a>
        </div>
      )}
    </div>
  )
}