import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const apiData = await response.json();

        const ticketsWithUsers = apiData.tickets.map((ticket) => {
          const user = apiData.users.find((user) => user.id === ticket.userId);
          return {
            ...ticket,
            userName: user ? user.name : "Unassigned",
            userAvailable: user ? user.available : false,
          };
        });

        setData({ tickets: ticketsWithUsers, users: apiData.users });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <Header groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={data.tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
