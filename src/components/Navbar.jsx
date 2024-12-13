import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white px-2 relative'>
      <div className='sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-10 my-2'>
          {/* Logo */}
          <div className='text-md font-bold text-gray-800'>
            <a href='#hero' className='hover:text-blue-800'>
              Finland Trip
            </a>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8 text-sm'>
            <a
              href='#cabin'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-blue-800'
            >
              Cabin
            </a>
            <a
              href='#route'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-blue-800'
            >
              Route
            </a>
            <a
              href='#car'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-blue-800'
            >
              Car
            </a>
            <a
              href='#checklist'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-blue-800'
            >
              Check List
            </a>
            <a
              href='/sightseeing'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-blue-800'
            >
              Sightseeing
            </a>
            <a
              href='/trails'
              className='text-gray-600 hover:text-finland-blue hover:border-b-2 hover:border-blue-800'
            >
              Trails
            </a>
            <a
              href='#playlists'
              className='text-gray-600 border-b-2 border-white hover:text-finland-blue hover:border-b-2 hover:border-blue-800'
            >
              Playlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-finland-blue focus:outline-none'
              onClick={toggleMenu}
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-md mt-2 space-y-2 z-50'>
            <a
              href='#cabin'
              className='block text-gray-600 hover:text-finland-blue hover:bg-gray-100 px-4 py-2 rounded-md'
            >
              Cabin
            </a>
            <a
              href='#route'
              className='block text-gray-600 hover:text-finland-blue hover:bg-gray-100 px-4 py-2 rounded-md'
            >
              Route
            </a>
            <a
              href='#car'
              className='block text-gray-600 hover:text-finland-blue hover:bg-gray-100 px-4 py-2 rounded-md'
            >
              Car
            </a>
            <a
              href='#checklist'
              className='block text-gray-600 hover:text-finland-blue hover:bg-gray-100 px-4 py-2 rounded-md'
            >
              Check List
            </a>
            <a
              href='/sightseeing'
              className='block text-gray-600 hover:text-finland-blue hover:bg-gray-100 px-4 py-2 rounded-md'
            >
              Sightseeing
            </a>
            <a
              href='/trails'
              className='block text-gray-600 hover:text-finland-blue hover:bg-gray-100 px-4 py-2 rounded-md'
            >
              Trails
            </a>
            <a
              href='#playlists'
              className='block text-gray-600 hover:text-finland-blue hover:bg-gray-100 px-4 py-2 rounded-md'
            >
              Playlist
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
