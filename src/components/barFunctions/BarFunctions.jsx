import { FiSearch } from 'react-icons/fi';
import DarkMode from "../DarkMode/DarkMode";
import { Function } from '../../styled/styledBarFunctions';


const BarFunctions = ({ search, setSearch }) => {
    return (
        <Function>
            <DarkMode />
            <div className="bar-search">
                <input type="text" className="input-pokemon" placeholder="Search" 
                value={search} onChange={(e) => setSearch(e.target.value)} />
                <FiSearch size={25} color='white' className="icon" />
            </div>
        </Function>
    )
}

export { BarFunctions }