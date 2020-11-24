import React, { Component } from 'react';
import Jour from './Jour';


export default class Menu extends Component {
    
    title = this.props.title

    render() {
        return (
            <div >
                <h1 className="display-1" style={{ textAlign: 'center' }}>{this.title}</h1>                
                <div className="list-group">
                    <Jour title='Lundi' code={'3454681006511'} />
                    <Jour title='Mardi' code={'737628064502'} />
                    <Jour title='Mercredi' code={'3250392392277'} />
                    <Jour title='Jeudi' code={'3700009252567'} />
                    <Jour title='Vendredi' code={'3564707109888'} />
                    <Jour title='Samedi' code={'8411555100404'} />
                    <Jour title='Dimanche' code={'5449000000996'} />                    
                </div>
            </div>
        );
    }
}
