import React, { Component } from 'react';
import './AddLog.css';

class AddLog extends Component {

    state = {
        game_date: null,
        site: null,
        distance: null,
        paid: null,
        type: null,
        amount: null,
        notes: null,
        isEditing: false,
    }

    // call addLog from (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLog(this.state);
        e.target.reset();
    }

    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className='row'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-field col game_date'>
                        <input name='game_date' autoComplete='off' required type='date' onChange={this.updateState} />
                    </div>
                    <div className='input-field col site'>
                        <input name='site' autoComplete='off' placeholder='Enter site description' required type='text' onChange={this.updateState} />
                    </div>
                    <div className='input-field col distance'>
                        <input name='distance' autoComplete='off' placeholder='0' required type='number' onChange={this.updateState} />
                    </div>
                    <div className='input-field col paid'>
                        <input name='paid' autoComplete='off' placeholder='Yes' required type='text' onChange={this.updateState} />
                    </div>
                    <div className='input-field col type'>
                        <input name='type' autoComplete='off' placeholder='Other' required type='text' onChange={this.updateState} />
                    </div>
                    <div className='input-field col amount'>
                        <input name='amount' autoComplete='off' placeholder='0' required type='number' onChange={this.updateState} />
                    </div>
                    <div className='input-field col notes'>
                        <input name='notes' autoComplete='off' placeholder='None' required type='text' onChange={this.updateState} />
                    </div>
                    <div className='input-field col s1'>
                        <input type='submit' value='Add +' className='Add__Button' />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddLog;