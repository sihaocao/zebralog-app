import React, { Component, Fragment } from 'react';
import LogsList from './components/LogsList';
import AddLog from './components/AddLog';
import { CSVLink } from 'react-csv';
import './App.css'

class App extends Component {
  
  // default dummy data
  state = {
    logs:[
      { game_date: '2019-02-01', site: 'Boston High School', distance: '40', paid: 'Yes', type: 'Varsity', amount: '91', notes: 'Good game!', isEditing: false },
      { game_date: '2019-05-01', site: 'Springfield High School', distance: '50', paid: 'Yes', type: 'Subvarsity', amount: '68', notes: 'Great game!', isEditing: false },
      { game_date: '2019-08-01', site: 'Worcester High School', distance: '30', paid: 'Yes', type: 'Tournament', amount: '45', notes: 'Excellent game!', isEditing: false },
    ]
  }

  // (newLog) is received from AddLog.js
  addLog = (newLog) => {
    let logs = [ ...this.state.logs, newLog ];
    this.setState({
      logs
    });
  }

  // when the 'Edit' button is pressed
  // (i) is received from LogsList.js
  pressEditBtn = (i) => {
    let logs = this.state.logs;
    logs[i].isEditing = true;
    this.setState({
      logs
    });
  }

  // (i, game_date, site, distance, paid, type, amount, notes) is received from LogsList.js
  updateLog = (i, game_date, site, distance, paid, type, amount, notes) => {
    let logs = this.state.logs;
    logs[i].game_date = game_date;
    logs[i].site = site;
    logs[i].distance = distance;
    logs[i].paid = paid;
    logs[i].type = type;
    logs[i].amount = amount;
    logs[i].notes = notes;
    logs[i].isEditing = false;

    this.setState({
      logs
    });
  }

  // (i) is received from LogsList.js
  pressDelete = (i) => {
    let logs = this.state.logs.filter((l, index) => {
      return index !== i;
    });
    this.setState({
      logs
    });
  }

  render() {
    return (
      <Fragment>
        <div className='logo_header'>
          <div className='logo'>Logo Placeholder</div>
          <h1 className='logo_header_title'>ZebraLogs</h1>
        </div>
        <CSVLink
          filename={'zebralogs_db.csv'}
          className='Download__Button'
          data={this.state.logs}
        >
          Download CSV
        </CSVLink>
        <LogsList allLogs={this.state.logs} pressEditBtn={this.pressEditBtn} updateLog={this.updateLog} pressDelete={this.pressDelete} />
        <AddLog addLog={this.addLog} />
      </Fragment>
    );
  }
}

export default App;
