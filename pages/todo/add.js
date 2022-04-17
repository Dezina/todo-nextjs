import { 
    Modal,
    Typography,
    Button,
    Layout
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;
import styles from '../../styles/Home.module.css'
import React, {useState} from "react" 
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Add() {
    return (
        <div className={styles.container}>
        <Head>
          <title>Todo Next App</title>
          <meta name="description" content="Todo Next App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
        <Header 
        style={{ textAlign: 'center', backgroundColor: 'gray', color: '#fff', fontSize: '20px' }}>
        <Text type="keyboard">Add todo</Text>
        </Header>
        </Layout>

        </div>
    )
} 