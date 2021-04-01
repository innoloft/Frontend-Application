import React from 'react'
import Card from './Card'
import Image from './Image'

const Map = () => {
   return (
      <Card>
         <div className="map">
            <Image src={process.env.PUBLIC_URL + '/img/map.png'} />
         </div>
      </Card>
   )
}

export default Map
