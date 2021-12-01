import React from "react";

class ContainerHello extends React.Component {
    constructor() {
        super();
        this.state = {name: "akbar"};
    }

    changeName = () => {
        this.setState({name: "nugroho"});
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default ContainerHello
