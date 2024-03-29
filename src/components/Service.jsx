import React from 'react'
const serviceLists = [
    {id:1, title:"Catering", description:' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image:'/src/assets/3.jpg'},
    {id:2, title:"Catering", description:' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image:'/src/assets/2.jpg'},
    {id:3, title:"Catering", description:' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image:'/src/assets/5.jpg'},
    {id:4, title:"Catering", description:' Lorem ipsum dolor sit amet consectetur adipisicing elit.', image:'/src/assets/4.jpg'},
]

const Service = () => {
  return (
    <div className='max-w-screen-2xl mt-1 height-full mx-auto xl:px-24 px-4 bg-red'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
             {/* text */}
             <div className='md:w-1/2'>
                <div className='text-left md:w-4/5'>
                    <p className='text-red uppercase tracking-wide font-medium text-lg;'>Our Story & Services</p>
                    <h3 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Our Culinary Journey and Service</h3>
                   <p className='my-5 text-secondary leading-[30px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro rem itaque dolores! Impedit culpa, laborum fuga similique ex rem?
                   </p>
                   <button className='btn bg-green text-white px-8 py-3 rounded-full'>Explore</button>
                </div>
            </div>
            <div className='md:w-1/2'>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                    {
                        serviceLists.map((service)=>{
                            return(
                                <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border'>
                                    <img className='mx-auto 'src={service.image} alt=''/>
                                    <h3 className='pt-3 font-semibold'>{service.title}</h3>
                                    <p className='text-[#90BD95]'>{service.description}</p>
                                </div>
                            )
                           
                        })
                    }
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Service