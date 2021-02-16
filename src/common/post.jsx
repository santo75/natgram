const Post = props => {
	const { url, userName, liked } = props;
	return (
		<div className="mb-3 bg-light w-100 natgram-feed-post">
			<div className="feed-post-top-section p-2 d-flex flex-row">
				<div className="d-flex flex-column justify-content-center">
					<img src="profilePic.jpeg" className="feed-post-profile-pic" />
				</div>
				<div className="d-flex flex-column justify-content-center">
					<p className="feed-post-user-name">{userName}</p>
				</div>
				<div className="d-flex flex-column justify-content-center ml-auto">
					<i class="fa fa-ellipsis-h ml-auto" aria-hidden="true"></i>
				</div>
			</div>
			<div className="feed-post-middle-section w-100">
				<img className="w-100" src={url} />
				<div className="d-flex flex-row px-2 my-2">
					<i className="fa fa-heart-o fa-2x mr-2"></i>
					<i className="fa fa-comment-o mr-2 fa-2x"></i>
					<i className="fa fa-send-o mr-2 fa-2x"></i>
					<i className="fa fa-bookmark-o ml-auto fa-2x"></i>
				</div>
				<div className="p-2">
					<p className="like-text">
						Liked by <span className="font-weight-bold">{userName}</span> and{" "}
						<span className="font-weight-bold">others</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
