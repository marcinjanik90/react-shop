import React from 'react';

import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, cartHidden}) => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'>
                <Logo/>
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
            <div className='option'>
                <CartIcon/>
            </div>
        </div>
        {!cartHidden && (
            <CartDropdown/>
        )}
    </div>
);

const mapStateToProps = ({user, cart}) => ({
    currentUser: user.currentUser,
    cartHidden: cart.hidden
});

export default connect(mapStateToProps)(Header);