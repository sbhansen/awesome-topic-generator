import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './@type/config'

import App from './container/App';

declare global {
    interface Window { config: Config; }
}

ReactDOM.render(<App config={window.config} />, document.getElementById('app'))