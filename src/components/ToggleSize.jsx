import React, { Component } from "react";
import Icon from "../icons";

const buttons = [{ name: "mobile" }, { name: "tablet" }, { name: "desktop" }];

class ToggleSize extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "desktop" };
    }

    handleButtonClick = e => {
        this.props.toggleSizeClass(e);
        this.setState({ name: e.currentTarget.value });
    };
    render() {
        return (
            <div className="size-select">
                {buttons.map((button, index) => {
                    return (
                        <button
                            onClick={this.handleButtonClick}
                            value={button.name}
                            key={index}
                            className={
                                this.state.name === button.name
                                    ? "size-select__btn active"
                                    : "size-select__btn"
                            }
                        >
                            <Icon name={button.name} />
                        </button>
                    );
                })}
            </div>
        );
    }
}

export default ToggleSize;
