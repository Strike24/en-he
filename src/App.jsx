import React, { Component } from "react";
import { Form, FormControl } from 'react-bootstrap';
import './app.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import {Alert, AlertTitle, Chip} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import GTranslate from '@mui/icons-material/GTranslate';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "הטקסט בעברית",
            name: "",
            displayAlert: "noNull",
        }
    }




    async answer() {
   
    //put the english letters in an array
    let en = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        ","
    ]
 
    let he = [
        'ש',
        'נ',
        'ב',
        'ג',
        'ק',
        'כ',
        'ע',
        'י',
        'ן',
        'ח',
        'ל',
        'ך',
        'צ',
        'מ',
        'ם',
        'פ',
        '/',
        'ר',
        'ד',
        'א',
        'ו',
        'ה',
        '\'',
        'ס',
        'ט',
        'ז',
        "ת",
    ]

       

        let name = this.state.name;

        en.forEach((letter) => {
            name = name.toLowerCase().replaceAll(letter, he[en.indexOf(letter)]);
            
        })


        if (name === undefined || name === " " || !name) {
            this.setState({ displayAlert: "yesNull" });
            this.setState({ answer: `הטקסט בעברית` });
            return;
        }

        this.setState({ displayAlert: "noNull" });

        this.setState({ answer: `${name}` });
    }

    reset() {
        this.setState({ displayAlert: "noNull" });
        this.setState({ answer: `הטקסט בעברית` });
        this.setState({ name: "" });
    }

    render() {
        return (
            <div className="app">
                <Alert className="alert" severity="info">Created By Strike | For Learning React <img className="react-icon" alt="test" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'></img></Alert>
                <div className="container">
                    <h1>אנגלית לעברית - English to Hebrew</h1>
                    <h4 dir="rtl">מכירים שמישהו מנסה לכתוב משהו בעברית וכותב את זה באנגלית?</h4>
                        <div className="buttons">
                        <Chip label="שלום = auko" color="primary"/>
                        <Chip label="היי = vhh" color="success"/>
                        </div>
                    <h5 dir="rtl">האתר הזה נועד במיוחד בשביל זה! האתר יהפוך את "הטעות" לעברית נכונה!</h5>
             
                    <Alert className={this.state.displayAlert} variant="filled" severity="error">
                        <AlertTitle> חובה לכתוב טקסט בשביל להפוך אותו לעברית!</AlertTitle>
                        
                    </Alert>
                    <Form inline="true">
                        <FormControl className="form-control" onChange={event => this.setState({ name: event.target.value })} as="textarea" rows={2} placeholder="הטקסט באנגלית - עברית" />
                        <FormControl className="form-answar" placeholder={this.state.answer} as="textarea" rows={3} readOnly />
                        <div className="buttons">
                        <Button className="btn-search" variant="contained" color="error" endIcon={<RestartAltIcon />} onClick={() => this.reset()}>אפס טקסט</Button>
                        <Button className="btn-search" variant="contained" endIcon={<GTranslate />} onClick={() => this.answer()}>הפוך לעברית</Button>
                        </div>
                    </Form>
                
                </div>
            </div>
        )

    }
}
export default App;