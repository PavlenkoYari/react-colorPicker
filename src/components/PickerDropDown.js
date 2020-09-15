import React, {useRef} from 'react';


export const PickerDropDown = ({colorFormat, colorsList, setColor, setVisible, color}) => {
    return (
       <div className={`picker-drop-down ${colorFormat === 'hex' ? 'forHex' : 'forRgb' }`}>
           {colorFormat === 'hex'? <HEXcolor {...{colorsList,setColor,setVisible}}/> : <RGBcolor {...{setColor, setVisible, color}}/>}
       </div>
    )
};

const HEXcolor = ({ colorsList, setColor, setVisible }) => {
    const chooseColor = ( hex ) => {
        setVisible(false);
        setColor(hex)
    };

    return(
        <div style={{position: "relative", zIndex: 3}}>
            {colorsList.map( c => {
                return(
                    <div className="hex-item" onClick={() => chooseColor(c.hex) } key={c.hex}>
                        {c.color}
                        <div className="hex-square" style={{background: c.hex}} />
                    </div>
                )
            })}
        </div>
    )
};

const RGBcolor = ({ setColor, setVisible, color }) =>{
    const oldValue = useRef(color);
    const R_COLOR = useRef(null);
    const G_COLOR = useRef(null);
    const B_COLOR = useRef(null);

    const RGBToHex = (r,g,b) => {
        r = Number(r).toString(16);
        g = Number(g).toString(16);
        b = Number(b).toString(16);


        if (r.length == 1){
            r = "0" + r;
        }
        if (g.length == 1){
            g = "0" + g;
        }
        if (b.length == 1){
            b = "0" + b;
        }

        return "#" + r + g + b
    };
    function hexToRGB(h) {
        let r = 0, g = 0, b = 0;

        if (h.length == 4) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];
        } else if (h.length == 7) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
        }

        return {r: +r, g: +g, b: +b};
    }
    const changeRgbSlider = () => {
        setColor(RGBToHex(R_COLOR.current.value, G_COLOR.current.value, B_COLOR.current.value))
    };
    const submitRGB = () => {
        setVisible(false);
        setColor(RGBToHex(R_COLOR.current.value, G_COLOR.current.value, B_COLOR.current.value));
    };
    const cancelRGB = () => {
        setVisible(false);
        setColor(oldValue.current)
    };

    return(
        <div style={{position: "relative", zIndex: 3}}>
            <div>
                <div className="rgba-item r">
                    R: <input type="range" min="0" max="255" ref={R_COLOR} value={hexToRGB(color).r} onChange={changeRgbSlider}/>
                </div>
                <div className="rgba-item g">
                    G: <input type="range" min="0" max="255" ref={G_COLOR} value={hexToRGB(color).g} onChange={changeRgbSlider}/>
                </div>
                <div className="rgba-item b">
                    B: <input type="range" min="0" max="255" ref={B_COLOR} value={hexToRGB(color).b} onChange={changeRgbSlider}/>
                </div>
            </div>
            <div className="rgba-action-btn">
                <div className="rgba-btn cancel" onClick={cancelRGB}>CANCEL</div>
                <div className="rgba-btn ok" onClick={submitRGB}>OK</div>
            </div>
        </div>
    )
};
