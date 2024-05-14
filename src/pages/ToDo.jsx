import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import AddToList from "../components/AddToDoList";

const ToDo = () => {
  const [itemIndex, setItemIndex] = useState({
    editItemIndex: null,
    deleteItemIndex: null,
  });

  const editListItem = (id) => {
    // Update the state using an object to correctly update the state
    setItemIndex({ ...itemIndex, editItemIndex: id });
  };

  const deleteItemIndex = (id) => {
    // Update the state using an object to correctly update the state
    setItemIndex({ ...itemIndex, deleteItemIndex: id });
  };

  return (
    <div className="bg flex justify-center px-10">
      <div className="bg h-[100vh] w-[100%] flex flex-col pt-10 max-w-[800px]  gap-6 ">
        <AddToList
          editItemIndex={itemIndex.editItemIndex}
          deleteItemIndex={itemIndex.deleteItemIndex}
        />
        <ToDoList
          editListItem={editListItem}
          deleteItemIndex={deleteItemIndex}
        />
      </div>
    </div>
  );
};

export default ToDo;
