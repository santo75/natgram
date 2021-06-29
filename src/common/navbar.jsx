import profilePic from "../assets/image/profilePic.jpeg";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div className="container">
				<a className="navbar-brand natgram-text" href="#">
					NATGRAM
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav  ms-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								<i className="fa fa-home"></i>
								<span className="ms-2 fs-6">Home</span>
							</a>
						</li>
						<li className="nav-item active n13-mt">
							<a className="nav-link" href="#">
								<i className="fa fa-commenting"></i>
								<span className="ms-2 fs-6">Messages</span>
							</a>
						</li>
						<li className="nav-item active n13-mt">
							<a className="nav-link" href="#">
								<i className="fa fa-heart-o"></i>
								<span className="ms-2 fs-6">Notifications</span>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#">
								<div className="nav-profile-pic-container d-flex flex-column justify-content-center">
									<img
										className="profile-pic"
										src={profilePic}
										alt="prfile_pic"
									/>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
