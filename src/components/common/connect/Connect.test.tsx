import renderer from "react-test-renderer";
import Connect from "./Connect";

it("When Clicked", () => {
    const component = renderer.create(<Connect />);
    const tree = component.toJSON();
});
