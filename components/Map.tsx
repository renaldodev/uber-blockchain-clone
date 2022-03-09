import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

const style = {
  wrapper: `w-full h-full flex-1`,
}
mapboxgl.accessToken =
  'pk.eyJ1IjoicmVuYWxkb2RldiIsImEiOiJjbDBlaHV5cWgwaHhzM2RreGNxZThtMDU2In0.sdaqoiprxb-edndPDBMUQw'
export default function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  }, [])
  return <div className={style.wrapper} id="map" />
}
