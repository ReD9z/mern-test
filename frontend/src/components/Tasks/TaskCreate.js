import React, { useState } from "react";
import { TextField, FormControl } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addTask } from '../../actions/tasksActions';

const TaskCreate = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()) {
            dispatch(addTask({text}));
        }
    }
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormControl fullWidth variant="outlined">
                <TextField
                    value={text}
                    onChange={e => setText(e.target.value)}
                    id="filled-basic"
                    label="Текст задачи"
                    variant="filled"
                />
            </FormControl>
        </form>
    )
}

export default TaskCreate;
