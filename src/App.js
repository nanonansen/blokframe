import React, { Component } from "react";

import Container from "./components/Container";
import ToggleSize from "./components/ToggleSize";
import ItemSelector from "./components/ItemSelector";
import ItemList from "./components/ItemList";

import "./App.css";
import itemData from "./Data";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = itemData;
        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleContainerSize = this.handleContainerSize.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleMoveUp = this.handleMoveUp.bind(this);
        this.handleMoveDown = this.handleMoveDown.bind(this);
    }
    componentDidMount() {
        console.log("CDM State: ", this.state);
    }

    handleItemSelect = e => {
        console.log("e.target.value: ", e.currentTarget.value);
        const item = e.currentTarget.value;

        this.setState(prevState => ({
            selectedItems: [...prevState.selectedItems, item]
        }));
    };

    handleContainerSize = e => {
        const size = e.currentTarget.value;
        this.setState(prevState => ({
            containerSize: size
        }));
    };

    handleDelete = index => {
        this.setState(prevState => {
            let newData = prevState.selectedItems.slice();
            newData.splice(index, 1);
            return { selectedItems: newData };
        });
    };

    handleMoveUp = index => {
        console.log("Move up: ", index);

        if (index > 0) {
            this.setState(prevState => {
                let newData = prevState.selectedItems.slice();
                let element = newData[index];
                newData.splice(index, 1);
                newData.splice(index - 1, 0, element);
                return { selectedItems: newData };
            });
        } else {
            console.log("can't go higher");
        }
    };
    handleMoveDown = index => {
        if (index < this.state.selectedItems.length - 1) {
            this.setState(prevState => {
                let newData = prevState.selectedItems.slice();
                let element = newData[index];
                newData.splice(index, 1);
                newData.splice(index + 1, 0, element);
                return { selectedItems: newData };
            });
        } else {
            console.log("can't go lower");
        }
    };

    render() {
        const { items, selectedItems, containerSize } = this.state;

        return (
            <div>
                <main>
                    <section className="sidebar">
                        <ItemSelector
                            items={items}
                            handleItemSelect={this.handleItemSelect}
                        />
                    </section>
                    <section className="content">
                        <ToggleSize
                            toggleSizeClass={this.handleContainerSize}
                        />
                        <Container size={containerSize}>
                            <ItemList
                                selectedItems={selectedItems}
                                handleDelete={this.handleDelete}
                                handleMoveUp={this.handleMoveUp}
                                handleMoveDown={this.handleMoveDown}
                            />
                        </Container>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
