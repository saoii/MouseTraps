import React from 'react';

export function About() {
  return (
    <>
      <section className="banner">
        <img src="images/mousehouse.png" alt="" />
        <div className="inner-content col-md-12">
          <div className="container">
            <h1>Disney Vacation Planning</h1>
            <span>Plan your great big beautiful tomorrow</span>
            <p></p>
          </div>
        </div>
      </section>
      <section className="sec_include">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 adj_text">
              <h3>Reduce Anxiety</h3>
              <p>
                I take the Anxiety out of planning. You will get support before
                during and after your trip. Text me with any quotes and get my
                advice on your next move. Just like I'm there with you.
              </p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <img src="./images/firstTrip.jpg" alt="Public" />
              <div className="readtext">
                <h3>First trip</h3>
                <p>
                  Took my family to WDW back in 2011, started going yearly in
                  2014.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_include1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 adj_text">
              <div className="paragraph-second">
                <h3>Infinity and Beyond</h3>
                <p>Let me help build a plan that will maximize your trip</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 adj_text">
              <img src="images/alfredO.jpg" alt="Public" />
              <div className="readtext">
                <h3>Alfred O</h3>
                <p>Your guide to all things WDW.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
