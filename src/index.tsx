import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './container/App';

declare global {
    interface Window { config: any; }
}

ReactDOM.render(<App config={window.config} />, document.getElementById('app'))