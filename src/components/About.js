import React from 'react';
export class AboutMe extends React.Component {
    static displayName = AboutMe.name;

    constructor(props) {
        super(props);
        this.state = { }
    }

    
   

    render() {
        return (
            <div >
                <h1>About Me</h1>
                <p>What about me?</p>
            </div>



        );
    }
}