import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';
import classes from './Ide.module.css';
// import { useState } from 'react';

const Ide = ( {IdeName, language, value, onChange} ) => {


    const changeHandler = (editor, data, value) => {
        onChange(value);
    };

    return(
    <div className= {classes.ide} >
            <div className= {classes['ide-title']}>
                <h2>{IdeName}</h2>
            </div>
            <div className= {classes['ide-output']}>
                <Controlled
                    className= {classes.controlled}
                    onBeforeChange= {changeHandler}
                    value= {value}
                    options= {{
                        lineNumbers: true,
                        lineWrapping: true,
                        mode: language,
                        lint: true,
                        theme: 'material',
                    }}
                >
                </Controlled>
            </div>
        </div>
    );
};


export default Ide;