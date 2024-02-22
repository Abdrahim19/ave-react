import Navbar from "../pages/dashbord/navbar/Navbar"
import AddPaymentCard from "../pages/pyementCards/Carts/AddPaymentCard"
import TransactionDeatiles from "../pages/pyementCards/transactions/TransactionDeatiles"
import '../pages/pyementCards/payment__card.css'
import DeatilesCard from "../pages/pyementCards/deatilesCard/DeatilesCard"

const PyementCardsLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page position-relative flex-items justify-content-center py-4">
      <div className="container-lg row gap-lg-0 gap-4">
        <div className="col-lg-6">
      <AddPaymentCard />
      <TransactionDeatiles />
        </div>
        <div className="col-lg-6">
          <DeatilesCard />
        </div>
      </div>
  </div>
    </>
  )
}

export default PyementCardsLayout