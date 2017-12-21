import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Configue Enzyme to use the adapter, this needs to be done for enzyme 3
Enzyme.configure({ adapter: new Adapter() });
// require all modules ending in "-test" from the
// current directory and all subdirectories
var testsContext = require.context('.', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);


