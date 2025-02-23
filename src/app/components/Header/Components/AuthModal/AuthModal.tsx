'use client';

import { Button, Form, Input, Modal, Typography } from 'antd';
import { useEffect } from 'react';

import { Mode } from '../../Header';
import styles from './AuthModal.module.scss';

const { Text, Link } = Typography;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: Mode;
  onModeSwitch: (mode: Mode) => void;
}

export const AuthModal = ({
  isOpen,
  onClose,
  mode,
  onModeSwitch,
}: AuthModalProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    console.log(values);
    // Handle auth logic here
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      form.resetFields();
    }
  }, [isOpen, form]);

  const switchMode = () => {
    onModeSwitch(mode === Mode.Login ? Mode.Register : Mode.Login);
    form.resetFields();
  };

  const LoginBody = () => (
    <>
      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Login
        </Button>
      </Form.Item>

      <div className={styles.switchMode}>
        <Text>
          Don't have an account?
          <Link onClick={switchMode}>Register now</Link>
        </Text>
      </div>
    </>
  );

  const RegisterBody = () => (
    <>
      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password size="large" placeholder="Confirm your password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Create Account
        </Button>
      </Form.Item>

      <div className={styles.switchMode}>
        <Text>
          Already have an account?
          <Link onClick={switchMode}>'Login now'</Link>
        </Text>
      </div>
    </>
  );

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      title={
        <div className={styles.modalTitle}>
          {mode === Mode.Login ? 'Welcome Back' : 'Create Account'}
        </div>
      }
      footer={null}
      className={styles.authModal}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className={styles.form}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input size="large" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' },
          ]}
        >
          <Input.Password size="large" placeholder="Enter your password" />
        </Form.Item>
        {mode === Mode.Register ? <RegisterBody /> : <LoginBody />}
      </Form>
    </Modal>
  );
};

export default AuthModal;
