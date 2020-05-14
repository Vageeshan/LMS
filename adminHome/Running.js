import React from "react";

class Running extends React.Component {
  render() {
    return (
      <div class="col-xl-9 col-lg-8  col-md-12">
        <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm bg-white card grow">
          <div class="card-body">
            <ul class="list-group list-group-horizontal-lg">
              <li class="list-group-item text-center active button-5">
                <a href="index.html" class="text-white">
                  Admin Dashboard
                </a>
              </li>
              <li class="list-group-item text-center button-6">
                <a class="text-dark" href="#">
                  Employees Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div class="card dash-widget ctm-border-radius shadow-sm grow">
              <div class="card-body">
                <div class="card-icon bg-primary">
                  <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <div class="card-right">
                  <h4 class="card-title">Employees</h4>
                  <p class="card-text">700</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-sm-6 col-12">
            <div class="card dash-widget ctm-border-radius shadow-sm grow">
              <div class="card-body">
                <div class="card-icon bg-warning">
                  <i class="fa fa-automobile" aria-hidden="true"></i>
                </div>
                <div class="card-right">
                  <h4 class="card-title">Pending</h4>
                  <p class="card-text">10</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-sm-6 col-12">
            <div class="card dash-widget ctm-border-radius shadow-sm grow">
              <div class="card-body">
                <div class="card-icon bg-danger">
                  <i class="fa fa-suitcase" aria-hidden="true"></i>
                </div>
                <div class="card-right">
                  <h4 class="card-title">Leaves</h4>
                  <p class="card-text">3</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-sm-6 col-12">
            <div class="card dash-widget ctm-border-radius shadow-sm grow">
              <div class="card-body">
                <div class="card-icon bg-success">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="card-right">
                  <h4 class="card-title">Messages</h4>
                  <p class="card-text">20</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="card ctm-border-radius shadow-sm grow">
              <div class="card-header">
                <h4 class="card-title mb-0 d-inline-block">Today Leaves</h4>
                <a
                  href="javascript:void(0)"
                  class="d-inline-block float-right text-primary"
                >
                  <i class="lnr lnr-sync"></i>
                </a>
              </div>
              <div class="card-body recent-active">
                <div class="recent-comment">
                  <a href="javascript:void(0)" class="dash-card text-dark">
                    <div class="dash-card-container">
                      <div class="dash-card-icon text-primary">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                      </div>
                      <div class="dash-card-content">
                        <h6 class="mb-0">No Birthdays Today</h6>
                      </div>
                    </div>
                  </a>
                  <hr />
                  <a href="javascript:void(0)" class="dash-card text-dark">
                    <div class="dash-card-container">
                      <div class="dash-card-icon text-warning">
                        <i class="fa fa-tint" aria-hidden="true"></i>
                      </div>
                      <div class="dash-card-content">
                        <h6 class="mb-0">Ralph Baker is off sick today</h6>
                      </div>
                      <div class="dash-card-avatars"></div>
                    </div>
                  </a>
                  <hr />
                  <a href="javascript:void(0)" class="dash-card text-dark">
                    <div class="dash-card-container">
                      <div class="dash-card-icon text-success">
                        <i class="fa fa-child" aria-hidden="true"></i>
                      </div>
                      <div class="dash-card-content">
                        <h6 class="mb-0">
                          Ralph Baker is parenting leave today
                        </h6>
                      </div>
                      <div class="dash-card-avatars"></div>
                    </div>
                  </a>
                  <hr />
                  <a href="javascript:void(0)" class="dash-card text-dark">
                    <div class="dash-card-container">
                      <div class="dash-card-icon text-danger">
                        <i class="fa fa-suitcase"></i>
                      </div>
                      <div class="dash-card-content">
                        <h6 class="mb-0">Danny ward is away today</h6>
                      </div>
                      <div class="dash-card-avatars"></div>
                    </div>
                  </a>
                  <hr />
                  <a href="javascript:void(0)" class="dash-card text-dark">
                    <div class="dash-card-container">
                      <div class="dash-card-icon text-pink">
                        <i class="fa fa-home" aria-hidden="true"></i>
                      </div>
                      <div class="dash-card-content">
                        <h6 class="mb-0">You are working from home today</h6>
                      </div>
                      <div class="dash-card-avatars"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 d-flex">
            <div class="card flex-fill team-lead shadow-sm grow">
              <div class="card-header">
                <h4 class="card-title mb-0 d-inline-block">
                  This flex Box for Notification{" "}
                </h4>
                {/* <i class="fa fa-globe" aria-hidden="true">Notification </i> */}

                <span
                  class="badge badge-primary"
                  style={{ MarginLeft: "15px", float: "right" }}
                >
                  Notification
                </span>
              </div>
              <div class="card-body">
                <div class="media mb-3">
                  <div class="media-body">
                    <h6 class="m-0">Noti1</h6>
                    <p class="mb-0 ctm-text-sm">Details</p>
                  </div>
                </div>
                <hr />
                <div class="media mb-3">
                  <div class="media-body">
                    <h6 class="m-0">Noti12</h6>
                    <p class="mb-0 ctm-text-sm">Details2</p>
                  </div>
                </div>
                <hr />
                <div class="media mb-3">
                  <div class="media-body">
                    <h6 class="m-0">Noti3</h6>
                    <p class="mb-0 ctm-text-sm">Details3</p>
                  </div>
                </div>
                <hr />
                <div class="media mb-3">
                  <div class="media-body">
                    <h6 class="m-0">Noti4</h6>
                    <p class="mb-0 ctm-text-sm">Details4</p>
                  </div>
                </div>
                <hr />
                <div class="media">
                  <div class="media-body">
                    <h6 class="m-0">Noti5</h6>
                    <p class="mb-0 ctm-text-sm">Details5</p>
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

export default Running;
