import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCount, incrementValue } from './slices';

class CounterClassUsingRedux extends Component {
    render() {
        const { count, updateCount, incrementValue } = this.props;
        return (
            <>
            <div>
                Counter: { count }
            </div>
            <button
                onClick={() => updateCount()}
            >update counter</button>
            <button
                onClick={() => incrementValue(3)}
            >icrement counter by 3</button>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count.count,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateCount,
    incrementValue
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CounterClassUsingRedux);
