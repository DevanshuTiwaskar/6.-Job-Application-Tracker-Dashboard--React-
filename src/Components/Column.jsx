import { Droppable, Draggable } from "react-beautiful-dnd";
import JobCard from "./JobCard"; // import your new JobCard

const Column = ({ columnId, column, search }) => {
  // Optional: filter jobs by search text
  const filteredItems = column.items.filter(
    (job) =>
      job.title?.toLowerCase().includes(search?.toLowerCase() || "") ||
      job.company?.toLowerCase().includes(search?.toLowerCase() || "")
  );

  return (
    <div className="bg-white rounded-2xl p-4 w-80 shadow-md flex-shrink-0 border border-gray-200">
      {/* Column Title */}
      <h2 className="text-lg font-bold mb-4 text-gray-800">
        {column.name} ({filteredItems.length})
      </h2>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap-4 min-h-[250px]"
          >
            {filteredItems.map((job, index) => (
              <Draggable key={job.id} draggableId={job.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${snapshot.isDragging ? "rotate-2 scale-105" : ""}`}
                  >
                    {/* ✅ Use JobCard instead of inline JSX */}
                    <JobCard job={job} status={column.name} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
