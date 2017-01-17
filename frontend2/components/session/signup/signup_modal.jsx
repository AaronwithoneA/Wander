import React from 'react';
import SignUpFormContainer from './signup_form_container';
import LoginModal from '../login/login_modal';

const Modal = require('boron/ScaleModal');
const SignUpModal = React.createClass({
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
            <div>
                <button className ="nav_button" onClick={this.showModal}>Sign Up</button>
                <Modal className="modal-form" ref="modal" >
                    <SignUpFormContainer />
                </Modal>
            </div>
        );
    }
});

export default SignUpModal;
