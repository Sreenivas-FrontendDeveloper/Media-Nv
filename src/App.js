import { CiSearch } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar" 


import "./App.css"

const App = () => (
  <div className="app-container">
    <SideBar />
    <div className="navbar-and-bid-part">
      <Navbar />
      <div className="bid-part">
        <div className="search-bar-line">
          <p className="live">Live</p>
          <p className="search-option">Results</p>
          <p className="search-option">History</p>
          <div className="search-bar-container">
            <CiSearch size={25} />
            <input type="search" placeholder="Search" className="search-input"/>
          </div>
          <button className="create-btn">Create <FaPlusSquare size={22} style={{marginLeft: "10"}} /> </button>
        </div>

        <div className="live-respond-line">
          <p className="live-30">Live (30)</p>
          <p className="response-30">Responded (30)</p>
          <p className="unresponse-30">Unresponded (30)</p>
          <p className="bid-created">Bid Created</p>
          <p className="today">Today</p>
          <p className="today">Yesterday</p>
          <select className="calender">
            <option >Calender</option>
          </select>
          <FaFilter size={22} style={{color: "#387ADF"}} />
        </div>

        <div className="details-bar">
          <p className="details-bar-options">S No.</p>
          <p className="details-bar-options">Bid Number <br />Created By</p>
          <p className="details-bar-options">Start Date <br />& Time</p>
          <p className="details-bar-options">Bid Time <br />Remaining</p>
          <p className="details-bar-options">From city <br />To city</p>
          <p className="details-bar-options">Vehicle Type, Size <br />Body, No. of Vehicle</p>
          <p className="details-bar-options">Material Weight <br />(in kg)</p>
          <p className="details-bar-options">Response</p>
          <p className="details-bar-options">Assigned Staff</p>
          <p className="details-bar-options">Details</p>
        </div>

        <div className="sunder-details">
          <p><span></span> 1</p>
          <p>#122345678123 <br />
          <span>Sunder Yadav</span></p>
          <p>14/02/2024 <br />
          <span>05:40 Pm</span></p>
          <p>7hr 20 min</p>
          <p>Gurgaon <br /> Mumbai</p>
          <p>Truck, 20 ft <br /> Close body, 1</p>
          <p >4000 kg</p>
          <p className="results">4 <br /> results</p>
          <p> Mohit <br /> 5215001161264</p>
          <p className="view-details">View Details</p>
        </div>

        <div className="address-details">
          <div className="bid-no">
            <h1 className="bid-no-text">Bid No: <span>16515120650125 <span className="sunder-yadav">(Sunder Yadav)</span></span></h1>
            <h1 className="gurugram"><button className="green-point"></button> Manesar, Gurugram, <span className="haryana">Haryana</span></h1>
            <p className="location"><FaLocationDot size={20} style={{color: "red"}} /> Kotputli, <span className="rajasthan">Rajasthan</span> </p>
          </div>
        </div>

        <hr />

        <div className="bottom-part">
          <p><button className="green-btn"></button> 1</p>
          <p>#122345678123 <br /> <span className="sunder">Sunder Yadav</span></p>
          <p>14/02/2024 <br /> <span className="sunder">05:40 Pm</span></p>
          <p>7hr 20 min</p>
          <p>Gurgaon <br /> Mumbai</p>
          <p>Truck, 20 ft <br /> Close body, 1</p>
        </div>

        <div className="bottom-part">
          <p><button className="green-btn"></button> 1</p>
          <p>#122345678123 <br /> <span className="sunder">Sunder Yadav</span></p>
          <p>14/02/2024 <br /> <span className="sunder">05:40 Pm</span></p>
          <p>7hr 20 min</p>
          <p>Gurgaon <br /> Mumbai</p>
          <p>Truck, 20 ft <br /> Close body, 1</p>
        </div>

        <div className="bottom-part">
          <p><button className="green-btn"></button> 1</p>
          <p>#122345678123 <br /> <span className="sunder">Sunder Yadav</span></p>
          <p>14/02/2024 <br /> <span className="sunder">05:40 Pm</span></p>
          <p>7hr 20 min</p>
          <p>Gurgaon <br /> Mumbai</p>
          <p>Truck, 20 ft <br /> Close body, 1</p>
        </div>

        <div className="bottom-part">
          <p><button className="green-btn"></button> 1</p>
          <p>#122345678123 <br /> <span className="sunder">Sunder Yadav</span></p>
          <p>14/02/2024 <br /> <span className="sunder">05:40 Pm</span></p>
          <p>7hr 20 min</p>
          <p>Gurgaon <br /> Mumbai</p>
          <p>Truck, 20 ft <br /> Close body, 1</p>
        </div>

        <hr />


      </div>
    </div>
    
    
  </div>
)

export default App