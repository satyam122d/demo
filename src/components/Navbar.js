import React from 'react';

const Navbar = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/content">Content</a>
        </li>
      </ul>
     </>
  )
}

export default Navbar;
