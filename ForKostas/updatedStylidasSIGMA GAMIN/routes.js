  'use strict';

import express from 'express';

//--------------------------------------------- Create a router object
const router = express.Router();

//--------------------------------------------- Import all the necessary controllers
import dashboard from './backend/controllers/dashboard.js';
import about from './backend/controllers/about.js';


//--------------------------------------------- Set up paths to different pages
router.get('/', dashboard.createView);
router.get('/about', about.createView);

//--------------------------------------------- Set up an error message in case the page that is to be routed to doesnt exist
router.get('/error', (request, response) => response.status(404).end('Page not found.'));

export default router;
