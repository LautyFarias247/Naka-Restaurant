import style from "./Pagination.module.css"

const Pagination = ({totalDishes, dishesPerPage, setCurrentPage, currentPage}) => {
    const pages = []
    
    for (let i = 1; i <= Math.ceil(totalDishes/dishesPerPage); i++) {
        pages.push(i)
    }
    const handleClick = (page) =>{
        setCurrentPage(page);
        window.scrollTo(0, 0)
    }
    const handlePrev = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
        return
    }
    const handleNext = () => {
        if(currentPage < totalDishes/dishesPerPage){
            setCurrentPage(currentPage + 1)
        }
        return
    }
    return (
        <div className={style.buttonContainer}>
            { currentPage > 1 && <a onClick={()=> handlePrev()}>Prev</a>}
            { pages.length < 6 && pages.map((page) =>{
                return (
                    <button 
                    key={page} 
                    onClick={() => handleClick(page)} 
                    className={page === currentPage ? style.active : ""}>
                        {page}
                    </button>
                )
            })}
            { pages.length > 6 && currentPage <= 3 && pages.slice(0,7).map((page) =>{
                return (
                    <button 
                    key={page} 
                    onClick={() => handleClick(page)} 
                    className={page === currentPage ? style.active : ""}>
                        {page}
                    </button>
                )
            })}
            { pages.length > 6 && currentPage >= pages-7 && pages.slice(0,7).map((page) =>{
                return (
                    <button 
                    key={page} 
                    onClick={() => handleClick(page)} 
                    className={page === currentPage ? style.active : ""}>
                        {page}
                    </button>
                )
            })}
            { pages.length > 6 && currentPage <= 8 ? pages.slice(currentPage-4,currentPage+3).map((page) =>{
                return (
                    <button 
                    key={page} 
                    onClick={() => handleClick(page)} 
                    className={page === currentPage ? style.active : ""}>
                        {page}
                    </button>
                )
            }):pages.slice(5,pages.length).map((page) =>{
                return (
                    <button 
                    key={page} 
                    onClick={() => handleClick(page)} 
                    className={page === currentPage ? style.active : ""}>
                        {page}
                    </button>
                )
            })}
            { currentPage < totalDishes/dishesPerPage && <a onClick={()=> handleNext()}>Next</a>}
            
        </div>
    )
}

export default Pagination