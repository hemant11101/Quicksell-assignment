import React from "react";
import KanbanColumn from "./KanbanColumn";
import "./styles.css";

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  if (!Array.isArray(tickets) || tickets.length === 0) {
    return <div>No tickets to display</div>;
  }

  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortBy === "priority") return b.priority - a.priority;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  const groupedTickets = sortedTickets.reduce((groups, ticket) => {
    const groupKey = ticket[groupBy] || "Ungrouped";
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(ticket);
    return groups;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn key={group} group={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
