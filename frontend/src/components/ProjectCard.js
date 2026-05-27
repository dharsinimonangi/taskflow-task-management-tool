function ProjectCard({ title }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginBottom: "15px",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default ProjectCard;