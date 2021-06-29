import React from "react";

const PostModal = () => {
	return (
		<div>
			<i
				data-bs-toggle="modal"
				data-bs-target="#postModal"
				className="fa fa-ellipsis-h ms-auto"
				aria-hidden="true"
			></i>

			<div
				className="modal fade"
				id="postModal"
				tabIndex="-1"
				aria-labelledby="postModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered modal-sm">
					<div className="modal-content">
						<div className="modal-body text-center">
							<p className="text-danger fw-bold cursor">Report</p>
							<hr />
							<p className="text-danger fw-bold cursor">Unfollow</p>
							<hr />
							<p className="cursor">Go to post</p>
							<hr />
							<p className="cursor">Share to...</p>
							<hr />
							<p className="cursor">Copy Link</p>
							<hr />
							<p className="cursor">Embed</p>
							<hr />
							<p className="cursor" data-bs-dismiss="modal">
								Cancel
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostModal;
