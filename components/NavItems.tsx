import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const NavItems = () => {
  const user = {
    name: "Rohan",
    email: "315rohan@gmail.com",
   
  }
  return (
    <section className='nav-items'>
      <Link to='/' className='link-logo'>
      <img src='/assets/icons/logo.svg' alt='logo' className='size-[30px]' />
      <h1>Voyago</h1>
      </Link>

      <div className='container'>
        <nav>
          {sidebarItems.map(({id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({isActive}: {isActive: any}) => (
                <div className={cn('group nav-item', {
                  'bg-primary-100 !text-white': isActive
                })}>
                  <img src={icon}
                  alt={label}
                  className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert ' : 'text-dark-200'}`}>
                  </img>
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className='nav-footer'>
          <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || "Rohan"}></img>

          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>

          <button onClick={() => {
            console.log('logout')
          }} className='cursor-pointer'>
            <img src='/assets/icons/logout.svg'
            alt='logout'
            className='size-6'></img>
          </button>

        </footer>

      </div>
      </section>
  )
}

export default NavItems