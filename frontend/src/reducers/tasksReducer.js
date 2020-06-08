const initialState = {
    tasks: [],
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TASKS":
            return { ...state, tasks: action.payload }
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, action.payload] }
        case "DELETE_TASK":
            return { tasks: state.tasks.filter(item => item._id !== action.payload) }
        default: return state;
    }
}

export default tasksReducer;
