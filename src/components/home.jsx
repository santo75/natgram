import React, { Component } from "react";
import Story from "../common/story";
import Post from "../common/post";
import Profile from "../common/profile";
import Navbar from "../common/navbar";
import posts from "../data/postList.js";
import stories from "../data/storiesList.js";

class Home extends Component {
	state = {
		stories: stories,
		posts: posts,
	};
	getIndex = (arr, id) => {
		return arr.findIndex(item => {
			if (item.id === id) return true;
		});
	};
	constructor() {
		super();
		this.timeStamp = [];
	}
	handleLike = id => {
		const posts = this.state.posts;
		const index = this.getIndex(posts, id);
		if (posts[index].totalLike !== 0) {
			posts[index].totalLike -= 1;
		} else {
			posts[index].totalLike += 1;
		}
		this.setState({ posts });
	};
	handleLikeOnDoubleTap = id => {
		this.timeStamp.push(new Date().getTime());
		const n = this.timeStamp.length;
		if (n === 2 && this.timeStamp[1] - this.timeStamp[0] < 1200)
			this.handleLike(id);
		if (n !== 1) this.timeStamp = [];
	};
	handleSave = id => {
		const posts = this.state.posts;
		const index = this.getIndex(posts, id);
		posts[index].bookmarked === true
			? (posts[index].bookmarked = false)
			: (posts[index].bookmarked = true);
		this.setState({ posts });
	};
	handleStoryView = id => {
		const stories = this.state.stories;
		const index = this.getIndex(stories, id);
		stories[index].seen = true;
		this.setState({ stories });
	};

	render() {
		return (
			<div className="App">
				<Navbar className="d-none d-md-block" />
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8 mt-5">
							<div className="natgram-feed-story bg-light mt-4 d-flex flex-row">
								{this.state.stories.map(story => (
									<Story
										key={story.id}
										id={story.id}
										image={story.url}
										userName={story.userName}
										onStoryView={this.handleStoryView}
										seen={story.seen}
									/>
								))}
							</div>
							<div className="mt-5 mb-3">
								{this.state.posts.map(post => (
									<Post
										key={post.id}
										id={post.id}
										url={post.url}
										userName={post.userName}
										bookmarked={post.bookmarked}
										totalLike={post.totalLike}
										onLike={this.handleLike}
										onSave={this.handleSave}
										onDoubleTap={this.handleLikeOnDoubleTap}
									/>
								))}
							</div>
						</div>
						<div className="col-1"></div>
						<div className="col-12 col-md-3 d-none d-md-block mt-md-5">
							<Profile userName="_s_k_y_29" fullName="Santosh Kumar Yadav" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
