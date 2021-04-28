import addNoteHandler from './handler';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

export default routes;
