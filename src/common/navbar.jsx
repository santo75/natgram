import profilePic from "../assets/image/profilePic.jpeg";

const Navbar = () => {
	return (
		<nav className="navbar nav-bar navbar-expand-lg navbar-light bg-light px-5">
			<a className="navbar-brand natgram-text" href="#">
				NATGRAM
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav  ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							<i className="fa fa-home"></i>
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							<i className="fa fa-commenting"></i>
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							<i className="fa fa-heart-o"></i>
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
		</nav>
	);
};

export default Navbar;
