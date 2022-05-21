import { Bulb } from "../AddBulb";

interface BulbLayoutProps {
    bulbs: Bulb[];
}
function BulbLayout (props: BulbLayoutProps) {

    return (
    <>
        {props.bulbs.map((bulb) => (
            <span style={{backgroundColor: bulb.getColour(), width: '20px', height: '20px', margin: '10px', borderStyle: 'solid'}}/>
        ))}
    </>
    );
  }

export {BulbLayout}
