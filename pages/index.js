import React, { useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { NextSeo } from 'next-seo';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [searchTerms, setSearchTerms] = useState("");

  const performSearch = async () => {
    const url = `/search/q=${encodeURIComponent(searchTerms)}`;
    console.log(`pushing ${url}`)
    router.push(url);
  };

  return (
    <>
      <NextSeo
          title="Search for a job and get AI generated resume and cover letters."
          description="Find remote/hybrid jobs, and have AI assisted resume writing."
          openGraph={{
            url: 'https://resume-builder.com/',
            title: 'resume-builder.com | Applying for jobs just got easier with AI assistance.',
            description: 'Find remote/hybrid jobs, and have AI assisted resume writing.',
            images: [
              {
                url: 'https://resume-builder.com/images/create_resume_using_chatgpt.png',
                width: 1200,
                height: 630,
                alt: 'resume-builder.com create resume using chatgpt',
                type: 'image/jpeg',
              }
            ],
            siteName: 'resume-builder.com',
          }}
      />
      <main className={styles.main}>

        <div className="container mx-auto px-6 py-16 pt-28 text-center">
          <div className="mx-auto max-w-lg">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">AI Resume Builder</h1>

            <p className="mt-6 text-gray-500 dark:text-gray-300">Search for jobs and generate resumes using chatGPT</p>

            <div
                className="mx-auto mt-6 w-full max-w-sm rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-300">
              <form className="flex flex-col md:flex-row">
                <input type="text"
                       value={searchTerms}
                       placeholder={"Job Search"}
                       className="m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200"
                       onChange={(e) => setSearchTerms(e.target.value )}
                />

                <button type="button"
                        className="m-1 h-10 transform rounded-md bg-sky-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-sky-600 focus:bg-sky-600 focus:outline-none"
                        onClick={() => performSearch()}
                >Search
                </button>
              </form>

            </div>

          </div>
        </div>
      </main>
    </>
  )
}
