import Navbar from "./common/navbar";
import "./App.css";
import Story from "./common/story";
import Post from "./common/post";
import Profile from "./common/profile";

function App() {
	const stories = [
		{ url: "profilePic.jpeg", userName: "_s_k_y_29" },
		{ url: "profilePic.jpeg", userName: "_s_k_y_29" },
		{ url: "profilePic.jpeg", userName: "_s_k_y_29" },
		{ url: "profilePic.jpeg", userName: "_s_k_y_29" },
		{ url: "profilePic.jpeg", userName: "_s_k_y_29" },
	];
	const posts = [
		{ url: "collegeImage.jpg", userName: "_s_k_y_29", liked: false },
		{ url: "collegeImage.jpg", userName: "_s_k_y_29", liked: false },
		{ url: "collegeImage.jpg", userName: "_s_k_y_29", liked: false },
		{ url: "collegeImage.jpg", userName: "_s_k_y_29", liked: false },
		{ url: "collegeImage.jpg", userName: "_s_k_y_29", liked: false },
		{ url: "collegeImage.jpg", userName: "_s_k_y_29", liked: false },
	];
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-7">
						<div className="natgram-feed-story bg-light mt-4 d-flex flex-row">
							{stories.map(story => (
								<Story image={story.url} userName={story.userName} />
							))}
						</div>
						<div className="mt-5 mb-3">
							{posts.map(post => (
								<Post
									url={post.url}
									userName={post.userName}
									liked={post.liked}
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

export default App;
