'use client';

import { Button, Space } from 'antd';
import { useState } from 'react';

import AuthModal from '@ya/components/Header/Components/AuthModal/AuthModal';

import styles from './Header.module.scss';

export enum Mode {
  Login,
  Register,
}

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<Mode>(Mode.Login);

  const handleAuthClick = (mode: Mode) => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };
  return (
    <>
      <header className={styles.header}>
        <h1>Yasashii</h1>
        <Space size="middle">
          <Button type="primary" onClick={() => handleAuthClick(Mode.Login)}>
            Login
          </Button>
          <Button onClick={() => handleAuthClick(Mode.Register)}>
            Register
          </Button>
        </Space>
      </header>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={authMode}
        onModeSwitch={(mode: Mode) => setAuthMode(mode)}
      />
    </>
  );
};

export default Header;
