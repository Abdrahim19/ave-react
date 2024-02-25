import './searchBar.css'
const SearchBar = () => {
  return (
    <div className="bar">
    <div className="location">
      <p className='searchBar_label'>Location</p>
      <input type="text" placeholder="Que vous voulez"  />
    </div>
    <div className="check-in">
      <p className='searchBar_label'>Check in</p>
      <input type="text" placeholder="W l'emplacement" />
    </div>
  </div>
  )
}

export default SearchBar