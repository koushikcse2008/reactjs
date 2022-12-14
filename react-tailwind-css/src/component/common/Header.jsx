import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-green-600 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button class=" navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
      class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor"
        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
      </path>
    </svg>
    </button>
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
    <a class="text-xl text-white" href="!#">Tailwind CSS Learning</a>

    <ul class="navbar-nav flex flex-col pl-10 list-style-none mr-auto">
      <li class="nav-item px-2">
        <NavLink className="nav-link pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white rounded-l rounded-r border-0 border-yellow hover:text-black hover:underline" aria-current="page" to="/">Home</NavLink>
      </li>
      <li class="nav-item pr-2">
        <NavLink className="nav-link pl-4 pr-4 pt-2 pb-2 bg-pink-500 text-white rounded-l rounded-r hover:text-black hover:underline focus:text-gray-700 p-0" to="/login">Login</NavLink>
      </li>
      <li class="nav-item pr-2">
        <NavLink className="nav-link pl-4 pr-4 pt-2 pb-2 bg-orange-500 text-white rounded-l rounded-r hover:text-black hover:underline focus:text-gray-700 p-0" to="/register">Register</NavLink>
      </li>
    </ul>

    </div>

    </div>
  </nav>
    </>
  )
}

export default Header;