import React from "react";
import { useRouter } from 'next/router';
export default function Card({job, setIsGenearting}) {
    const router = useRouter();
    const generateResume = async (job) => {
        console.log(`Generating resume for ${job}`)
        const url = `/api/resume/${encodeURIComponent(JSON.stringify(job))}`;
        console.log(`pushing ${url}`)
        router.push(url);
    };

    if (job){
        return (
            <article className="container bg-white shadow-2xl rounded-2xl p-5">
                <h1 className="font-bold text-sky-600">{job.position}</h1>
                <h6 className="text-sm text-sky-600">{job.employer}</h6>
                {
                    job.perks.map(perk => {
                        return (
                            <p key={job.position} className="font-light text-black-500">* {perk}</p>
                        );
                    })
                }
                <h6 className="mb-5"></h6>
                <div className="">
                    <a href={job.link} className="rounded-lg py-2 px-4 text-center text-white bg-sky-600 hover:bg-yellow-500 p-2">Apply</a>
                    <a onClick={() => {
                        setIsGenearting(true);
                        generateResume({
                            position: job.position,
                            description: job.description.detail,
                            highlights: job.highlights}
                        )
                    }} className="rounded-lg py-2 px-4 text-center text-white bg-sky-600 hover:bg-yellow-500 p-2 m-2">Generate Resume</a>
                </div>
            </article>
        )
    }
    else {
        return (<></>)
    }
}