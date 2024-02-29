import React, { Component } from "react";
import PermissionsTable from "./PermissionsTable";

class Permissions extends Component {
  render() {
    return (
      <div
        id="manage_permission_section"
        className="manage_permission_section main_section"
      >
        <h4 className="text-center my-3">مدیریت مجوز ها</h4>
        <div className="row justify-content-between">
          <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3 dir_ltr">
              <input
                type="text"
                className="form-control"
                placeholder="قسمتی از نام مجوز را وارد کنید"
              />
              <span className="input-group-text">جستجو</span>
            </div>
          </div>
        </div>
        <PermissionsTable />
      </div>
    );
  }
}

export default Permissions;
