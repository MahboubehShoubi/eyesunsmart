import ShowListMenu from "../ShowListMenu";

function OtherProductAudio() {
    const AudioList = [
        {
          title: "Player",
          Image: "/image/tis-group/tis-air/controllers/ADS-Controller.jpg",
        },
        {
          title: "Speacker",
          Image: "/image/tis-group/tis-air/controllers/ACM-Switch.jpg",
        }
      ];
      return <ShowListMenu list={AudioList} />;
}

export default OtherProductAudio;