import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
      <>
          <header>
            <h1 className="site-heading text-center text-faded d-none d-lg-block">
              <span className="site-heading-upper text-primary mb-3">A Free Bootstrap Business Theme</span>
              <span className="site-heading-lower">Business Casual</span>
            </h1>
          </header>
          <Menu />
      </>
  )
}

export default Header