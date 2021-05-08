import React from "react";

const List = (props) => {
  const newlist = props.mylist.map((list) => (
    <li
      key={list.id}
      className="list-group-item d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">{list.note}</div>
      <button
        type="button"
        className="btn btn-sm"
        onClick={() => props.onDelete(list.id)}
      >
        <i className="fa fa-times" aria-hidden="true" />
      </button>
    </li>
  ));

  return <ol className="list-group list-group-numbered list">{newlist}</ol>;
};

export default List;
