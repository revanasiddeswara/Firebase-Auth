
import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "@fortawesome/react-fontawesome";
import './Sidebar.css'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <SideNav style={{position:"fixed" ,backgroundColor:"#000", marginTop:"78px"}} className="d-lg-block d-none d-md-block" expanded={this.state.isVisible}>
        <SideNav.Toggle
          onClick={(isVisible) => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="dashboard" >
          <NavItem eventKey="dashboard" id="navbar-nav" className="active"  >
            <NavIcon>
              <i  className="fa fa-tachometer" aria-hidden="true" style={{color:"white",fontSize: "1.75em" }}  />
            </NavIcon>
            <NavText 
            >
              <a  href="/home"> Dashboard </a></NavText>
          </NavItem>
          <NavItem eventKey="placed orders" >
            <NavIcon>
            <i class="fa fa-bar-chart" aria-hidden="true" style={{color:"white",fontSize: "1.75em" }}/>
            </NavIcon>
            <NavText><a  href="/home">Profile</a></NavText>
          </NavItem>
          <NavItem eventKey="placed orders" style={{bottom:" 0", position: "fixed", overlay: "none"}} >
            <NavIcon>
            <i class="fa fa-user" aria-hidden="true" style={{color:"white",fontSize: "1.75em" }}/>
            </NavIcon>
            <NavText>Siddu</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      
    );
  }
  
}

export default Sidebar;