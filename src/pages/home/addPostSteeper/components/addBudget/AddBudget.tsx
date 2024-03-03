import { useState } from 'react';
import Checkbox from '../../../../../components/commen/ui/Checkbox'
import RangeInput from '../../../../../components/commen/ui/RangeInput/RangeInput';
import { AddPostContext } from '../../../../../context/AddPostSteeperContext'
import './addBudget.module.css'
const AddBudget = () => {
  const {handleNextStep} = AddPostContext();
  const [isToBeAgreed, setToBeAgreed] = useState(false);
  const [isSelectedPrice, setSelectedPrice] = useState(false);


  const handleCheckboxChange = (type:'ToBeAgreed'|'selectedPrice') => {
    if (type === 'selectedPrice') {
      setSelectedPrice(true)
      setToBeAgreed(false)
    } else if (type == "ToBeAgreed") {
      setToBeAgreed(true)
      setSelectedPrice(false)
    }
    
  };
  return (
    <>
    <div className='animate__animated animate__fadeInLeftBig delay-3s'
    >
    <p className='fw-bold fs-px-22 ln-ht-24px mb-4 text-center'>Arrondissez vos fins de mois ou développez votre activité professionnelle, 
      en répondant aux demandes postées autour de chez vous.</p>  
      <div className='flex-items flex-wrap gap-2 justify-content-sm-between justify-content-center'>
      <div className='flex-items gap-2 '>
      <Checkbox IsChecked = {isToBeAgreed}   IsRounded onChange={() => handleCheckboxChange('ToBeAgreed')} />
      <p className='fw-medium fs-px_16 lh-base'>To be agreed</p>
      </div>
      <div className='flex-items gap-2 '>
      <Checkbox IsChecked = {isSelectedPrice} IsRounded onChange={() => handleCheckboxChange('selectedPrice')} />
      <p className='fw-medium fs-px_16 lh-base text-capitalize'>selected price</p>
      </div>
      </div>
      {isSelectedPrice && <RangeInput label={'Price'} min={0} max={1000} />}
      <div className='col-md-8 mx-auto text-center mt-3'>
        <button className='green-button' onClick={handleNextStep}>Next</button>
      </div>
    </div>
    </>
  )
}

export default AddBudget