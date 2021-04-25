import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import './sidebar-menu.styles.scss';

const SidebarMenu = ({ hidden }) => {
  console.log('ddd', hidden);
  return (
    <div className={`sidebar ${hidden ? '' : 'open'}`}>
      <Link className='page-link' to='/'>
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>
      <Link className='page-link' to='/product'>
        <FontAwesomeIcon icon={faBoxOpen} />
        <span>Product</span>
      </Link>
    </div>
  )
};

const mapStateToProps = state => ({
  hidden: state.menu.hidden
});

export default connect(mapStateToProps)(SidebarMenu);