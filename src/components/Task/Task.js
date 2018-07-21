import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const Task = ({ done, text, onChangeDone, onClickEdit, onClickDelete, className }) => (
    <div className={className} style={{ height: '65px' }}>
        <input
            type="checkbox"
            checked={done}
            style={{ marginRight: '10px' }}
            onChange={onChangeDone}
        />
        {text}
        <button
            type="button"
            className="btn btn-success float-right ml-1 border"
            onClick={onClickEdit}
        >
            Edit
        </button>
        <button
            type="button"
            className="btn btn-danger float-right border"
            onClick={onClickDelete}
        >
            Delete
        </button>
    </div>
);
