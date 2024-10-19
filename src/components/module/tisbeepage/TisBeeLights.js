import ShowListMenu from '../ShowListMenu';

function TisBeeLights() {
    const LightsList = [
        {
          title: "RGBW-Bulb",
          Image: "/image/tis-group/tis-bee/Lights/RGBW-Bulb.jpg",
        },
      ];
      return <ShowListMenu list={LightsList} />;
}

export default TisBeeLights;
