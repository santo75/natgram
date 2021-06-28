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
	handleLike = id => {
		const posts = this.state.posts;
		const index = posts.findIndex(post => {
			if (post.id === id) return true;
		});
		posts[index].liked === true
			? (posts[index].liked = false)
			: (posts[index].liked = true);
		this.setState({ posts });
	};
	handleSave = id => {
		const posts = this.state.posts;
		const index = posts.findIndex(post => {
			if (post.id === id) return true;
		});
		posts[index].bookmarked === true
			? (posts[index].bookmarked = false)
			: (posts[index].bookmarked = true);
		this.setState({ posts });
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
										image={story.url}
										userName={story.userName}
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
										liked={post.liked}
										bookmarked={post.bookmarked}
										onLike={this.handleLike}
										onSave={this.handleSave}
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
