import VoterPublication from "./VoterPublication"

const Notifications = () => {
    
  return (
    <>
    <div style={{width:'min( 550px, 90%)' , zIndex:12}} className="position-fixed Poppins
     fw-medium top-0 animate__animated animate__slideInRight
     right-0 h-screen bg-white 
    shadow-lg p-4">
        <div className="flex-items gap-2">
        <h1 className="fs-px-24 fw-medium ln-ht-17px">Notifications {" "} </h1>
        <span style={{width:"30px" , aspectRatio:1 }}
        className="bg-green-light cenetr-grid rounded-circle text-white fs-px_24 fw-bold text-center">
        3</span>
        </div>
            <div className="d-grid gap-2 mt-4">
                <VoterPublication 
                        to="/some-link"
                        title="Voter publication est visible maintenant"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur alias magnam harum, sequi earum obcaecati,"
                        commercialContent="contenu commercial"
                        date="22-05-2024"
                />
            </div>
    </div>
    </>
  )
}

export default Notifications