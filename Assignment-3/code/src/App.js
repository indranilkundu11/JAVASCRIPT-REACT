import React from 'react';
import logo from './logo.svg';
import './App.css';

var arrow="<";
var rightarrow=">";
var status ={
  1: "suspended",
  2: "completed",
  3: "cancelled",
}
var Appointments={
  name= "Indranil",
  employeeid= 244555,
  appointmenton: new Date().toDateString(),
  email= "kunduindranil0@gmail.com",
  phone= 3547895665,
  orderInfo:{
    status:status[1],
    Door: "Mark",
    Time: new Date().toDateString(),
  },
  person:{
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    title: "hey its me",
    description:
    A paragraph (from Ancient Greek παράγραφος (parágraphos) 'to write beside') is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences.[1] Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.


  },
};
function App() {
  return (
    <div className="site-container">
      <div className="order-details">
        <div className="nav">
          <div className="nav-container">
            <a className="nav-arrow" href="#">{arrow}</a>
            <h1 className="nav-title">
              {
                Appointments.name
              }
            </h1>
            <span className="nav-text">(Appointments.employeeid)</span> 
            <button className="btn nav-btn">print</button>
          </div>

          
        </div>
      </div>
      <div className="container">
        <div className="customer-info-block">
          <p className="text">
            <span>Appointment on</span>
            {
              Appointments.Appointmenton
            }

          </p>
          <p className="text">
            <span>Email</span>
            {
              Appointments.email
            }

          </p>
          <p className="text">
            <span>Phone</span>
            {
              Appointments.phone
            }

          </p>
        </div>
      </div>
      <div className="order.info grid block">
        <div className="unit one-third">
          <p className="text text-label">Status</p>
          <p className="text order-status">(Appointments.orderInfo.status)</p>
        </div>
        <div className="unit one-third">
          <p className="text text-label">Door</p>
          <p className="text order-status">(Appointments.orderInfo.Door)</p>
        </div>
        <div className="unit one-third">
          <p className="text text-label">Time</p>
          <p className="text order-status">(Appointments.orderInfo.Time)</p>
        </div>
      </div>

      <ul className="product-list block">
        <li className="product">
          <label className="img custom-checkbox">
            <input type="checkbox" className="product-input" value=""></input>
            <span className="custon-checkbox-indicator"></span>
            <img className="avatar" src={Appointments.person.avator} width="100" height="100" />
          </label>
          </li>
          <li>
          <a href="#" className="product-desc">
            <span className="product-arrow arrow">
              {rightarrow}
            </span>
            <div className="product-info">
              <h2 className="product-title text">{Appointments.person.title}</h2>
              <p className="text-help text">
                {Appointments.person.description}
              </p>
            </div>
          </a>
        </li>
        <li>
        <span className="product-arrow arrow">
              {rightarrow}
            </span>
        </li>
      </ul>

    </div>
  );
}

export default App;
