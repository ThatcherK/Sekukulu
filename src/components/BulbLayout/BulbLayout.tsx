import { Bulb } from "../AddBulb";

interface BulbLayoutProps {
    bulbs: Bulb[];
}
function BulbLayout (props: BulbLayoutProps) {

    return (
    <>
        {props.bulbs.map((bulb) => (
            <span>{bulb.getColour()}</span>
        ))}
    </>
    );
  }

export {BulbLayout}
