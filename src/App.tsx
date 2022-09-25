import React from 'react';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button onClick={e => {e.preventDefault(); alert(123)}}>Button</Button>
       <Button disabled={true}>Disabled</Button>
       <Button type='primary' size='lg'>Large Primary</Button>
       <Button type='danger' size='sm'>Small Danger</Button>
       <Button type='link' href='https://www.baidu.com'>百度 Link</Button>
       <Button type='link' href='https://www.baidu.com' disabled={true}>Disabled Link</Button>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
              Learn React
          </a>
      </header>
    </div>
  );
}

export default App;
