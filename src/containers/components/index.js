import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Button from './components/button';
import MyDate from './components/date';
import Slider from './components/slider';
import Menu from './components/menu';
import Tab from './components/tab';
import AppBar from './components/appBar';
import ExpensionPanel from './components/expensionPanel';
import Progress from './components/progress';
import Avatar from './components/avatar';
import Icon from './components/icon';
import List from './components/list';
import Table from './components/table';
import Autocomplete from './components/autocomplete';
import Rating from './components/rating';
import TreeView from './components/treeView';

const Components = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Switch>
      <Route path='/components/button' component={Button} />
      <Route path='/components/date' component={() => <MyDate selectedDate={selectedDate} handleDateChange={handleDateChange} />} />
      <Route path='/components/slider' component={Slider} />
      <Route path='/components/menu' component={() => <Menu anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} />} />
      <Route path='/components/tab' component={Tab} />
      <Route path='/components/appBar' component={AppBar} />
      <Route path='/components/expensionPanel' component={ExpensionPanel} />
      <Route path='/components/progress' component={Progress} />
      <Route path='/components/avatar' component={Avatar} />
      <Route path='/components/icon' component={Icon} />
      <Route path='/components/list' component={List} />
      <Route path='/components/table' component={Table} />
      <Route path='/components/autocomplete' component={Autocomplete} />
      <Route path='/components/rating' component={Rating} />
      <Route path='/components/treeView' component={TreeView} />
    </Switch>
  )
}

export default Components