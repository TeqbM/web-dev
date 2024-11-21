import {  Link, NavLink } from "react-router-dom";

export default function Header(){
     return(
          <header className="bg-sky-50 border-b border-sky-100 py-2">
               <div className="container">
                    <nav className="flex justify-between items-center">
                         <h1 className="text-3xl font-bold text-sky-600">
                              <Link to='/'>loGo</Link>
                         </h1>
                         <div>
                              <ul className="nav-bar flex">
                                   <li>
                                        <NavLink to="/"> Home</NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/blog"> Blog</NavLink>
                                   </li>
                                   <li>
                                        <NavLink to="/gallery"> gallery</NavLink>
                                   </li>
                              </ul>
                         </div>
                    </nav>
               </div>
          </header>

     )
}
