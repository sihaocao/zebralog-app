import React, { Component } from 'react';
import './LogsList.css';

class LogsList extends Component {

    // call UpdateLog from (App.js)
    handleUpdate = () => {
        this.props.updateLog(this.indexNum, this.game_date.value, this.site.value, this.distance.value, this.paid.value, this.type.value, this.amount.value, this.notes.value);
    }

    render() {

        const { allLogs, pressEditBtn, pressDelete } = this.props;

        const logsList = allLogs.map((log, index) => {

            return log.isEditing === true ? (

                <tr key={index}>
                    <td><input type='date' ref={(val) => {this.game_date = val}} required defaultValue={log.game_date} /></td>
                    <td><input type='text' ref={(val) => {this.site = val}} required defaultValue={log.site} /></td>
                    <td><input type='number' ref={(val) => {this.distance = val}} required defaultValue={log.distance} /></td>
                    <td><input type='text' ref={(val) => {this.paid = val}} required defaultValue={log.paid} /></td>
                    <td><input type='text' ref={(val) => {this.type = val}} required defaultValue={log.type} /></td>
                    <td><input type='number' ref={(val) => {this.amount = val}} required defaultValue={log.amount} /></td>
                    <td><input type='text' ref={(val) => {this.notes = val}} required defaultValue={log.notes} /></td>
                    <td>
                        <input type='button' value='Update' onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className='Update__Button' />
                    </td>
                </tr>

            ) : (

                <tr key={index}>
                    <td>{log.game_date}</td>
                    <td>{log.site}</td>
                    <td>{log.distance} miles</td>
                    <td>{log.paid}</td>
                    <td>{log.type}</td>
                    <td>${log.amount}</td>
                    <td>{log.notes}</td>
                    <td>
                        <button className='Edit__Button' onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className='Delete__Button' onClick={() => pressDelete(index)}>Delete</button>
                    </td>
                </tr>
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Game Date</th>
                        <th>Site</th>
                        <th>Distance</th>
                        <th>Paid?</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {logsList}
                </tbody>
            </table>
        );
    }
}

export default LogsList;