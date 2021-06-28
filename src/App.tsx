import "./styles.scss";
import "@webex/widget-space/src/momentum.scss";

//import SpaceWidget, { destinationTypes } from "@webex/widget-space";
// Sass import required to style widgets

/*
const spaceWidgetProps = {
  accessToken:
    "NmE0ZTYzZDktODg5OC00YjBhLTg2ZTYtZWI2NmViY2FhODViMzJiNGQ2NzktNWM5_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f", // Required
  destinationType: destinationTypes.USERID,
  destinationId: "YOUR_DESTINATION_USERID",
  activities: {
    files: false,
    meet: true,
    message: false,
    people: true
  },
  initialActivity: "meet"
};

*/
export default function App() {
  return (
    <div className="App">
      <h1>Webex </h1>
      <p>This is gonna display JavaScript spaces</p>

      <h3>Meetings</h3>
      <p>This will display a series of meeting cards.</p>

      <h2>Spaces</h2>

    </div>
  );
}
