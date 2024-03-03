"use client"

import { useRouter } from "next/navigation";

export default function Create(){
    const router = useRouter();
    return(
        <form onSubmit={(e) => {
            e.preventDefault(); //url이 멋대로 바뀌는걸 방지
            const title = e.target.title.value;
            const body = e.target.body.value;
            const options = {  //서버로 데이터 추가할때 필요한 옵션
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            fetch(`http://localhost:9999/topics`, options)
                .then(res=>res.json())
                .then(result =>{
                    console.log(result);
                    const lastid = result.id;
                    router.push(`/read/${lastid}`)
                })
        }}>
            <p>
                <input type="text" name="title" placeholder="title"/>
            </p>
            <p>
                <textarea name="body" placeholder="body"></textarea>
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    )
}