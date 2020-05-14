import React from "react";

class AddOutSource extends React.Component {
  render() {
    return (
      <div class="col-xl-9 col-lg-8  col-md-12">
        <div class="accordion add-employee" id="accordion-details">
          <div class="card shadow-sm grow ctm-border-radius">
            <div class="card-header" id="basic1">
              <h4 class="cursor-pointer mb-0">
                <a
                  class=" coll-arrow d-block text-dark"
                  href="javascript:void(0)"
                  data-toggle="collapse"
                  data-target="#basic-one"
                  aria-expanded="true"
                >
                  Basic Details Out Source Employee
                  <br />
                  <span class="ctm-text-sm">Happy Employee</span>
                </a>
              </h4>
            </div>
            <div class="card-body p-0">
              <div
                id="basic-one"
                class="collapse show ctm-padding"
                aria-labelledby="basic1"
                data-parent="#accordion-details"
              >
                <form>
                  <div class="row">
                    <div class="col form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div class="col-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Home Address"
                      />
                    </div>
                    <div class="col-12 form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div class="col-12 form-group">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Date of Birth"
                      />
                    </div>

                    <div
                      class="col-12 form-group mb-0"
                      style={{ paddingLeft: "22px" }}
                    >
                      <p class="mb-2">Gender</p>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          class="custom-control-input"
                          id="Male"
                          name="Permanent"
                          checked
                        />
                        <label class="custom-control-label" for="Male">
                          Male
                        </label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          class="custom-control-input"
                          id="Female"
                          name="Permanent"
                        />
                        <label class="custom-control-label" for="Female">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="card shadow-sm grow ctm-border-radius">
            <div class="card-header" id="headingTwo">
              <h4 class="cursor-pointer mb-0">
                <a
                  class="coll-arrow d-block text-dark"
                  href="javascript:void(0)"
                  data-toggle="collapse"
                  data-target="#employee-det"
                >
                  Employment Job Details
                  <br />
                  <span class="ctm-text-sm">Happy Employee</span>
                </a>
              </h4>
            </div>
            <div class="card-body p-0">
              <div
                id="employee-det"
                class="collapse show ctm-padding"
                aria-labelledby="headingTwo"
                data-parent="#accordion-details"
              >
                <form>
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <select class="form-control select">
                        <option selected>User Type</option>
                        <option value="1">Admin</option>
                        <option value="2">Employee</option>
                        <option value="3">From Requ</option>
                      </select>
                    </div>
                    <div class="col-md-12 form-group">
                      <select class="form-control select">
                        <option selected>User Status</option>
                        <option value="1">Active</option>
                        <option value="2">Block</option>
                      </select>
                    </div>

                    <div class="col-12 form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Job Title"
                      />
                    </div>
                    <div class="col-12 form-group mb-0">
                      <p class="mb-2">Employment Type</p>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          class="custom-control-input"
                          id="Permanent"
                          name="Permanent"
                          checked
                        />
                        <label class="custom-control-label" for="Permanent">
                          Permanent
                        </label>
                      </div>
                      <div class="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          class="custom-control-input"
                          id="Contract"
                          name="Permanent"
                        />
                        <label class="custom-control-label" for="Contract">
                          Contract
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="card shadow-sm grow ctm-border-radius">
            <div class="card-header" id="headingThree">
              <h4 class="cursor-pointer mb-0">
                <a
                  class="coll-arrow d-block text-dark"
                  href="javascript:void(0)"
                  data-toggle="collapse"
                  data-target="#term-office"
                >
                  Provide Authentication
                  <br />
                  <span class="ctm-text-sm">Unique username</span>
                </a>
              </h4>
            </div>
            <div class="card-body p-0">
              <div
                id="term-office"
                class="collapse show ctm-padding"
                aria-labelledby="headingThree"
                data-parent="#accordion-details"
              >
                <div class="row">
                  <div class="col-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="User Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="submit-section text-center btn-add">
              <button class="btn btn-theme text-white ctm-border-radius button-1">
                Add New Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOutSource;
