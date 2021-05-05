import React, { Component } from 'react'
import axios from 'axios';
import ImageResults from "../imageresult/ImageResult";
class Search extends Component {
    state = {
        searchText: '',
        apiUrl: 'http://pixabay.com/api',
        apiKey: '21472884-19e587673705284b460076df6',
        images: []
    };
    onTextChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            axios
                .get(
                    `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText
                    }&image_type=photo&safesearch=true`
                )
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log(err));
        });
    }

    render() {
        console.log(this.state.images)
        return (
            <div>
                <input type="text"
                    style={
                        {
                            backgroundColor: 'black',
                            color: 'white',
                            marginLeft: 570,
                            marginTop: 100,
                            paddingLeft: 70,
                            fontSize: 30,
                            borderTopStyle: "hidden",
                            borderRightStyle: "hidden",
                            borderTopStyle: "hidden",
                            outline: "none",
                            borderBottomStyle: "groove",

                        }

                    }
                    placeholder="search image"
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}></input>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        )
    }
}
export default Search