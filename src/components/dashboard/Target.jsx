import React from 'react'

function Target({value, name}) {
  return (
    <div className="relative overflow-hidden bg-gray-300 rounded-lg shadow w-60 md:w-72">
        
    <img src="https://cdn-icons-png.flaticon.com/512/1822/1822045.png" alt="btc logo" className="absolute w-24 h-24 rounded-full opacity-50 -top-2 -right-3 md:-right-2"/>
    <div className="px-4 py-5 sm:p-6">
        <dl>
            <dt className="text-sm font-medium leading-5 text-gray-700 truncate">
                {name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                ${value}
            </dd>
            <dd className="font-semibold text-gray-500">
                <span>
                    500
                    <span className="text-xs">
                        .000
                    </span>
                    BTC
                </span>
            </dd>
        </dl>
    </div>
</div>
  )
}

export default Target