import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg" style={{ backgroundColor: "#cab9a7" }}>
      <MDBContainer fluid>
        <Link to="/Aboutme">
          <MDBNavbarBrand className="text-white">Lorena Morales</MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          className="text-white"
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <Link to="/Aboutme">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" className="text-white">
                  About Me
                </MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/Projects">
              <MDBNavbarItem>
                <MDBNavbarLink className="text-white">Projects</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/Resume">
              <MDBNavbarItem>
                <MDBNavbarLink className="text-white" >Resume</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
            <Link to="/Contact">
              <MDBNavbarItem>
                <MDBNavbarLink className="text-white">Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}