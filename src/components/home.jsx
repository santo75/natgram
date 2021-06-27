import React, { Component } from "react";
import image from "../assets/image/collegeImage.jpg";
import profilePic from "../assets/image/profilePic.jpeg";
import Story from "../common/story";
import Post from "../common/post";
import Profile from "../common/profile";
import Navbar from "../common/navbar";

class Home extends Component {
	state = {
		stories: [
			{
				id: 1,
				url: profilePic,
				userName: "_s_k_y_29",
			},
			{ id: 2, url: profilePic, userName: "_s_k_y_29" },
			{ id: 3, url: profilePic, userName: "_s_k_y_29" },
			{ id: 4, url: profilePic, userName: "_s_k_y_29" },
		],
		posts: [
			{
				id: 1,
				url: image,
				userName: "_s_k_y_29",
				liked: false,
			},
			{ id: 2, url: image, userName: "_s_k_y_29", liked: false },
			{ id: 3, url: image, userName: "_s_k_y_29", liked: false },
			{ id: 4, url: image, userName: "_s_k_y_29", liked: false },
			{ id: 5, url: image, userName: "_s_k_y_29", liked: false },
			{ id: 6, url: image, userName: "_s_k_y_29", liked: false },
		],
	};
	handleLike = id => {
		const posts = this.state.posts;
		const index = posts.findIndex(post => {
			if (post.id === id) return true;
		});
		posts[index].liked = true;
		this.setState({ posts });
	};

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-7">
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
										onLike={this.handleLike}
									/>
								))}
							</div>
						</div>
						<div className="col-1"></div>
						<div className="col-12 col-md-4 d-none d-md-block">
							<Profile userName="_s_k_y_29" fullName="Santosh Kumar Yadav" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
