import React from "react";
import "./styles.css";
import HighPriorityIcon from "../assets/high-priority.svg";
import MediumPriorityIcon from "../assets/medium-priority.svg";
import LowPriorityIcon from "../assets/low-priority.svg";

import DoneStatusIcon from "../assets/Done.svg";
import InProgressStatusIcon from "../assets/in-progress.svg";
import CancelledStatusIcon from "../assets/Cancelled.svg";

// Priority mapping
const priorityIcons = {
  4: HighPriorityIcon, // Urgent
  3: MediumPriorityIcon, // High
  2: LowPriorityIcon, // Medium
  1: LowPriorityIcon, // Low
  0: LowPriorityIcon, // No Priority
};

// Status mapping
const statusIcons = {
  todo: DoneStatusIcon,
  "in progress": InProgressStatusIcon,
  backlog: CancelledStatusIcon,
};

const KanbanCard = ({ ticket }) => {
  const priorityIcon = priorityIcons[ticket.priority] || LowPriorityIcon;
  const statusKey = ticket.status?.toLowerCase() || "todo";
  const statusIcon = statusIcons[statusKey] || DoneStatusIcon;

  return (
    <div className="kanban-card">
      <div className="kanban-card-header">
        <span className="ticket-id">{ticket.id}</span>
      </div>
      <div className="ticket-title-container">
        <img
          src={statusIcon}
          alt={`${ticket.status || "Todo"} Status`}
          className="status-svg"
        />
        <h3 className="ticket-title">{ticket.title}</h3>
      </div>
      <div className="kanban-card-footer">
        <div className="priority-icon">
          <img src={priorityIcon} alt={`Priority ${ticket.priority || 0}`} className="priority-svg" />
        </div>
        <span className="ticket-tag">{ticket.tag?.[0] || "No Tag"}</span>
      </div>
    </div>
  );
};

export default KanbanCard;
