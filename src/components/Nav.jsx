import React from 'react'

export default function Nav() {
  return (
    <section>
      <div>
        <h1 className="text-3xl lg:text-4xl text-neutral-200 font-semibold">Daily Routine.</h1>
        <hr className="my-4"/>
        </div>
      <div className="flex justify-end">
        <h4 className="w-max text-[11px] text-right font-medium bg-neutral-700 text-neutral-600 bg-opacity-30 -space-y-1 -mt-1 px-2 py-1 rounded uppercase">
          LIST DEM TASKS
        </h4>
      </div>
    </section>
  )
}
