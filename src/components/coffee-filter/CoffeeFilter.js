import './coffeeFilter.sass';
const CoffeeFilter = ({inputValue, activeFilters, setActiveFilters, setInputValue}) => {

    const toggleFilterActive = (e) => {
        const filterName = e.target.textContent.toLowerCase();
        setActiveFilters(prevFilters => {
            const updatedFilters = {...prevFilters, [filterName]: !prevFilters[filterName]};
            e.target.className = (!activeFilters[filterName]) ? 'filter-btn active' : 'filter-btn';
            return updatedFilters;
        });

    }

    return (
        <section className={'filter'}>
            <div className="filter-props">
                <ul>
                    <li>Looking for</li>
                    <li><input onFocus={() => setInputValue('')} placeholder={'start typing here...'} value={inputValue} type={'text'} onChange={e => setInputValue(e.target.value)}/></li>
                    <li>Or filter</li>
                    <li><button onClick={toggleFilterActive} className={'filter-btn'}>Brazil</button></li>
                    <li><button onClick={toggleFilterActive} className={'filter-btn'}>Kenya</button></li>
                    <li><button onClick={toggleFilterActive} className={'filter-btn'}>Columbia</button></li>
                </ul>
            </div>
        </section>
    )
}

export default CoffeeFilter;