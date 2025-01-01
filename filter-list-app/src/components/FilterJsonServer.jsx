import React, { useState, useEffect } from "react";
import axios from "axios";

const FilterJsonServer = () => {
  const [data, setData] = useState([]); // Data from JSON Server
  const [searchQuery, setSearchQuery] = useState(""); // Search textbox
  const [selectedRole, setSelectedRole] = useState(""); // Role select
  const [selectedEmailDomain, setSelectedEmailDomain] = useState(""); // Email domain select

  // Fetch data from JSON Server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data from JSON Server:", error);
      }
    };

    fetchData();
  }, []);

  // Extract unique options for select boxes
  const roles = [...new Set(data.map((item) => item.role))];
  const emailDomains = [...new Set(data.map((item) => item.email.split("@")[1]))];

  // Filter data based on conditions
  const filteredData = data.filter((item) => {
    const searchValue = searchQuery.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchValue) ||
      item.email.toLowerCase().includes(searchValue) ||
      item.role.toLowerCase().includes(searchValue);

    const matchesRole = selectedRole ? item.role === selectedRole : true;

    const matchesEmailDomain = selectedEmailDomain
      ? item.email.split("@")[1] === selectedEmailDomain
      : true;

    return matchesSearch && matchesRole && matchesEmailDomain;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search and Filter with JSON Server</h1>

      {/* Search Textbox */}
      <input
        type="text"
        placeholder="Search by name, email, or role"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* Role Select Box */}
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
          fontSize: "16px",
        }}
      >
        <option value="">All Roles</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>

      {/* Email Domain Select Box */}
      <select
        value={selectedEmailDomain}
        onChange={(e) => setSelectedEmailDomain(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
        }}
      >
        <option value="">All Email Domains</option>
        {emailDomains.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>

      {/* Display Filtered Data */}
      <ul style={{ marginTop: "20px" }}>
        {filteredData.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Email:</strong> {item.email},{" "}
            <strong>Role:</strong> {item.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterJsonServer;
