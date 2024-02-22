import wallet from "../../../assets/wallet.png";

const DeatilesCard = () => {
  return (
    <div className="DeatilesCard">
        <div className="d-flex align-items-end  mb-2 gap-2">
            <img src={wallet} alt="" />
            <p className="fs-px-22 fw-bold ln-ht-28px">Balance</p>
        </div>
        <div className="d-flex align-items-end gap-2">
            <p className="fs-px_20 text-black fw-medium ln-ht-27px">€</p>
            <p className="fw-medium clr-main-blue fs-px-33 ln-ht-40px">2230.50</p>
        </div>
        <ul className="d-grid gap-3">
            <h4 className="fs-px-22 fw-bold ln-ht-28px mb-3 mt-4">Détail de carte</h4>
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Numéro de carte</p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">8050 5040 2030 XXXX</p>
            </li>
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Nom sur la carte</p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">HAMZA</p>
            </li>
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">Date de validité</p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">03/25</p>
            </li>
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">CVV</p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">233</p>
            </li>
        </ul>
        <hr className="dotted-hr my-5" />
        <h1 className="fs-px-22 fw-bold ln-ht-28px mb-3">
Détail de dernière <br /> transaction
        </h1>
        <ul className="d-grid gap-3">
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">
Montant payé
                </p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">
150€
                </p>
            </li>
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">
Date de transaction
                </p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">
17/10/2024  5:39 PM
                </p>
            </li>
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">
Pour
                </p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">
                Fernando Gaucho
                </p>
            </li>
            <li className="flex-items gap-1">
                <p className="fw-normal fs-px_14 ln-ht-17px flex-1">
Service offert
                </p>
                <p className="fs-px_20 fw-medium ln-ht-27px flex-1">
Réparation de véhicule
                </p>
            </li>
        </ul>
    </div>
  )
}

export default DeatilesCard
