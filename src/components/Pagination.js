const Pagination = ({next, prev}) => {
    return (
			<div className="pagination">
				{prev && <button onClick={prev}>Prev</button>}
				{next && <button onClick={next}>Next</button>}
			</div>
		);
}
 
export default Pagination;