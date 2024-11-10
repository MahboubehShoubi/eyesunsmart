import React from 'react'
import ShowListMenu from '../ShowListMenu';

function OtherProductPanel() {
    const PanelList = [
        {
          title: "Screen",
          Image: "/image/tis-group/tis-air/controllers/ADS-Controller.jpg",
        },
        {
          title: "Simple Panel",
          Image: "/image/tis-group/tis-air/controllers/ACM-Switch.jpg",
        }
      ];
      return <ShowListMenu list={PanelList} />;
}

export default OtherProductPanel
