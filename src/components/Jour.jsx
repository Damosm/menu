import React, { Component } from 'react';
import Api from '../api/Api';


export default class Jour extends Component {

    constructor(props) {
        super(props);
        this.code = this.props.code
        this.state = { aliment: [] };
        this.Search(this.code);
    }

    title = this.props.title

    Search = async term => {
        const response = await Api.get(term);
        this.setState({ aliment: response.data });
        console.log(response.data)
    };

    render() {
        if (this.state.aliment.product === undefined) {
            return (
                <a className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.title}</h5>
                        <small></small>
                    </div>
                    <p className="mb-1"></p>
                    <small></small>
                </a>
            );
        } else {
            return (
                <a className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.title}</h5>
                        <small>{this.state.aliment.product.countries}</small>
                    </div>
                    <p className="mb-1">{this.state.aliment.product.product_name_fr}</p>
                    <small>Ingredients : {this.state.aliment.product.ingredients_text_en_imported}</small>
                </a>
            );
        }
    }
}