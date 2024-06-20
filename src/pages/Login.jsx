import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaGoogle, FaPhoneAlt } from 'react-icons/fa'

export default function Login() {
  const [reg, setReg] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type='primary' onClick={showModal}>Kirish</Button>

      <Modal title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='modal'>
        {reg ?
        // 1
          <form method='POST' className="form" action='https://getform.io/f/a105321b-f3a2-45fa-b584-b731ca25f8b8'>
            <h3>Ro'yhatdan O'tish</h3>
            <div className='labels'>
              <label>Ism</label>
              <Input placeholder="Ismingizni Kiriting" />
            </div>
            <div className='labels'>
              <label>Email</label>
              <Input placeholder="Emailingizni Kiriting" />
            </div>
            <div className='labels'>
              <label>Password</label>
              <Input.Password placeholder="Parolingizni Kiriting" iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)} />
            </div>
            <Button>Kirish</Button>
            <h4 onClick={() => setReg(false)}>Do not have an account?</h4>
            <div className="buttons">
              <Button><FaGoogle /> Google</Button>
              <Button><FaPhoneAlt />  Phone</Button>
            </div>
          </form> :

          // 2
          <form method='POST' className="form" action='https://getform.io/f/a105321b-f3a2-45fa-b584-b731ca25f8b8'>
            <h3>Kirish</h3>
            <div className='labels'>
              <label>Email</label>
              <Input placeholder="Emailingizni Kiriting" />
            </div>
            <div className='labels'>
              <label>Password</label>
              <Input.Password placeholder="Parolingizni Kiriting" iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)} />
            </div>
            <Button>Kirish</Button>
            <h4 onClick={() => setReg(true)}>Have you account?</h4>
            <div className="buttons">
              <Button><FaGoogle /> Google</Button>
              <Button><FaPhoneAlt />  Phone</Button>
            </div>
          </form>}
      </Modal>

    </div>
  )
}
