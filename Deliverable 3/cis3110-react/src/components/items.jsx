import React, { Component } from 'react';

import Item from './item';
import DataManager from './dataManager';

class Items extends Component {
    state = {   // Object
        addItemValue: "",
        items : [
            {
                id: 1,
                value: "item 1",
                isDone: false
            },
            {
                id: 2,
                value: "item 2",
                isDone: false
            },
            {
                id: 3,
                value: "item 3",
                isDone: false
            }
        ]
    };

    getTime() { // Provide timestamp
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    handleDelete = item => {
        const items = this.state.items.filter((i) => {
            return i.id !== item
        });
        this.setState({ items });
    }

    handleDone = item => {
        const items = [...this.state.items];
        items.map((i) => {
            if (i.id === item.id) {
                i.isDone = !i.isDone;
            }
            return i;
        });
        this.setState({ items });
    }
    
    addNewItem = value => {
        if (value) {
            const items = [...this.state.items];
            items.push( 
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );

            this.setState({ addItemValue: "", items })
        } else {
            console.log("Add Item Text");
        }
    }

    render() {
        return(
            <table className="table">
                <tbody>
                    {this.state.items.map((item, index) => (
                        <tr key={item.id}>
                            <Item index={index+1} item={item}
                            fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}

                    <tr>
                        <td colSpan="4" className="text-center">
                            <DataManager fooDataManager={this.addNewItem}
                            dataManagerValue={this.state.dataManagerValue} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Items;