import React from 'react'
import ReactDOM from 'react-dom'
import AppComponent  from './App' 
//AppComponent saiu daqui . Foi para /src/App.js e agora é importado no início ;;;;

ReactDOM.render(
    React.createElement(AppComponent),
    document.getElementById('app')
)