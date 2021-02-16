const Story = props => {
	const { image, userName } = props;
	return (
		<div>
			<div className="story mr-2">
				<img className="story-image w-100" src={image} alt="image" />
			</div>
			<p className="story-user-name text-center">{userName}</p>
		</div>
	);
};

export default Story;
