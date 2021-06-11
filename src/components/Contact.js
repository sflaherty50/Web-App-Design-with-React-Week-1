import React from 'react';
export class Contact extends React.Component {
    static displayName = Contact.name;

    constructor(props) {
        super(props);
        this.state = { }
    }

    
   

    render() {
        return (
            <div >
                <h1>Contact Me</h1>
                <p>Hello?</p>
            </div>



        );
    }
}