import React, { ReactElement } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/index';

interface IProps {
  logout: () => void, 
};

const LogoutButton = ({logout}: IProps): ReactElement<IProps> => 
  <Button
    onPress={logout}
    title="Log out"/>;

const mapDispatchToProps = (dispatch: Function) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(LogoutButton);
