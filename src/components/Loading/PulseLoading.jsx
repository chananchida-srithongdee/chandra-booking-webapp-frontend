import React from 'react'

const PulseLoading = () => {
  return (
    <div className="border border-primary/30 rounded-xl p-5 w-4/5 sm:h-[400px] h-[300px] mx-auto">
        <div className="animate-pulse flex sm:flex-row flex-col space-x-4 h-full">
            <div className="sm:w-1/3 w-full space-y-5 py-1 h-full">
                <div className="rounded-xl bg-primary/30 h-2/3 w-full"></div>
                <div className="h-2 bg-primary/30 rounded-full w-1/2"></div>
                <div className="h-2 bg-primary/30 rounded-full w-full"></div>
            </div>
            <div className="sm:w-2/3 w-full space-y-6 py-1 sm:flex flex-col hidden">
                <div className="h-4 bg-primary/30 rounded-full w-1/2"></div>
                <div className="h-2 bg-primary/30 rounded w-1/3"></div>
                <div className="space-y-3">
                    <div className="h-2 bg-primary/30 rounded"></div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-primary/30 rounded col-span-2"></div>
                        <div className="h-2 bg-primary/30 rounded col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PulseLoading