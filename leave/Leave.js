import React from "react";

class Leave extends React.Component {
  render() {
    return (
      <div class="col-xl-9 col-lg-8 col-md-12">
        <div class="quicklink-sidebar-menu ctm-border-radius shadow-sm grow bg-white card">
          <div class="card-body">
            <ul class="list-group list-group-horizontal-lg">
              <li class="list-group-item text-center active button-5">
                <a href="/leave" class="text-white">
                  Apply Leave
                </a>
              </li>
              <li class="list-group-item text-center button-6">
                <a class="text-dark" href="/leavehistory">
                  Leave History
                </a>
              </li>
              <li class="list-group-item text-center button-6">
                <a class="text-dark" href="/manageleave">
                  Manage Leave
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-12">
          <div class="card ctm-border-radius shadow-sm grow">
            <div class="card-header">
              <h4 class="card-title mb-0">Apply Leaves</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>
                        Leave Type
                        <span class="text-danger">*</span>
                      </label>
                      <select class="form-control select">
                        <option disabled>Select Leave</option>
                        <option>Working From Home</option>
                        <option>Sick Leave</option>
                        <option>Parental Leave</option>
                        <option>Annual Leave</option>
                        <option>Normal Leave</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6 leave-col">
                    <div class="form-group">
                      <label>Remaining Leaves</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="10"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>From</label>
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                  <div class="col-sm-6 leave-col">
                    <div class="form-group">
                      <label>To</label>
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>
                        Half Day
                        <span class="text-danger">*</span>
                      </label>
                      <select class="form-control select">
                        <option disabled>Select</option>
                        <option>First Half</option>
                        <option>Second Half</option>
                        <option>Full Day</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6 leave-col">
                    <div class="form-group">
                      <label>Number of Days Leave</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="2"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group mb-0">
                      <label>Reason</label>
                      <textarea class="form-control" rows="4" />
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-theme button-1 text-white ctm-border-radius mt-4"
                  >
                    Apply
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-danger text-white ctm-border-radius mt-4"
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leave;
