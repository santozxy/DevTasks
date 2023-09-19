import { MdOutlineContentPasteSearch } from "react-icons/md";

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <span><MdOutlineContentPasteSearch /></span>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Digite para pesquisar...' />
        </div>
    )
}

export default Search