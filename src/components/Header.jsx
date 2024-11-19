import React, { useEffect, useState } from "react";

const Header = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Save selected values to localStorage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  // Load saved values from localStorage on initial render
  useEffect(() => {
    const savedGroupBy = localStorage.getItem("groupBy") || "status";
    const savedSortBy = localStorage.getItem("sortBy") || "priority";

    setGroupBy(savedGroupBy);
    setSortBy(savedSortBy);
  }, [setGroupBy, setSortBy]);

  const handleGroupByChange = (e) => {
    const value = e.target.value;
    setGroupBy(value);
    saveToLocalStorage("groupBy", value);
  };

  const handleSortByChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    saveToLocalStorage("sortBy", value);
  };

  return (
    <header >
      <div style={{ position: "relative" }}>
        <button
          onClick={toggleDropdown}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
        >
          Display
        </button>
        {dropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "0",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 100,
              padding: "10px",
              width: "200px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Group By:</label>
              <select
                value={groupBy}
                onChange={handleGroupByChange}
                style={{ width: "100%", padding: "5px", border: "1px solid #ccc", borderRadius: "5px" }}
              >
                <option value="status">Status</option>
                <option value="userName">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div>
              <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Sort By:</label>
              <select
                value={sortBy}
                onChange={handleSortByChange}
                style={{ width: "100%", padding: "5px", border: "1px solid #ccc", borderRadius: "5px" }}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
