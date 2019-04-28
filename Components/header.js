import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">
      MIS
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            data-toggle="dropdown"
          >
            Products
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Product 1
            </a>
            <a class="dropdown-item" href="#">
              Product 2
            </a>
            <div class="dropdown-divider" />
            <a class="dropdown-item" href="#">
              Another Product
            </a>
          </div>
        </li>

        <li class="nav-item active">
          <a class="nav-link" href="/associates">
            Associates <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Allocations
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Work Orders
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Forecast
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Billing
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Administration
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Reports
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
);

export default Header;
