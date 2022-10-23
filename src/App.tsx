import React from 'react';
import Button from './components/button';
import Menu from './components/menu';

const App = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>菜单</h1>
                <Menu
                    defaultIndex={0}
                    onSelect={(index) => console.log(index)}
                    mode='vertical'
                >
                    <Menu.Item>菜单1</Menu.Item>
                    <Menu.Item disabled={true}>菜单2</Menu.Item>
                    <Menu.Item>菜单3</Menu.Item>
                </Menu>

                <h1>按钮</h1>
                <Button>
                    Button
                </Button>
                <Button disabled={true}>Disabled</Button>
                <Button type='primary' size='lg'>
                    Large Primary
                </Button>
                <Button type='danger' size='sm'>
                    Small Danger
                </Button>
                <Button type='link' href='https://www.baidu.com'>
                    百度 Link
                </Button>
                <Button type='link' href='https://www.baidu.com' disabled={true}>
                    Disabled Link
                </Button>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
