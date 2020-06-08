import { get, post, put, destroy } from './api/base';

export const ApiTasks = {
    index: () => get('/tasks'),
    single: (id) => get(`/tasks/${id}`),
    create: (params) => post(`/tasks`, params),
    remove: (id) => destroy(`/tasks/${id}`),
}
