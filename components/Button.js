import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    addCount = () => {
        const count = this.state.count;
        this.setState({ count: count + 1 })
    }
    render() {
        return (
            <button
                style={{
                    display: 'block',
                    fontSize: '4rem',
                    margin: '1em auto',
                    width: '80%'
                }}
                onClick={this.addCount}
            >
                {this.props.label}: {this.state.count}
            </button>
        )
    }
}

export default Button
