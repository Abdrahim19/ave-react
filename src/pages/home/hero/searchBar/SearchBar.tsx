import './searchBar.css'
const SearchBar = () => {
  return (
    <div className="bar row p-2 align-items-center">
    <div className="location col-5">
      <p className='searchBar_label'>Location</p>
      <input type="text" className='search__input' placeholder="Que vous voulez"  />
    </div>
    <div className="check-in col-5">
      <p className='searchBar_label'>Check in</p>
      <input type="text" className='search__input' placeholder="W l'emplacement" />
    </div>
    <div className='col-2'>
    <div className='search-container'>
    <i className="bi bi-search"></i>
    </div>
    </div>
    <span className='top-50 translate-middle-y col-lg-2' style={{ position: 'absolute', right: '1rem' }}>
    </span>
  </div>
  )
}

export default SearchBar