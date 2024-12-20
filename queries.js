/*------------------------------ Starter Code ------------------------------*/

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Todo = require('./models/todo.js');

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await runQueries();

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit();
};

connect();

/*----------------------------- Query Functions -----------------------------*/

const createTodo = async () => {
  const todoData = {
    text: 'learn React',
    isComplete: false,
  };
  const todo = await Todo.create(todoData);
  console.log('New todo:', todo);
};

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log('All todos:', todos);
};

const createSubtask = async () => {
    const todoId = '6764d5a731ca77b4a76df4c6';
  const todo = await Todo.findById(todoId);
  const subtaskData = {
    text: 'learn how Props work',
    isComplete: false,
  };
  const subtask = todo.subtasks.push(subtaskData);
  await todo.save();
  console.log('New subtask:', todo.subtasks);
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
  // await createTodo();
  // await findTodos();
    await createSubtask();
};
