import React from 'react';
import { IconButton, ListItem, ListItemSecondaryAction} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../actions/tasksActions';

const TaskItem = ({task}) =>  {
    const dispatch = useDispatch();
    const deleteSubmit = (id) => {
        dispatch(deleteTask(id));
    }
    return (
        <ListItem>
            {task.text}
            <ListItemSecondaryAction>
                <IconButton onClick={() => deleteSubmit(task._id)} edge="end" aria-label="delete">
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default TaskItem;
