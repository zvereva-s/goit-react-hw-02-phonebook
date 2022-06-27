import { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './filter.module.css';

class Filter extends Component {

        render() {
        return (
            <div className={styles.wrapper}>
                <label className={styles.label}>{this.props.title}
                    <input className={styles.input} type="text" onChange={this.props.filter} required />
                </label>
            </div>
        )
    }
}

// Filter.propTypes = {
//     title:PropTypes.string,
//     filter: PropTypes.string.isRequired,
// }

export default Filter;