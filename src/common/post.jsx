import profilePic from "../assets/image/profilePic.jpeg";
import PostModal from "./postmodal";

const Post = props => {
	const {
		url,
		userName,
		bookmarked,
		id,
		onLike,
		onSave,
		totalLike,
		onDoubleTap,
	} = props;
	return (
		<div className="mb-3 bg-light w-100 natgram-feed-post">
			<div className="feed-post-top-section p-2 d-flex flex-row">
				<div className="d-flex flex-column justify-content-center">
					<img src={profilePic} className="feed-post-profile-pic" />
				</div>
				<div className="d-flex flex-column justify-content-center">
					<p className="feed-post-user-name">{userName}</p>
				</div>
				<div className="d-flex flex-column justify-content-center ms-auto">
					<PostModal />
				</div>
			</div>
			<div className="feed-post-middle-section w-100">
				<img onClick={() => onDoubleTap(id)} className="w-100" src={url} />
				<div className="d-flex flex-row px-2 my-2">
					<i
						className={
							totalLike ? "fa fa-2x me-2 fa-heart" : "fa fa-2x me-2 fa-heart-o"
						}
						onClick={() => onLike(id)}
					></i>
					<i className="fa fa-comment-o me-2 fa-2x"></i>
					<i className="fa fa-send-o me-2 fa-2x"></i>
					<i
						className={
							bookmarked
								? "fa fa-bookmark ms-auto fa-2x"
								: "fa fa-bookmark-o ms-auto fa-2x"
						}
						onClick={() => onSave(id)}
					></i>
				</div>
				<div className="p-2">
					<p className="like-text">
						Liked by <span className="fw-bold">{userName}</span> and{" "}
						<span className="fw-bold">
							<span className="mx-1">{totalLike ? totalLike : ""}</span>others
						</span>
					</p>
				</div>
			</div>
			<hr />
			<div className="feed-post-bottom-section px-2 pb-2">
				<div className="d-flex flex-row">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						fill="currentColor"
						className="bi bi-emoji-smile"
						viewBox="0 0 17 17"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
					</svg>
					<input
						className="ms-2 mt-n2 ln-1 p-2 border-0 bg-transparent comment-box"
						type="text"
						placeholder="How you doin..."
					/>
					<button
						type="submit"
						className="border-0 bg-transparent fw-bold text-primary ms-auto "
					>
						Post
					</button>
				</div>
			</div>
		</div>
	);
};

export default Post;
