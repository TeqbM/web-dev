import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  useEffect(() => {
    // GSAP Timeline for navbar animation
    const timeline = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });

    timeline
      .from('.navbar', { y: -100, opacity: 0 }) // Navbar slides in from top
      .from('.nav-item', { opacity: 0, x: -100, stagger: 0.2 }, '-=0.2'); // Links animate from left
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#services">Services</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
