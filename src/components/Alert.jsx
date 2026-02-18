    import React from 'react'

    const Alert = ({alert, hideAlert}) => {
    return (
        <div className={`absolute top-10 left-0 right-0 flex justify-center items-center z-50 transition-opacity duration-300 ${alert.show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
        <div className={`p-4 rounded-lg shadow-lg ${alert.type === 'success' ? 'bg-blue-800' : 'bg-red-800'} text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`} role='alert'>
            <p
                className={`${alert.type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} 
                flex rounded-full uppercase px-2 py-1  font-semibold mr-3 text-left`}
            >{alert.type === 'danger' ? 'Failed' : 'Success'}</p>
            <p className='mr-2 text-center'>{alert.text}</p>
        </div>
        </div>
    )
    }

    export default Alert