import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => {
        onToggle(task.id);
      }}
      className={`task p-3 m-3 text-secondary rounded ${task.reminder?'reminder':''}`}
    >
      <h1 className="text-black-50 d-flex justify-content-between">
        {task.text}
        <FaTimes
          onClick={() => {
            onDelete(task.id);
          }}
          className="text-danger close"
        />
      </h1>
      <h5 className="text-primary">{task.day}</h5>
    </div>
  );
};

export default Task;
