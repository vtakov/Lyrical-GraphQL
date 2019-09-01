import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyric from '../queries/likeLyric.js';

class LyricList extends Component {
    onLike(id) {
        this.props.mutate({
            variables: { id: id }
        });
    }

    renderLyrics() {
        return this.props.lyrics.map(lyric => {
            return (
                <li key={lyric.id} className="collection-item">
                    {lyric.content}
                    <i
                        className="material-icons"
                        onClick={() => this.onLike(lyric.id)}
                    >thumb_up</i>
                    {lyric.likes}
                </li>
            );
        });
    }

    render () {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

export default graphql(likeLyric)(LyricList);