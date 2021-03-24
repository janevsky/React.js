// vendor imports
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// components
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Info from '../../ui/Messages/Info';
// actions
import { restoreCakes } from '../../../redux/ducks/cakes';
// styles 
import './style.css';

const RestoreCakes = (props) => {
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

    const onRestoreCakesClick = () => {
        props.restoreCakes(numCakes);
        setNumCakes(0);
    };
    
    return (
        <div className='restore-cakes-wrapper'>
            <div className='restore-cakes-form'>
                <Input placeholder='Number of cakes to restore' value={numCakes} onChange={onInputChange} />
                <Button label='Restore cakes' onClick={onRestoreCakesClick} disabled={buttonDisabled} />
            </div>
            {props.restoreCakesMessage && <Info infoMessage={props.restoreCakesMessage} />}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        restoreCakesMessage: state.restoreCakesMessage,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        restoreCakes: (numCakes) => { dispatch(restoreCakes(numCakes)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestoreCakes);