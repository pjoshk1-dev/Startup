import React from 'react';
import './friends.css';

const Friends = () => (
  <main className="content">
    <section className="friends-table-container">
      <h2>Your Friends</h2>
      <table className="friends-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td><span className="status online">Online</span></td>
          </tr>
          <tr>
            <td>Bob</td>
            <td><span className="status offline">Offline</span></td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td><span className="status online">Online</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
);

export default Friends;