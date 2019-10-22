import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';

import dva from 'dva';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/global').default);
// app.model(require('./models/auth').default);
// app.model(require('./models/user').default);
// app.model(require('./models/company').default);
// app.model(require('./models/card').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
