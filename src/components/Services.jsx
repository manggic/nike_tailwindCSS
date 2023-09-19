


import {  services} from '../constants/index'
import ServiceCard from './ServiceCard'


const Services = () => {
  return (
   <section className="flex max-container justify-center gap-9 flex-wrap">
    {services.map(service => {
      return <ServiceCard key={service.label}  {...service} />
    })}
   </section>
  )
}

export default Services