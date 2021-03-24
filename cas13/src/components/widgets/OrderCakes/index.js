// vendor imports
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// components
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Info from '../../ui/Messages/Info';
import Error from '../../ui/Messages/Error';
// actions
import { buyCakes } from '../../../redux/ducks/cakes';
// styles 
import './style.css';

const OrderCakes = (props) => {
    const [numCakes, setNumCakes] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        // console.log(numCakes !== 0 && numCakes > 0);
        setButtonDisabled(!(numCakes !== 0 && numCakes > 0));
    }, [numCakes]);

    const onInputChange = (event) => {
        if (event.target.value) {
            setNumCakes(parseInt(event.target.value));
        }
    };

    const onBuyCakesClick = () => {
        props.buyCakes(numCakes);
        setNumCakes(0);
    };

    return (
        <div className='buy-cakes-wrapper'>
            <div className='buy-cakes-form'>
                <Input placeholder='Number of cakes to buy' value={numCakes} onChange={onInputChange} />
                <Button label='Buy cakes' onClick={onBuyCakesClick} disabled={buttonDisabled} />
            </div>
            {props.buyCakesMessage && <Info infoMessage={props.buyCakesMessage} />}
            {props.buyCakesError && <Error errorMessage={props.buyCakesError} />}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        buyCakesMessage: state.buyCakesMessage,
        buyCakesError: state.buyCakesError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyCakes: (numCakes) => { dispatch(buyCakes(numCakes)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCakes);