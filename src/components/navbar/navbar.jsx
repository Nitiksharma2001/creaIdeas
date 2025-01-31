import React from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-[#f9b899] text-black font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-lg">
                        <CiMenuFries />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a>Projects</a>
                            <ul className="p-2">
                                <li><Link to='/cascading-filter'>Cascading Filters</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl font-bold">Creaideas</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    <li>
                        <details>
                            <summary>Projects</summary>
                            <ul className="p-2">
                                <li><Link to='/cascading-filter' className='text-nowrap'>Cascading Filters</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    )
}
