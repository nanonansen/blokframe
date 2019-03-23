import React, { Component } from "react";

import Container from "./components/Container";
import ToggleSize from "./components/ToggleSize";
import ItemSelector from "./components/ItemSelector";
import ItemList from "./components/ItemList";
import Icon from "./icons/index";

import html2canvas from "html2canvas";

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
        this.handlePageRender = this.handlePageRender.bind(this);
        this.handleCreateNew = this.handleCreateNew.bind(this);
        this.addCanvasAsURL = this.addCanvasAsURL.bind(this);

        this.renderEl = React.createRef();
        this.downloadBtn = React.createRef();
    }
    componentDidMount() {
        console.log("componentDidMount");
    }

    handleCreateNew = () => {
        const downloadBtn = this.downloadBtn.current;
        downloadBtn.href = "#";
        this.setState({ selectedItems: [], download: null });
    };

    handlePageRender = () => {
        const input = this.renderEl.current;
        if (this.state.selectedItems.length > 0) {
            this.addCanvasAsURL(input);
        }
    };

    addCanvasAsURL = input => {
        const downloadBtn = this.downloadBtn.current;
        const options = { logging: false };
        html2canvas(input, options).then(canvas => {
            canvas.toBlob(function(blob) {
                downloadBtn.href = URL.createObjectURL(blob);
            });
        });
    };

    handleItemSelect = e => {
        const item = this.state.items[e.currentTarget.value];

        this.setState(prevState => ({
            selectedItems: [...prevState.selectedItems, item],
            download: true
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

    componentDidUpdate() {
        console.log("Component did update");
        const downloadBtn = this.downloadBtn.current;

        if (this.state.selectedItems.length < 1) {
            console.log("No more items on canvas, no page render");
            downloadBtn.className = "btn disabled";
        } else {
            console.log("There are still items on canvas");
            this.handlePageRender();
            downloadBtn.className = "btn primary";
        }
    }

    handleMoveUp = index => {
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
                        <div className="logo">
                            <Icon name={"logo"} />
                        </div>
                        <ItemSelector
                            items={items}
                            handleItemSelect={this.handleItemSelect}
                        />
                        <div className="sidebar__bottom_bar">
                            <a
                                onClick={this.handlePageRender}
                                className="btn disabled"
                                href="#null"
                                download="image.png"
                                ref={this.downloadBtn}
                            >
                                Download as PNG
                            </a>
                            <a
                                onClick={this.handleCreateNew}
                                className="btn secondary"
                                href="#null"
                            >
                                Create New
                            </a>
                        </div>
                    </section>
                    <section className="content">
                        <ToggleSize
                            toggleSizeClass={this.handleContainerSize}
                        />
                        <Container size={containerSize}>
                            {selectedItems.length ? (
                                <div ref={this.renderEl}>
                                    <ItemList
                                        selectedItems={selectedItems}
                                        handleDelete={this.handleDelete}
                                        handleMoveUp={this.handleMoveUp}
                                        handleMoveDown={this.handleMoveDown}
                                    />
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <h3>Hey, it's empty here!</h3>
                                    <p>
                                        Add a few Bloks from the sidebar to get
                                        a wireframe going.
                                    </p>
                                </div>
                            )}
                        </Container>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
