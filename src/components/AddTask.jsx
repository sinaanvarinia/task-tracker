import { useState } from "react";

const AddTask = ({ onAdd }) => {
  let [text, setText] = useState("");
  let [day, setDay] = useState("");
  let [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("task can not be empty");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder = false;
  };
  return (
    <form onSubmit={onSubmit} className="p-4">
      <div className="form p-2">
        <label className="d-block text-start">Task</label>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Add Task"
        />
      </div>
      <div className="form p-2">
        <label className="d-block text-start">Day & Time</label>
        <input
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
          className="form-control"
          type="text"
          placeholder="Add Day & Time"
        />
      </div>
      <div className="form p-2 d-flex">
        <label className="m-2 text-start">Set Reminder</label>
        <input
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.target.checked);
          }}
          className=""
          type="checkBox"
        />
      </div>

      <input className="btn btn-warning" value="Save Task" type="submit" />
    </form>
  );
};

export default AddTask;
