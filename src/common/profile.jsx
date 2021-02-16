const Profile = props => {
	const { userName, fullName } = props;
	return (
		<div>
			<div className="profile-container mt-5 d-flex flex-row">
				<img src="profilePic.jpeg" className="profile" />
				<div className="d-flex flex-column justify-content-center ml-3">
					<p className="user-name">{userName}</p>
					<p className="full-name">{fullName}</p>
				</div>
			</div>
			<p className="bio">
				I am Santosh Kumar and currently doing my B.Tech from IIT Tirupati. I
				love to explore nature. I keep investigating about interseting thing of
				nature.
			</p>
		</div>
	);
};

export default Profile;
