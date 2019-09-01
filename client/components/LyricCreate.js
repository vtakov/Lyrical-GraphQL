import React, { Component } from 'react';
import addLyricToSong from '../queries/addLyricToSong.js';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { content: '' };
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a lyric</label>
                <input
                    value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })}
                />
            </form>
        );
    }
}

export default LyricCreate;