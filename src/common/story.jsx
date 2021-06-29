import StoryModal from "./stroyModal.jsx";

const Story = props => {
	const { id, image, userName, onStoryView, seen } = props;
	return (
		<div>
			<div
				data-bs-toggle="modal"
				data-bs-target="#storyModal"
				className={seen ? "story story-seen me-2" : "story story-added me-2"}
				style={{ cursor: "pointer" }}
				onClick={() => onStoryView(id)}
			>
				<img className="story-image w-100" src={image} alt="image" />
			</div>
			<p className="story-user-name text-center">{userName}</p>
			<StoryModal id="storyModal" userName={userName} url={image} />
		</div>
	);
};

export default Story;
