import Navbar from '../components/Navbar'
const style = {
  wrapper: `w-screen h-screen flex flex-col`,
  main: ``,
  rideRequestContainer: ``,
  rideRequest: ``,
}
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>{/* map */}</div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* location  */}
          {/* confirm ride */}
        </div>
      </div>
    </div>
  )
}
