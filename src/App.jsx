import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Platform from './component/Platform';
import Pricing from './component/Pricing';
import Insight from './component/Insight';
import ContactUs from './component/ContactUs';
import Flinko from './component/Flinko';
import Signup from './component/btn-nav/Signup';
import Signin from './component/btn-nav/Signin';
import RequestDemo from './component/RequestDemo';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>

          <Route path="/flinko" component={Flinko} />
          <Route path="/platform" component={Platform} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/insight" component={Insight} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/requestdemo" component={RequestDemo} />
        </div >
      </Router>

      {/* <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
    </div>
  )
}

export default App
