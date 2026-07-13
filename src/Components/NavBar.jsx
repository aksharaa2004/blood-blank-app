import React from 'react'

const NavBar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blood Blank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add Donor</a>
        <a class="nav-link" href="/ViewDonor">View Donor</a>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar