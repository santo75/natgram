const Navbar = () => {
	return (
		<nav class="navbar nav-bar navbar-expand-lg navbar-light bg-light px-5">
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
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav  ml-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							<i className="fa fa-home"></i>
						</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href="#">
							<i className="fa fa-commenting"></i>
						</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href="#">
							<i className="fa fa-heart-o"></i>
						</a>
					</li>
					<li class="nav-item active">
						<a class="nav-link" href="#">
							<div className="nav-profile-pic-container d-flex flex-column justify-content-center">
								<img
									className="profile-pic"
									src="profilePic.jpeg"
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
