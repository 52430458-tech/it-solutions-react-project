

function App() {
  return (
    <>
    
    
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center gap-2">
          <a className="navbara">IT Solutions</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <h1 className="heading text-center">IT Solutons</h1>
      <div className="text-center d-flex flex-wrap justify-content-center gap-3">
        
        <a href="login.index">Login</a>
      </div>
      <h1 className="solutions text-center">Welcome to IT Solution</h1>
      <p className="text-center">
        We provide proffessional IT services for your business
      </p>
      <div className="text-center">
        <a href="contact.html">Contact Us</a>
      </div>
      <h1 id="about" className="text-center">
        Our Services
      </h1>
      <div className="table-responsive d-flex justify-content-center">
        <table border="7" className="text-center" width="80%">
          <tr>
            <td>Web Development</td>
            <td>Building responsive Websites</td>
          </tr>
          <tr>
            <td>App Development</td>
            <td>Creating mobile apps for ios & Android</td>
          </tr>
          <tr>
            <td>IT Consulting</td>
            <td>Professional advice to grow your business</td>
          </tr>
        </table>
      </div>
      <h1 className="our text-center">Our Achievements</h1>
      <div className="container my-5">
        <div className="row g-4 justify-content-center text-center">
          <div className="col-12 col-md-4">
            <div className="card" style={{width: '18rem' , margin: 'auto' }}>
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.RTtgWkJbFCvRl7Lu-AHLlAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="cardtitle">Projects completed</h5>
                <p className="card-text">95%</p>
                <a href="#" className="btn btn-primary">
                  view projects
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card" style={{ width: '18rem' , margin: 'auto' }}>
              <img
                src="https://img.freepik.com/premium-photo/hand-holding-abstract-digital-globe-palm_766625-2065.jpg"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="cardtitle">Clients over the world</h5>
                <p className="card-text">90%</p>
                <a href="#" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card" style={{ width: '18rem', margin: 'auto'}}>
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.3g6FzOOYoVqE-8l-L7MzFwHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="cardtitle">Years of Experiences</h5>
                <p className="card-text">+10</p>
                <a href="#" className="btn btn-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center"
        style= {{ backgroundColor: 'rgba(0, 0, 0, 0)' , padding: '20px', color: 'white' }}
      >
        <footer>
          <strong>Contact Us</strong>
        </footer>
        <footer>
          Phone:+961/71383888
          <a
            className="email"
            href="mailto:info@itsolutions.com"
            style={{ color: 'red' , fontSize: 'large', fontWeight: 'bold' }}
          >
            info@itsolutons.com
          </a>
        </footer>
        <footer>Address: 123 Tech Street, City</footer>
        <br />
        <footer>©️ 2026 IT Solutions. All Rights Reeserved.</footer>
      </div>
     
    </>
  );
}

export default App;