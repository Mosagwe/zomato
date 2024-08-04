import React from "react";


function QuickSearch() {
  return (
    <div className="container mt-5">
      <h2>Quick Searches</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card quick-searches">
            <img
              src=""
              className="card-img-top"
              alt="Breakfast"
              style={{ width: 400, height: 300 }}
            />
            <div className="card-body">
              <h5 className="card-title">Breakfast</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card quick-searches">
            <img
              src=""
              className="card-img-top"
              alt="Lunch"
              style={{ width: 400, height: 300 }}
            />
            <div className="card-body">
              <h5 className="card-title">Lunch</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card quick-searches">
            <img
              src=""
              className="card-img-top"
              alt="Dinner"
              style={{ width: 400, height: 300 }}
            />
            <div className="card-body">
              <h5 className="card-title">Dinner</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card quick-searches mt-4">
            <img
              src=""
              className="card-img-top"
              alt="Snacks"
              style={{ width: 400, height: 300 }}
            />
            <div className="card-body">
              <h5 className="card-title">Snacks</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card quick-searches mt-4">
            <img
              src=""
              className="card-img-top"
              alt="Drinks"
              style={{ width: 400, height: 300 }}
            />
            <div className="card-body">
              <h5 className="card-title">Drinks</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card quick-searches mt-4">
            <img
              src=""
              className="card-img-top"
              alt="Nightlife"
              style={{ width: 400, height: 300 }}
            />
            <div className="card-body">
              <h5 className="card-title">Nightlife</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
