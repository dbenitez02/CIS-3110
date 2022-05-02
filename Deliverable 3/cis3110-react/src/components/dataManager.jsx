import React, { Component } from 'react';

class DataManager extends Component {
    state = {
        defaultValue: "",
        value: this.props.addItemValue || ""
    }; 

    handleChange = (e) => {
        // update the local component's state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        // Clear existing value in the Input.
        this.setState({value: ""});
    }

    addItem = () => {
        // Call method reference in Items Component?
        this.props.fooDataManager(this.state.value);
        this.clearInput();
    }

    render() { // put out html
        return(
            <div className="input-group mb-3">
                <input value={this.state.value} type="text" className="form-control" id="itemValue" placeholder="item"
                    onChange={this.handleChange}></input>

                <div className="input-group-append">
                    <button onClick={this.addItem} className="btn btn-outline-secondary" type="button"
                        id="button-addon2">Add New To-Do</button>
                </div>
            </div>
        ); 
    }

}

export default DataManager;