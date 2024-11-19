import React from "react";
import KanbanCard from "./KanbanCard";
import "./styles.css";

// Mapping priority levels to text
const priorityTextMap = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No Priority",
};

const KanbanColumn = ({ group, tickets }) => {
  // If the group is a priority number, map it to its text value
  const groupText = priorityTextMap[group] || group; // Fallback to original group if not a priority

  return (
    <div className="kanban-column">
      <h2 className="kanban-column-header">
        {groupText} <span className="ticket-count">{tickets.length}</span>
      </h2>
      {tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
