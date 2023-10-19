import React, { useState }  from 'react'
import AccordionItem from './AccordionItem/AccordionItem'
import { AccodionData } from '../../DummyData/utils'
const Accordion = () => {
      const [toggle, setToggle] = useState(null)
      return (
            <section className="py-40 lg:w-[80%] mx-auto">
                  <div className='flex flex-col  justify-between xl:flex-row'>
                        <div className='space-y-4 xl:w-[50%] my-1'>
                              <h1 className='lg:text-4xl leading-10 md:text-3xl text-3xl xl:text-left text-center w-[100%] md:w-[35rem] mx-auto font-bold md:leading-[1]'>Some of the things you may want to know</h1>
                              <p className='font-semibold xl:text-start text-center'>We answered questions so you don't have to ask them.</p>
                        </div>
                        <div className='flex-1'>
                              <AccordionItem list="none" data={AccodionData[0]} toggle={toggle} identifier="1" setToggle={setToggle} />
                              <AccordionItem list="none" data={AccodionData[1]} toggle={toggle} identifier='2' setToggle={setToggle} />
                              <AccordionItem  list="dotted"  data={AccodionData[2]} toggle={toggle} identifier="3" setToggle={setToggle} />
                              <AccordionItem list="dotted" data={AccodionData[3]} toggle={toggle} identifier="4" setToggle={setToggle} />
                        </div>
                  </div>
            </section>
      )
}

export default Accordion