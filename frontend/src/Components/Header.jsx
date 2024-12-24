import {  Link, NavLink } from "react-router-dom";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function Header(){
     
     useEffect(() => {
          const timeline = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
        
          timeline.fromTo('.navbar', { opacity: 0, y: -100, }, { opacity: 1, y: 0, });
          timeline.fromTo('.nav-item', { opacity: 0, y: -100, stagger: 0.2 }, { opacity: 1, y: 0, stagger: 0.2 });

        }, []);
        
        
        

     return(
          <header className="py-2 bg-slate-800/75 backdrop-blur sticky top-0 z-50">
               <div className="container">
                    <nav className="flex justify-between items-center navbar">
                         <h1 className="text-3xl font-bold ">
                              <Link to='/'>loGo</Link>
                         </h1>
                         <div className="">
                              <ul className="nav-bar flex [*&_a]:text-white">
                                   <li className="nav-item">
                                        <NavLink to="/"> Home</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink to="/blog"> Blog</NavLink>
                                   </li>
                                   <li className="nav-item">
                                        <NavLink to="/gallery"> gallery</NavLink>
                                   </li>
                              </ul>
                         </div>
                    </nav>
               </div>
          </header>

     )
}
