import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong.js';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;

        if (this.props.data.loading) {
            return (
                <div>Loading..</div>
            );
        }

        return (
            <div>
                <h3>{song.title}</h3>
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
