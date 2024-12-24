import React from 'react'
import { Link } from '@inertiajs/react'
const Layout = ({children}) => {
  return (
    <div>
    <header>
        <nav>
            <Link className='nav-link' href="/">Home</Link>
            <Link className='nav-link' href="/create">Create</Link>
        </nav>
    </header>
    <main>
        {children}
      </main>


</div>
  )
}

export default Layout