import React from "react";

class Employee extends React.Component {
  render() {
    return (
      <div class="col-xl-9 col-lg-8 col-md-12">
        <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm grow bg-white card">
          <div class="card-body">
            <ul class="list-group list-group-horizontal-lg">
              <li class="list-group-item text-center active button-5">
                <a href="/employee" class="text-white">
                  SGIC Employee
                </a>
              </li>
              <li class="list-group-item text-center button-6">
                <a class="text-dark" href="/invicta">
                  INVICTA Employee
                </a>
              </li>
              <li class="list-group-item text-center button-6">
                <a class="text-dark" href="/outsource">
                  Out Source
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card shadow-sm grow ctm-border-radius">
          <div class="card-body align-center">
            <h4 class="card-title float-left mb-0 mt-2">3 People</h4>
            <ul class="nav nav-tabs float-right border-0 tab-list-emp">
              <li class="nav-item">
                <a
                  class="nav-link active border-0 font-23 grid-view"
                  href="employees.html"
                >
                  <i class="fa fa-th-large" aria-hidden="true"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link border-0 font-23 list-view"
                  href="employees-list.html"
                >
                  <i class="fa fa-list-ul" aria-hidden="true"></i>
                </a>
              </li>
              <li class="nav-item pl-3">
                <a
                  href="/addemp"
                  class="btn btn-theme button-1 text-white ctm-border-radius p-2 add-person ctm-btn-padding"
                >
                  <i class="fa fa-plus"></i> Add Person
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="ctm-border-radius shadow-sm grow card">
          <div class="card-body">
            <div class="table-back employee-office-table">
              <div class="table-responsive">
                <table class="table custom-table table-hover table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Contact Number</th>
                      <th>Address</th>
                      <th>UPDATE</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Vageeshan</td>
                      <td>0776543215</td>
                      <td>Nallur</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          UPDATE
                        </button>
                      </td>
                      <td>
                        <a class="btn btn-outline-danger btn-sm"> DELETE </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Lathushan</td>
                      <td>0778965874</td>
                      <td>Jaffna</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm">
                          UPDATE
                        </button>
                      </td>
                      <td>
                        <a class="btn btn-outline-danger btn-sm"> DELETE </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sansigan</td>
                      <td>0778947526</td>
                      <td>Manipai</td>
                      <td>
                        <button type="button" class="btn btn-primary btn-sm">
                          UPDATE
                        </button>
                      </td>
                      <td>
                        <a class="btn btn-outline-danger btn-sm"> DELETE </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  <div class="modal-body">
                    <form class="pl-3 pr-3" action="#">
                      <div class="form-group">
                        <label for="username">Name</label>
                        <input
                          class="form-control"
                          type="email"
                          id="username"
                          required=""
                          placeholder="Michael Zenaty"
                        />
                      </div>

                      <div class="form-group">
                        <label for="emailaddress">Email address</label>
                        <input
                          class="form-control"
                          type="email"
                          id="emailaddress"
                          required=""
                          placeholder="john@deo.com"
                        />
                      </div>

                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                          class="form-control"
                          type="password"
                          required=""
                          id="password"
                          placeholder="Enter your password"
                        />
                      </div>

                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          >
                            I accept <a href="#">Terms and Conditions</a>
                          </label>
                        </div>
                      </div>

                      <div class="form-group text-center">
                        <button class="btn btn-primary" type="submit">
                          Sign Up Free
                        </button>
                      </div>
                    </form>
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
