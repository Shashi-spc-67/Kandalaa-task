import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navbar2.css"

function Navbar2() {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class=" header-container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="#">ALL JEWELLARY</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="#">GOLD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="#">SILVER</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="#" tabindex="-1" aria-disabled="true">DIAMOND</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="#" tabindex="-1" aria-disabled="true">MEN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="#" tabindex="-1" aria-disabled="true">WOMEN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="#" tabindex="-1" aria-disabled="true">GIFTS</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GOLD RATE
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" href="#">GOLD RATE 18KT:₹ 5,2677/G</Link></li>
            <li><Link class="dropdown-item" href="#">GOLD RATE 18KT:₹ 5,2677/G</Link></li>
            <li><Link class="dropdown-item" href="#">GOLD RATE 18KT:₹ 5,2677/G</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" href="#" tabindex="-1" aria-disabled="true">CONTACT US</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

     </div>
  )
}

export default Navbar2