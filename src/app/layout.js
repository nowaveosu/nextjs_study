"use client";
import Link from 'next/link'
import "./globals.css";
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: "web tutorials",
//   description: "Generated by nowaveosu",
// };

// 사용자와 상호작용하는건 클라이언트 컴포넌트, 그냥 보여주는건 서버 컴포턴트
// next JS 에서는 기본적으로 서버 컴포넌트라 생각한다. use client 쓸것
// json서버실행 : npx json-server --watch --port 9999 db.json

export default function RootLayout({ children }) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9999/topics')
      .then(resp => resp.json())
      .then(result => {
        setTopics(result);
      });
  },[]);
  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          {topics.map((topic) =>{
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })
          }
        </ol>
          {children}
          <ul>
            <li><Link href="/create">Create</Link></li>
            <li><Link href="/update/1">Update</Link></li>
            <li><input type="button" value="delete" /></li>
          </ul>
      </body>
    </html>
  );
}
