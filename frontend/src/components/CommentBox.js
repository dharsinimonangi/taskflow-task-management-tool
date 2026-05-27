function CommentBox() {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h3>Comments</h3>

      <textarea
        placeholder="Write comment..."
        style={{
          width: "100%",
          height: "100px",
          marginTop: "10px",
        }}
      />

      <button
        style={{
          marginTop: "10px",
        }}
      >
        Send
      </button>
    </div>
  );
}

export default CommentBox;