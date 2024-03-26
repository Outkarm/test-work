const YoutubeVideo = ({ embededUrl }) => {
  return (
    <>
      <iframe
        width="300"
        height="500"
        src={embededUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style={{ marginBottom: "20px" }}
      ></iframe>
    </>
  );
};
export default YoutubeVideo;
