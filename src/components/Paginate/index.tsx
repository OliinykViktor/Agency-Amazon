import ReactPaginate from 'react-paginate';

interface IPaginate {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Paginate: React.FC<IPaginate> = ({
  pageCount,
  onPageChange
}) => (
  <ReactPaginate
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={onPageChange}
    containerClassName={'pagination'}
    activeLinkClassName={'active'}
    nextClassName='btn btn-secondary'
    previousClassName='btn btn-secondary'
  />
);


export default Paginate;