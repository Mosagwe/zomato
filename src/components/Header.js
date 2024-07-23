import React from "react";

const Header = () => {
  return (
    <div className="hero">
      <h1>Discover the best food & drinks in Delhi NCR</h1>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for restaurants, cuisines, and dishes"
                />
                <div className="input-group-append">
                  <button className="btn btn-danger" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
