import ControlPanel from './ControlPanel/ControlPanel';
import InitialState from './InitialState/InitialState';
import Lift from './Lift/Lift';
import Shaft from './Shaft/Shaft';
import Building from './Building';

export default Object.assign(Building, {
	ControlPanel,
	InitialState,
	Lift,
	Shaft,
});

export { ControlPanel, InitialState, Lift, Shaft };
