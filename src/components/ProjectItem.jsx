import React from 'react'
import { Star } from 'lucide-react'

export default function ProjectItem({title, description, tag, star}) {
  return (
        <div className="border-line-primary border-1 p-4 bg-background-primary w-[30vw] rounded-2xl max-w-[300px]">
          <h2>{title}</h2>
          <hr className="h-px border-line-primary" />
          <p className="text-gray-500 mt-2">{description}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="bg-gray-900 p-1 rounded">{tag}</div>

            <div className="flex gap-1">
              <Star></Star>
              <h3>{star}</h3>
            </div>
          </div>
        </div>
  )
}
