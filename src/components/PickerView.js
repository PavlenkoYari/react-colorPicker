import React from 'react';

export const PickerView = ({color, colorFormat, visible, openDropDown}) => {
    return (
        <div className="picker-view">
            <div className="picker-hex">{color}</div>
            <div className="picker-color" onClick={() => openDropDown('rgb') }>
                <div className="picker-square" style={{background: color}}/>
            </div>
            <div className={`${visible && colorFormat === 'hex'? 'open': ''} picker-btn`} onClick={() => openDropDown('hex') }>
                <svg viewBox="0 0 213.333 213.333" style={{enableBackground: "new 0 0 213.333 213.333"}}>
                    <g>
                        <polygon points="0,53.333 106.667,160 213.333,53.333"/>
                    </g>
                </svg>
            </div>
        </div>
    )
};
