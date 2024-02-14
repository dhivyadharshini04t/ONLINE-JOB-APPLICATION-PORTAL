import React from 'react';
import '../Style/AdminProf.css';

class AdminProfile extends React.Component {
  render() {
    return (
      <div className="admin-profile-container">
        <h1 className="profile-heading">Admin Profile</h1>
        <div className="profile-info">
          <div className="profile-field">
            <span className="field-label">Username:</span>
            <span className="field-value">admin_user</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Email:</span>
            <span className="field-value">admin@example.com</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Role:</span>
            <span className="field-value">Administrator</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Status:</span>
            <span className="field-value active">Active</span>
          </div>
          <div className="profile-field">
            <span className="field-label">Last Login:</span>
            <span className="field-value">2024-01-29 10:30:45</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
