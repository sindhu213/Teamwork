import { useSearchParams } from "next/navigation";
import { fetchAnswers } from "@/lib/data";
import { AnswerType } from "@/lib/definitions";

export default async function Page(){
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    // const answers:AnswerType = await fetchAnswers({title});
}