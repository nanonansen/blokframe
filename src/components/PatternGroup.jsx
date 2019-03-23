import React, { Component } from "react";
import PatternItem from "./PatternItem";

class PatternGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { open } = this.state;
        return (
            <div className={open ? "pattern-group open" : "pattern-group"}>
                <div
                    className="pattern-group__header"
                    onClick={this.handleOpen}
                >
                    <span className="pattern-group__icon" />
                    <span className="category-title">
                        {this.props.category}
                    </span>
                </div>
                {this.props.items.map((item, index) => {
                    return (
                        <PatternItem
                            id={item.id}
                            name={item.name}
                            image={item.img}
                            handleItemSelect={this.props.handleItemSelect}
                            key={item.id}
                        />
                    );
                })}
            </div>
        );
    }
}

export default PatternGroup;
