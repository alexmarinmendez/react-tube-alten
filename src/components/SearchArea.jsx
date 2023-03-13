import React from "react";
import Videos from '../containers/Videos';

class SearchArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            videos: this.props.videos
        }
        // this.submitHandler = this.submitHandler.bind(this)
    };

    submitHandler(e) {
        e.preventDefault();
        console.log("Searching for ", this.state.keyword,"...");
        let filterVideos = this.props.videos.filter(video => video.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
        this.setState({videos: filterVideos});
    }

    render() {
        return (
            <div className="search-area">
            <form
                onSubmit={this.submitHandler.bind(this)}
            >
                <label htmlFor="keyword">
                Search
                <input
                    id="keyword"
                    value={this.state.keyword}
                    placeholder="Search Keyword"
                    onChange={(e) => this.setState({keyword: e.target.value})}
                />
                </label>
                <button>Submit</button>
            </form>
            <Videos videos={this.state.videos} />
            </div>
        );
    }
};

export default SearchArea;