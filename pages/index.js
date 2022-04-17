import { 
  Modal,
  Typography,
  Button
 } from "antd";
import {
  TwitterOutlined,
  DeleteOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
import React, {useState} from "react" 
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import cooking from "../public/cooking.jpeg"
import dancing from "../public/dancing.webp";
import eating from "../public/eating.jpg";
import karate from "../public/karate.jpg";
import music from "../public/music.jpg";
import shopping from "../public/shopping.jpg";
import sleep from "../public/sleep.jpg";

const todolist = [
  {
    id: "1",
    image: cooking,
    name: "cooking"
  },
  // {
  //   id: "2",
  //   image: dancing,
  //   name: "dancing"
  // },
  {
    id: "3",
    image: sleep,
    name: "sleep"
  },
  {
    id: "4",
    image: eating,
    name: "eating"
  },
  {
    id: "5",
    image: karate,
    name: "karate"
  },
  {
    id: "6",
    image: music,
    name: "music"
  },
  {
    id: "7",
    image: shopping,
    name: "shopping"
  }

]

export default function Home(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [viewImage, setViewImage] = useState("")

  const showModal = (e, view) => {
    console.log("test", view)
    setViewImage(view)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setViewImage("")
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setViewImage("")
    setIsModalVisible(false);
  };
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo Next App</title>
        <meta name="description" content="Todo Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
     
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Todo's</a>
        </h1>
        <Link href="/todo/add">
          <a className={styles.addButton}>Add todo <PlusCircleOutlined /></a>
        </Link>
        {
          todolist.length > 0?(
            <div className={styles.grid}>
              {
                todolist.map((todo) => (
                  <div className={styles.card} key={todo.id}>
                    <span>
                    <Typography.Title editable level={5} style={{ margin: 0 }}>
                    {todo.name}
                    <Link href="/todo/1" >
                    <DeleteOutlined className={styles.deleteButton}/>
                    </Link>
                    </Typography.Title>
                    
                    </span>
                 
                    <Image
                    src={todo.image.src}
                    layout='intrinsic'
                    width={200}
                    height={200}
                    onClick={(e)=>showModal(e, todo.image.src)}
                    alt='todo image'
                    /> 
                  </div>
                ))
              }
            </div>
            ): (
              ""
            )
        }

        {/* <div className={styles.grid}>
        {
          todolist.map((todo) => (
          <a href="https://nextjs.org/docs" className={styles.card}>
            <div key={todo.id}>
            <Image
              src={todo.src.url}
              layout='fill'
            />
            <h4>{todo.name}</h4>
          </div>
          </a>
          ))
        }
        </div> */}
        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' '}Dez
        </a>
      </footer>

      {/* Modal to view large image */}
      <Modal 
      // title="Basic Modal" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      style={{width: "1000px", height: "1000px"}}
      // width={1000}
      // height={1000}
      footer={[
        <Button
          key="link"
          href="https://twitter.com/intent/tweet?text=Hello%20world Todo's 👉 &amp;url=http://localhost:3000/"
          type="primary"
          onClick={handleOk}
        >
          <TwitterOutlined />
        </Button>,
      ]}
      >
                <Image
                    src={viewImage}
                    layout='intrinsic'
                    width={500}
                    height={300}
                /> 
      </Modal>
    </div>
  )
}
