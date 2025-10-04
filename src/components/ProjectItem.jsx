import React from 'react'
import { Star } from 'lucide-react'

export default function ProjectItem({
  name, 
  description, 
  language, 
  stargazers_count, 
  html_url,
}) {
  return (
        <a
          href={html_url}
          target="_blank"
          className="border-line-primary border-1 p-4 bg-background-primary w-[50vw] rounded max-w-[300px] hover:shadow-neon transition-shadow duration-200">
          <h2>{name}</h2>
          <hr className="h-px border-line-primary" />
          <p className="text-gray-500 mt-2">{description}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="bg-gray-900 p-1 rounded">{language}</div>

            <div className="flex gap-1">
              <Star></Star>
              <h3>{stargazers_count}</h3>
            </div>
          </div>
        </a>
  )
}
