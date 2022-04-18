import React, { Component } from 'react';

class item extends Component {

    render() {
        return(
            <React.Fragment>
                <td style={{ width: 10}} className="text-center">
                    {this.props.index}
                </td>
                <td style= {{ width: 15}} className="text-center">
                    <input type="checkbox" defaultChecked={this.props.isDone} 
                    onChange= {() => this.props.fooDoneDone(this.props.items)} />
                </td>
                <td>
                    {
                        this.renderitem()
                    }
                </td>

                <td style={{ width: 10}} className="text-center">
                    <button onClick= { () =>
                            this.props.fooDelete(this.props.item.id) } className="btn btn-danger btn-sm">Delete Item</button>
                </td>
                </React.Fragment>
            
        );
    }

    renderitem() {
        if(this.props.item.isDone) {
            return <s>{this.props.item.value}</s>;
        } else {
            return this.props.item.value;
        }
    }

}

export default item;