import ShowListMenu from "../ShowListMenu";

function TisBusMotors() {
    const MotorsList = [
        {
          title: "Curtain Motor",
          Image: "/image/tis-group/tis-bus/Motors/Curtain-Motor.jpg",
        },
        {
          title: "Roller Motor",
          Image: "/image/tis-group/tis-bus/Motors/Roller-Motor.jpg",
        },
        {
          title: "Projector Lift",
          Image: "/image/tis-group/tis-bus/Motors/Projector-Lift.jpg",
        },
        
      ];
    
      return <ShowListMenu list={MotorsList} first="TisBus" second="Motors"/>;
}

export default TisBusMotors;
