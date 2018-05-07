import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./header.jsx";


class MainComponent extends React.Component {
    render(){
        return <div>
            <Header />
        </div>
    }
}

class App extends React.Component {
    render(){
        return <MainComponent />
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});