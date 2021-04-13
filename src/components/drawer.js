import * as React from 'react';
import PropTypes from 'prop-types';
import { Drawer as AntdDrawer } from 'antd';

function Drawer({ visible, setVisible }) {
  const onClose = () => setVisible(false);

  return (
    <>
      <AntdDrawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Profile</p>
        <p>Settings</p>
        <p>Search</p>
      </AntdDrawer>
    </>
  );
}

Drawer.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func
};

export default Drawer;