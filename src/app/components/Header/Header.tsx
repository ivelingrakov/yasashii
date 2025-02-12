'use client';

import { Button, Space } from 'antd';
import styles from './Header.module.scss';
import { useState } from 'react';
import AuthModal from '@/app/components/Header/Components/AuthModal/AuthModal';

interface HeaderProps {
    onAuthClick: (mode: 'login' | 'register') => void;
}

const Header = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

    const handleAuthClick = (mode: 'login' | 'register') => {
        setAuthMode(mode);
        setIsModalOpen(true);
    };
    return (
        <>

            <header className={styles.header}>
                <h1>Yasashii</h1>
                <Space size="middle">
                    <Button type="primary" onClick={() => handleAuthClick('login')}>
                        Login
                    </Button>
                    <Button onClick={() => handleAuthClick('register')}>
                        Register
                    </Button>
                </Space>
            </header>

            <AuthModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode={authMode}
                onModeSwitch={(mode) => setAuthMode(mode)}
            />
        </>
    )
}

export default Header;