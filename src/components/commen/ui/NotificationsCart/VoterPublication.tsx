import { Link } from "react-router-dom";

type VoterPublicationProps =  {
    to: string;
    title: string;
    description: string;
    commercialContent: string;
    date: string;
  }

const VoterPublication: React.FC<VoterPublicationProps> = ({
    to,
    title,
    description,
    commercialContent,
    date,
  }) => {
    return (
      <div className="flex-items gap-3">
        <div className="bg-green-light rounded-circle text-white
        fs-px-18 p-2">
          <i className="bi bi-phone"></i>
        </div>
        <div>
          <h1 className="fs-px_18 lh-sm">{title}</h1>
          <p className="lh-sm fs-px_12 my-1 clr-gray-300">{description}</p>
          <div className="flex-items justify-content-between gap-5">
            <Link to={to} className="fs-px_14 clr-green-light fw-medium">
              {commercialContent}
            </Link>
            <p className="fs-px_12">{date}</p>
          </div>
        </div>
      </div>
    );
  };

  export default VoterPublication