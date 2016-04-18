import { Router } from 'express'

const router = Router()

let todos = [
  'Work out',
  'Make a pie',
  'Walk the dog',
  'Take out garbage'
];

router.get('/randomtodo', function(req, res) {
  let todo = todos[Math.floor(Math.random() * todos.length)];
  res.json(todo);
});

router.get('/test', (req, res) => {
  res.end('hi')
})

router.get('/tester', (req, res) => {
  res.json({test: 'test', what: 'what'});
})



export default router;
