import React from 'react';
import LoginFormContainer from './login_form_container';
import SignUpModal from '../signup/signup_modal';

const Modal = require('boron/ScaleModal');


const LoginModal = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },

    callback: function(event){
        console.log(event);
    },

    render: function() {
        return (
            <div >
                <button className="nav_button" onClick={this.showModal}>Log In</button>
                <div >
                  <Modal className='modal-form'ref="modal">
                      <LoginFormContainer />
                  </Modal>
                </div>
            </div>
        );
    }
});

export default LoginModal;
