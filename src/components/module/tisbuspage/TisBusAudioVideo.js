import ShowListMenu from "../ShowListMenu";

function TisBusAudioVideo() {
  const AudioVideoList = [
    {
      title: "4Zone Amplifier",
      Image: "/image/tis-group/tis-bus/Audio-Video/4Zone-Amplifier.jpg",
    },
    {
      title: "Audio Player PL17100",
      Image: "/image/tis-group/tis-bus/Audio-Video/Audio-Player-PL17100.jpg",
    },
    {
      title: "AV IP Matrix",
      Image: "/image/tis-group/tis-bus/Audio-Video/AV-IP-Matrix.jpg",
    },
    {
      title: "Audio Matrix",
      Image: "/image/tis-group/tis-bus/Audio-Video/Audio-Matrix.jpg",
    },
    {
      title: "IR Emitter",
      Image: "/image/tis-group/tis-bus/Audio-Video/IR-Emitter.jpg",
    },
    {
      title: "Speakers",
      Image: "/image/tis-group/tis-bus/Audio-Video/Speakers.jpg",
    },
  ];

  return <ShowListMenu list={AudioVideoList} />;
}

export default TisBusAudioVideo;
