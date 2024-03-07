import PropTypes from 'prop-types';

function CustomToolTip ({ active, payload}) {
    if (active && payload && payload.length) {
        return (
            <div className = "tip">
                <p className = "time">{payload[0].value+ ' min'}</p>
            </div>
        )
    }
    return null
}
CustomToolTip.propTypes = {
    active: PropTypes.bool, 
    payload: PropTypes.arrayOf(PropTypes.object),
}
export default CustomToolTip;