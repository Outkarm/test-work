import YoutubeVideo from "./YoutubeVideo";

const YouTubeExamples = () => {
  const embededUrl = [
    "https://www.youtube.com/embed/e7-9NMJyPzo?si=7m069WXmX9IDPdT1",
    "https://www.youtube.com/embed/RxIrNLx8b4I?si=2TMf7DCiKIDsRCZ0",
    "https://www.youtube.com/embed/V1fjrRCI4js?si=DEpF7DtooCUThAe7",
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        flexWrap: "wrap",
      }}
    >
      {embededUrl.map((url, index) => (
        <YoutubeVideo key={index} embededUrl={url} />
      ))}
    </div>
  );
};
export default YouTubeExamples;
