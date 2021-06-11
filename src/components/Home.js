import React from 'react';
export class Home extends React.Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { }
    }

    
   

    render() {
        return (
            <div >
                <h1>Hello, world!</h1>
                <p>Welcome to my home.</p>
            </div>



        );
    }
}