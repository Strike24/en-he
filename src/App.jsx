import React, { Component } from "react";
import { Form, FormControl, Button, Alert } from 'react-bootstrap';
import './app.css';

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
            this.setState({ answer: `הקטילה שתצא` });
            return;
        }

        this.setState({ displayAlert: "noNull" });

        this.setState({ answer: `${name}` });
    }

    reset() {
        this.setState({ displayAlert: "noNull" });
        this.setState({ answer: `הקטילה שתצא` });
        this.setState({ name: "" });
    }

    render() {
        return (
            <div className="app">
                <Alert className="alert" variant="success">Created By Strike | For Learning React <img className="react-icon" alt="test" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'></img></Alert>
                <div className="container">
                    <h1>אנגלית לעברית - English to Hebrew</h1>
                    <h4>מכירים שמישהו מנסה לכתוב משהו בעברית וכותב את זה באנגלית?</h4>
                    <h5>"שלום" - "akuo", "היי" - "vhh"</h5>
             
                    <Alert className={this.state.displayAlert} variant="danger">❌ אנא הזן שם לקטול! השם לא יכול להיות ריק</Alert>
                    <Form inline="true">
                        <FormControl className="form-control" onChange={event => this.setState({ name: event.target.value })} as="textarea" rows={2} placeholder="הטקסט באנגלית - עברית" />
                        <FormControl className="form-answar" placeholder={this.state.answer} as="textarea" rows={3} readOnly />
                        <Button className="btn-search" variant="danger" onClick={() => this.reset()}>אפס טקסט</Button>
                        <Button className="btn-search" onClick={() => this.answer()}>הפוך לעברית</Button>

                    </Form>

                </div>
            </div>
        )

    }
}
export default App;