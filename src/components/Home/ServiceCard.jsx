import HoverCard from '../ui/Service'

const ServiceCard = () => {
  return (
    <div className='mt-7 p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        <div>
      <HoverCard image="https://www.sleepingpillsuk.com/images/sleep_home.jpg" title="See Sleeping Pills"/>
    </div>

    <div>
      <HoverCard image="https://www.sleepingpillsuk.com/images/anxiety_home.jpg" title="See Sleeping Pills"/>
    </div>
    <div>
      <HoverCard image="https://www.sleepingpillsuk.com/images/pain_home.jpg" title="See Sleeping Pills"/>
    </div>
    <div>
      <HoverCard image="https://www.sleepingpillsuk.com/images/nootro_home.jpg" title="See Sleeping Pills"/>
    </div>
    </div>
  )
}

export default ServiceCard
