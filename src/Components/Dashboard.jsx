import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import { nanoid } from "nanoid";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [columns, setColumns] = useState({
    applied: {
      name: "Applied",
      items: [
        { id: nanoid(), title: "Frontend Developer", company: "Google" },
        { id: nanoid(), title: "Backend Developer", company: "Amazon" },
      ],
    },
    interview: {
      name: "Interview",
      items: [
        { id: nanoid(), title: "Fullstack Developer", company: "Facebook" },
      ],
    },
    offer: {
      name: "Offer",
      items: [
        { id: nanoid(), title: "UI/UX Designer", company: "Microsoft" },
      ],
    },
    rejected: {
      name: "Rejected",
      items: [
        { id: nanoid(), title: "Intern", company: "Apple" },
      ],
    },
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destColumn, items: destItems },
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar on top (mobile) or left side (desktop) */}
      <Sidebar columns={columns} />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Header search={search} setSearch={setSearch} />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(columns).map(([columnId, column]) => (
              <Column key={columnId} columnId={columnId} column={column} search={search} />
            ))}
          </div>
        </DragDropContext>
      </main>
    </div>
  );
};

export default Dashboard;
