import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../redux/toDoList";

const AddToDoList = ({ editItemIndex, deleteItemIndex }) => {
  const toDoList = useSelector((state) => state.toDoList.toDoList);
  const dispatch = useDispatch();

  const [input, setInput] = useState({ name: "", role: "", salary: "" });
  const [editIndex, setEditIndex] = useState(editItemIndex);
  const clearInputFields = () => {
    setInput({ name: "", role: "", salary: "" });
  };

  const addHandler = () => {
    if (!input.name || !input.role || !input.salary)
      return alert("Please fill all the fields");
    dispatch(addTask(input));
    clearInputFields();
  };

  const editHandler = () => {
    dispatch(editTask({ index: editItemIndex, task: input }));
    clearInputFields();
    setEditIndex(null);
  };

  useEffect(() => {
    if (editItemIndex !== null) {
      console.log(editItemIndex);
      setInput(toDoList.find((_, index) => index === editItemIndex));
      setEditIndex(editItemIndex);
    }
  }, [editItemIndex]);

  useEffect(() => {
    deleteItemIndex && clearInputFields();
  }, [deleteItemIndex]);
  console.log(toDoList);
  console.log(editItemIndex);

  return (
    <div className="flex-wrap  text-white flex justify-between  my-2 gap-3">
      <label
        for="Name"
        class="relative flex items-center block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          onChange={(e) =>
            setInput({ ...input, [e.target.id]: e.target.value })
          }
          autoComplete="off"
          required
          value={input.name}
          type="text"
          id="name"
          class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Name"
        />

        <span class="pointer-events-none bg  absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Name
        </span>
      </label>

      <label
        for="Role"
        class="relative flex items-center block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          autoComplete="off"
          onChange={(e) =>
            setInput({ ...input, [e.target.id]: e.target.value })
          }
          required
          value={input.role}
          type="text"
          id="role"
          class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Role"
        />

        <span class="pointer-events-none bg  absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Role
        </span>
      </label>

      <label
        for="Salary"
        class="relative flex items-center block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          autoComplete="off"
          required
          onChange={(e) =>
            setInput({ ...input, [e.target.id]: e.target.value })
          }
          value={input.salary}
          type="number"
          id="salary"
          class="peer p-2 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Salary"
        />

        <span class="pointer-events-none bg absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Salary
        </span>
      </label>
      <Button
        bgColor="bg-blue-600"
        text={editIndex !== null ? "Edit" : "Add"}
        onClick={editIndex !== null ? editHandler : addHandler}
      />
    </div>
  );
};

export default AddToDoList;
