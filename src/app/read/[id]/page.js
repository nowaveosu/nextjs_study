// 데이터를 읽어서 출력할뿐 => 서버컴포넌트
// 사용자와 상호작용한다 => 클라이언트컴포넌트 
export default async function Read(props){
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`,{cache: 'no-store'});
    const topic = await resp.json();
    return(
        <>
        <h2>{topic.title}</h2>
        {topic.body}
        parameters : {props.params.id}
        </>
    )
}