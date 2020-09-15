import React, {useState} from 'react';
import {ColorPicker} from "./components/ColorPicker";

function App() {
    const [color, setColor] = useState('#ff0000');

    const colorsList = [
        {hex: '#ff0000', color: 'Red'},
        {hex: '#ffa500', color: 'Orange'},
        {hex: '#ffff00', color: 'Yellow'},
        {hex: '#008000', color: 'Green'},
        {hex: '#0000ff', color: 'Blue'},
        {hex: '#ee82ee', color: 'Violet'},
    ];

    return (
        <div className="App">
            <ColorPicker {...{color, setColor, colorsList}}/>
        </div>
    );
}

export default App;
