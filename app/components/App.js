import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreator from '../actions/index';
import ShowsList from './ShowsList';

function mapStateToProps(state) {
    return {
        clickedImage: state.clickedImage
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(ShowsList)

export default App;
