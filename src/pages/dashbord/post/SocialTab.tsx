import { Link } from "react-router-dom"

type prop = {
    postDescription:string
}
const SocialTab = ({postDescription}:prop) => {
  return (
    <div className="p-4">
        <p className="post-discrption">{postDescription}</p>
        <hr className="post-line" />
        <div className='flex-items flex-column-reverse justify-content-center flex-sm-row justify-content-sm-between gap-3'>
          <Link to='/DetailsDemand' className='Demande-publique-button px-1 flex-items gap-2'>
          <i className="bi bi-globe-asia-australia"></i>
          Demande publique
          </Link>
        <div className="flex-items gap-3">
          <button>
          <i className="bi bi-suit-heart"></i>
          </button>
          <button className="position-relative user__icon">
          <i className="bi bi-people"></i>
          <span className="tool_tip_people">Recommender</span>
          </button>
          <button>
          <i className="bi bi-chat"></i>
          </button>
        </div>
        </div>
      </div>
  )
}

export default SocialTab