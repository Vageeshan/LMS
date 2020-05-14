import React from "react";
import Navigationbar from "./components/constrant/Navigationbar";
import SideNav from "./components/constrant/SideNav";
import Running from "./components/adminHome/Running";
import { BrowserRouter, Route } from "react-router-dom";
import Employee from "./components/SgicEmp/Employee";
import AddEmp from "./components/SgicEmp/AddEmp";
import Invicta from "./components/InvictaEmp/Invicta";
import AddInvictaEmp from "./components/InvictaEmp/AddInvictaEmp";
import AddOutSource from "./components/OutSource/AddOutSource";
import OutSource from "./components/OutSource/OutSource";
import Leave from "./components/leave/Leave";
import LeaveHistory from "./components/leaveHistory/LeaveHistory";
import ManageLeave from "./components/manageLeave/ManageLeave";
import Calender from "./components/Calender/Calender";

function App() {
  return (
    <div class="inner-wrapper">
      <div id="loader-wrapper">
        <div class="loader">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>

      <header class="header">
        <Navigationbar />
      </header>
      <div class="page-wrapper">
        <div class="container-fluid">
          <div class="row">
            <BrowserRouter>
              <SideNav />
              <Route path="/running" component={Running} />
              <Route path="/employee" component={Employee} />
              <Route path="/addemp" component={AddEmp} />
              <Route path="/invicta" component={Invicta} />
              <Route path="/addinvictaemp" component={AddInvictaEmp} />
              <Route path="/outsource" component={OutSource} />
              <Route path="/addoutsource" component={AddOutSource} />
              <Route path="/leave" component={Leave} />
              <Route path="/manageleave" component={ManageLeave} />
              <Route path="/leavehistory" component={LeaveHistory} />

             <Route path='/calender' component={Calender}/>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
