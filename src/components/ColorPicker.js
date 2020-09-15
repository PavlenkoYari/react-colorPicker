import React, {useEffect, useState} from 'react';
import {PickerDropDown} from "./PickerDropDown";
import {PickerView} from "./PickerView";
import '../style/color-picker.scss'

export const ColorPicker = ({color, setColor, colorsList}) => {
    const [visible, setVisible] = useState(false);
    const [colorFormat, setColorFormat] = useState('rgba');

    const openDropDown = (currentColorFormat) => {
        if (currentColorFormat === colorFormat) {
            setVisible(!visible)
        } else {
            setVisible(true);
            setColorFormat(currentColorFormat)
        }
    };
    const closeDropDown = (e) => {
        if (!e.target.classList.contains('color-picker') && !e.target.closest(".color-picker")) {
            setVisible(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropDown);
        return () => document.removeEventListener('click', closeDropDown)
    });

    return (
        <div className='color-picker'>
            <PickerView {...{color, setVisible, visible, openDropDown, colorFormat}}/>
            {
                visible &&
                <PickerDropDown {...{setColor, colorsList, colorFormat, setVisible, color}}/>
            }
        </div>
    )
};
