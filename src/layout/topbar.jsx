import logoNM from '../../public/logo/logo-NimeWatch.png'

export default function Topbar(){
    return(
        <div className='flex justify-between w-full px-2 items-center'>
            <img src={logoNM} className='h-12'/>
            <div>
                <input type="text" id="searchField" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full w-96 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
            </div>
        </div>
    )
}