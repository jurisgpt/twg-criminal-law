import React from 'react'

const Start = () => {
    return (
        <>
            <div className='m-10 flex flex-row max-sm:flex-col justify-between'>
                <div className=''>
                    <div className='text-[#8B4513] text-3xl pl-12'>Consumer Action</div>
                    <div className='text-[#132f8b] text-3xl pl-12'>Law Group</div>
                </div>
                <div className='flex flex-row place-items-center space space-x-10'>
                    {/* <div className='my-2  w-48 p-4 h-20 rounded-md bg-[#9292a7]'>
                        <div>Talk To a lawyer</div>
                        <div>(818) 213-2121EXAM</div>
                    </div> */}
                    <div className='my-2 drop-shadow-xl max-sm:h-36 bg-[#e9e94e] hover:bg-[#FFFF00] hover:cursor-pointer w-[72] p-4 h-20 rounded-md'>
                        <div>Talk To a lawyer</div>
                        <div className='font-bold'>(ABC) 000-2121EXAM</div>
                    </div>
                    <div className='my-2 drop-shadow-xl bg-[#e9e94e] hover:bg-[#FFFF00] hover:cursor-pointer w-[#72] p-4 h-20 max-sm:h-32 rounded-md'>
                        <div>Click Here</div>
                        <div className='font-bold'>Free Consultation/ Evaluation</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Start