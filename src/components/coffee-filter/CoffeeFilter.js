import './coffeeFilter.sass';
import {useState} from "react";
const CoffeeFilter = () => {
    const [inputValue, setInputValue] = useState('start typing here...');
    const [activeFilters, setActiveFilters] = useState({brazil: false, kenya: false, columbia: false});

    const toggleFilterActive = (e) => {
        const filterName = e.target.textContent.toLowerCase();
        setActiveFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName]
        }))
        e.target.className = activeFilters[filterName] ? 'filter-btn active' : 'filter-btn';
    }

    return (
        <section className={'filter'}>
            <div className="filter-props">
                <ul>
                    <li>Looking for</li>
                    <li><input onFocus={() => setInputValue('')} value={inputValue} type={'text'} onChange={e => setInputValue(e.target.value)}/></li>
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