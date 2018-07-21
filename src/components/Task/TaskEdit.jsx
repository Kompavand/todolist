import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const TaskEdit = ({ text, onChangeText, onSave, className }) => (
    <div className={className} style={{ height: '65px' }}>
        <input type='text'
               className='rounded w-75'
               name="text"
               value={text}
               onChange={onChangeText}
        />
        <button type="button"
                className="btn btn-success float-right ml-1 border"
                onClick={onSave}>
            Save
        </button>
    </div>
);
