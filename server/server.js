const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"))

const {
    getTasks,
    deleteTask,
    createTask,
    updateTask,
    editTaskName,
    completeTask,
    uncompleteTask,
    getHTML,
    getCSS,
    getJS,
    getGrowth
} = require(`./controller`);

app.get('/', getHTML)
app.get(`/css`, getCSS)
app.get(`/js`, getJS)
app.get('/growth',getGrowth)

app.get(`/api/task`, getTasks)
app.delete(`/api/task/:id`, deleteTask)
app.post(`/api/task`, createTask)
app.put(`/api/task/:id`, updateTask)
app.put(`/api/task`, editTaskName)
app.put(`/api/task/complete/:id`, completeTask)
app.put(`/api/task/uncomplete/:id`, uncompleteTask)

let port = 4000 || process.env.PORT

app.listen(port, console.log('server running on 4000'))