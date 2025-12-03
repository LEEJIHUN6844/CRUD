import { HiOutlineTrash } from "react-icons/hi";
import React from "react";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }: { id: string }) {
    const router =useRouter()
    async function removeTopic(){
        const confirmed = confirm(`${id} 토픽을 지울까요?`)
        if(confirmed){
            const res = await fetch(`/api/topics?id=${id}`, {
                method: 'DELETE'
            });
            if(res.ok){
                router.refresh()
            }
        }
    }
    return (
        <button className="text-red-400" onClick={removeTopic}>
            <HiOutlineTrash size={24} />
        </button>
    )
}