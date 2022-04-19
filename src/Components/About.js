import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const mapspic = "images/" + this.props.data.maps;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Espressoteric profile pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                   

              
                  </p>
                </div>
                <div className="columns download">
                  <p>
                  <h2>Hours:</h2>
                    
                    <span>Monday-Friday: 9am-5pm</span>
                    <br />
                    <span>Saturday: 10am-2pm</span>
                    <br />
                    <span>Sunday: Closed</span>
                  </p>
                  </div>
                <div>
                <iframe src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJu18GY0m7woARJwBGwsa3N88&key=AIzaSyAtDm3Pvt2kZFB638hnHi2HRCW7hYP-6-M"} width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
              </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
