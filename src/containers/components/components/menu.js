import React from 'react';
import TwoTabs from '../../../components/TwoTabs';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const buildCode = () => {
  return (
    `
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
<div>
<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Open Menu
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
</div>
    `
  )
}

const buildDemo = ({ anchorEl, handleClick, handleClose }) => {
  return (<div className="menu-section">
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Open Menu
  </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  </div>)
}

const MenuSection = (props) => {
  const params = {
    name: 'Menu',
    demo: buildDemo(props),
    code: buildCode()
  }
  return (
    <TwoTabs {...params} />
  )
}

export default MenuSection;