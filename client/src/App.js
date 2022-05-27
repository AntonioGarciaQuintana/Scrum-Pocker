import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");
const room = 15;
function App() {
  return (
    <div className="container">
      <nav className="navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Submit estimate</span>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="card" style={{"width": "9rem", "height": '9rem'}} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnomfM978rdFofli7twbY-tHj2EkHRfri_nw&usqp=CAU" width={'50'} height={'100'}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">?</h5>
                  {/* <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> */}
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card chat-app">
            <div id="plist" className="people-list">
              <h5>People list</h5>
              {/* <div className="input-group">
                <span className="input-group-text">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div> */}
              <ul className="list-unstyled chat-list mt-2 mb-0">
                <li className="clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Vincent Porter</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle offline"></i> left 7 mins ago{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix active">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Aiden Chavez</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Mike Thomas</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Christian Kelly</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle offline"></i> left 10 hours ago{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar8.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Monica Ward</div>
                    <div className="status">
                      {/* {" "} */}
                      <i className="fa fa-circle online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">Dean Henry</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle offline"></i> offline since Oct
                      28{" "}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="chat">
              <div className="chat-header clearfix">
                <div className="row">
                  <div className="col-lg-6">
                    <a
                      // href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#view_info"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0">Aiden Chavez</h6>
                      <small>Last seen: 2 hours ago</small>
                    </div>
                  </div>
                  <div className="col-lg-6 hidden-sm text-end">
                    <a
                      // href="javascript:void(0);"
                      className="btn btn-outline-secondary"
                    >
                      <i className="fa fa-camera"></i>
                    </a>
                    <a
                      // href="javascript:void(0);"
                      className="btn btn-outline-primary"
                    >
                      <i className="fa fa-image"></i>
                    </a>
                    <a
                      // href="javascript:void(0);"
                      className="btn btn-outline-info"
                    >
                      <i className="fa fa-cogs"></i>
                    </a>
                    <a
                      // href="javascript:void(0);"
                      className="btn btn-outline-warning"
                    >
                      <i className="fa fa-question"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="chat-history">
                <ul className="m-b-0">
                  <li className="clearfix">
                    <div className="message-data text-end">
                      <span className="message-data-time">10:10 AM, Today</span>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="avatar"
                      />
                    </div>
                    <div className="message other-message float-right">
                      {" "}
                      Hi Aiden, how are you? How is the project coming along?{" "}
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="message-data">
                      <span className="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div className="message my-message">
                      Are we meeting today?
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="message-data">
                      <span className="message-data-time">10:15 AM, Today</span>
                    </div>
                    <div className="message my-message">
                      Project has been already finished and I have results to
                      show you.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message clearfix">
                <div className="input-group mb-0">
                  <span className="input-group-text">
                    <i className="fa fa-send"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter text here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
