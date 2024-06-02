import React, { Fragment } from 'react'

const Timeline = ({events}) => {
  return (
    <div className='flex flex-col gap-y-3 w-full h-auto '>
      <Circle/>
      {events.map((event,key) => {
       return <Fragment key={key}>
          <div className='grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
            {event.direction==='left'?(
              <EventCard header={event.header} body={event.body} footer={event.footer}/>
            ):(<div></div>)}
            <Pillar/>
            {event.direction==='right'?(
              <EventCard header={event.header} body={event.body} footer={event.footer}/>
            ):(<div></div>)}
          </div>
          {key<(events.length-1)&&<Circle/>}
        </Fragment>
      })}
      <Circle/>
    </div>
  )
}

const Circle=()=>{
  return(
    <div className='bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4  mx-auto'>

    </div>
  )
}

const Pillar=()=>{
  return(
    <div className='bg-gradient-to-r from-blue-500 to-teal-500  rounded-t-full rounded-b-full w-2 h-full  mx-auto'>

    </div>
  )
}

const EventCard=({header,body,footer})=>{
  return(
    <div className='transition duration-500 ease-in-out  transform hover:-translate-y-3 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
      <div className='text-[#7dcbae] font-bold text-lg border-b'>{header}</div>
      <div className='text-md text-[#a9e2f3]'>{body}</div>
      <div className='text-sm text-gray-300'>{footer}</div>
    </div>
  )
}

export default Timeline
