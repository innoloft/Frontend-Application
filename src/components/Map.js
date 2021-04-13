
import H from "@here/maps-api-for-javascript"
import { useEffect, useRef } from "react"
import styled from 'styled-components'

/**
 * renders a map based on some coordinates
 * @returns rendered map
 */
export const Map=({address,...dimensions})=>{

    const mapInstance=useRef()
    const mapContainer=useRef(null)

    useEffect(()=>{
        if (!mapInstance.current) {
            const platform = new H.service.Platform({
              apikey: 'gSSgDhU5omF7RhwKqsy_EenuqNgG24F9pIRck2Dkiu0'
            })
            const layers = platform.createDefaultLayers()
            mapInstance.current = new H.Map(
              mapContainer.current,
              layers.vector.normal.map,
              {
                pixelRatio: window.devicePixelRatio,
                center: {lat: address.latitude, lng: address.longitude},
                zoom: 12,
              },
            )
          }
        return ()=>{
            if(mapInstance.current){
                mapInstance.current.dispose()
                mapInstance.current=null
            }
        }
    },[])

    return (
        <MapContainer ref={mapContainer} {...dimensions}></MapContainer>
    )
}

const MapContainer=styled.div`
${({width,height})=>`width:${width}px;height:${height}px;`}
`