import React from 'react';
import './track.css';

class Track extends React.Component {
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
    renderAction() {
        if(this.props.isRemoval){
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
            className="Track-action"
            onClick={this.removeTrack}
            >-</a>
            );
        } else {
            return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
            className="Track-action"
            onClick={this.addTrack}
            >+</a>
            );
        };
    }

    addTrack(e){
        this.props.onAdd(this.props.track);
    }
    
    removeTrack(e){
        this.props.onRemove(this.props.track);
    }
}

export default Track;