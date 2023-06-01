import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

const routes = [
    {
        path:'/',
        name:"Home"
    },
    {
        path:'/',
        name:"Home 2"
    },
    {
        path:'/',
        name:"Home 3"
    },
    {
        path:'/',
        name:"Home 4"
    },
    {
        path:'/',
        name:"Home 5"
    }

]; 

const CprogrammingSidebar = ({children}) => {
  return (
    <div className='CprogrammingSidebarComponent'>
        <div className="CprogrammingSidebarContainer">
            <section className='routes'>
            { routes.map((route)=>(
                  <div className="whole">
                      <NavLink to={route.path} key={route.name} className='link'>
                        <div className="link_text">{route.name}</div>
                        <i class="fa fa-angle-double-right" aria-hidden="true">
                        </i>

                        </NavLink>
                  </div>
                )) }
                <main>{ children }</main>
            </section>
        </div>
    </div>
  )
}

export default CprogrammingSidebar