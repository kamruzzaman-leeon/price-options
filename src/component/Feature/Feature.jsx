import PropTypes from 'prop-types'
import { AiFillCheckCircle } from 'react-icons/Ai';
const Feature = ({feature}) => {
    return (
        <div className='flex gap-2 '>
            <AiFillCheckCircle className='text-xl text-green-300 '></AiFillCheckCircle>
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes={
    feature: PropTypes.string
}
export default Feature;