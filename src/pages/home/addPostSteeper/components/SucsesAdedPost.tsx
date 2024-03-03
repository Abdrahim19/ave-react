import { AddPostContext } from "../../../../context/AddPostSteeperContext"

const SucsesAdedPost = () => {
  const { ToPoststep } = AddPostContext();
  return (
    <div className='animate__animated animate__fadeInLeftBig delay-2s fw-medium'
    >
        <div className='d-grid gap-4 place-items-center text-center'>
        <h1 className='fs-px-24 fw- text-capitalize' style={{color:'#40513b'}}>WELL DONE 👍</h1>
        <p className='clr-gray-300 fs-px-22'>Click continue to move <br /> to next step.</p>
        <button onClick={ () => ToPoststep(1)} className='green-button'>CONTINUE</button>
        </div>

    </div>
  )
}

export default SucsesAdedPost