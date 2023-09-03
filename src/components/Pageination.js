import React from 'react'
import PropTypes from 'prop-types'


Pageination.propTypes = {
    Pageination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
Pageination.defaultProps = {
    onPageChange: null
};

function Pageination(props) {
    const { pageination, onPageChange} = props;
    const { _page, _limit, _totalrow } = pageination;
    const toatalPages = Math.ceil(_totalrow / _limit);

    function handlePageChange(newPage) {
        if(onPageChange){
            onPageChange(newPage);
        }
    }
  return (
    <div>
        <button
            className='bg-white'
            disabled={_page <= 1}
            onClick={() => handlePageChange(_page - 1) } 
        >   
            Prev
        </button>

        <button
            className='bg-white'
            disabled={_page >= toatalPages}
            onClick={() => handlePageChange(_page + 1) } 
        >   
            Next
        </button>
    </div>
  )
}



export default Pageination
