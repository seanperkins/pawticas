import Link from 'next/link'
import {useState} from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap'
import {FaInstagram} from 'react-icons/fa'

export default function MyNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="white" expand="md" light className="shadow-sm">
        <NavbarBrand className="brand-text" href="/">
          Pawticas
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <a
            className="nav-link social-link"
            href="https://www.instagram.com/pawticas.dc/"
            target="_blank"
          >
            <span className="d-md-none">Instagram</span> <FaInstagram />
          </a>
        </Collapse>
      </Navbar>
    </div>
  )
}
