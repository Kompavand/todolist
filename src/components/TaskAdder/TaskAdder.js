import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const TaskAdder = ({text, onChangeText, onSave}) => (
    <div className={'p-3 mt-2 rounded bg-info text-white'} style={{height: '65px'}}>
        <input type='text'
               className='rounded w-75'
               name="text"
               value={text}
               onChange={onChangeText}
        />
        <button type="button"
                className="btn btn-success float-right ml-1 border"
                onClick={onSave}>
            Add
        </button>
    </div>
);