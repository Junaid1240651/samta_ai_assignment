import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/toDoList";

const ToDoList = ({ editListItem, deleteItemIndex }) => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.toDoList.toDoList);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const editHandler = (index) => {
    const actualIndex = startIndex + index; // Calculate the actual index
    editListItem(actualIndex);
  };
  const deleteHandler = (index) => {
    const actualIndex = startIndex + index; // Calculate the actual index
    deleteItemIndex(actualIndex);
    dispatch(deleteTask(actualIndex));
  };
  // Handle pagination controls
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <>
      {toDoList.length > 0 ? (
        <div class="text-white rounded-lg border border-gray-200">
          <div class="overflow-x-auto rounded-t-lg">
            <table class="min-w-full divide-y-2 divide-gray-200 bg text-sm">
              <thead class=" text-white ltr:text-left rtl:text-right">
                <tr>
                  <th class="  text-start whitespace-nowrap px-4 py-2 font-medium ">
                    Name
                  </th>
                  <th class="text-start whitespace-nowrap px-4 py-2 font-medium ">
                    Role
                  </th>
                  <th class="text-start whitespace-nowrap px-4 py-2 font-medium ">
                    Salary
                  </th>{" "}
                  <th class="text-start whitespace-nowrap px-4 py-2 font-medium ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {toDoList.slice(startIndex, endIndex).map((item, index) => (
                  <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium ">
                      {item.name}
                    </td>

                    <td class="whitespace-nowrap px-4 py-2 ">{item.role}</td>
                    <td class="whitespace-nowrap px-4 py-2 ">{item.salary}</td>

                    <td class="flex whitespace-nowrap gap-2 px-4 py-2 ">
                      <Button
                        bgColor="bg-blue-600"
                        text={"Edit"}
                        onClick={() => editHandler(index)}
                      />
                      <Button
                        bgColor="bg-red-600"
                        text={"Delete"}
                        onClick={() => deleteHandler(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-end gap-1 text-xs font-medium">
              {/* Previous page button */}
              <li>
                <button
                  onClick={prevPage}
                  className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={currentPage === 1}
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>

              {/* Page numbers */}
              {[...Array(Math.ceil(toDoList.length / itemsPerPage)).keys()].map(
                (pageNumber) => (
                  <li key={pageNumber}>
                    <button
                      onClick={() => setCurrentPage(pageNumber + 1)}
                      className={`block size-8  bg text-center leading-8  ${
                        currentPage === pageNumber + 1
                          ? "bg-blue-600 text-white"
                          : ""
                      }`}
                    >
                      {pageNumber + 1}
                    </button>
                  </li>
                )
              )}

              {/* Next page button */}
              <li>
                <button
                  onClick={nextPage}
                  className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${
                    endIndex >= toDoList.length
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={endIndex >= toDoList.length}
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            </ol>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ToDoList;
