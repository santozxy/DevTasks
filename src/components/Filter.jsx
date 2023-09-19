
const Filter = ({ filter, setFilter, setSort, category, setCategory }) => {

    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className='filter-options'>
                <div className="filter-status">
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div className="filter-alphabetical">
                    <p>Ordem Alfabética:</p>
                    <div className='btns-sort'>
                        <button onClick={() => setSort("Asc")}>A - Z</button>
                        <button onClick={() => setSort("Desc")}>Z - A</button>
                    </div>
                </div>
                <div className="filter-categories">
                    <p>Categoria:</p>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Pessoal">Pessoal</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Filmes">Filmes</option>
                        <option value="Séries">Séries</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter