import {ApiTasks} from '../services';

export const getTasks = () => {
    return async dispatch => {
        await ApiTasks.index().then(res => {
            const data = res.data;
            dispatch({type: 'GET_TASKS', payload: data});
        });
    }
}

export const addTask = (item) => {
    return async dispatch => {
        await ApiTasks.create(item).then(res => {
            const data = res.data;
            dispatch({type: 'ADD_TASK', payload: data});
        });
    }
}

export const deleteTask = (id) => {
    return async dispatch => {
        await ApiTasks.remove(id).then(() => {
            dispatch({type: 'DELETE_TASK', payload: id});
        });
    }
}
