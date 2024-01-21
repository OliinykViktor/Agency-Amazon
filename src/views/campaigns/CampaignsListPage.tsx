import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap';

import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import Paginate from '../../components/Paginate';
import TableHeader from '../../components/TableHeader';
import ActiveTableRows from '../../components/ActiveTableRows';
import usePagination from '../../hooks/usePagination';
import { ICampaignsData } from '../../types/types';
import { CAMPAIGN_DATA } from '../../data/campaign';
import { getCampaigns } from '../../slices/campaignsSlice';
import {
  AppDispatch,
  RootState
} from '../../store';
import useFilterAndSort from '../../hooks/useFilterAndSort';
import Filter from '../../components/Filter';
import Metadata from '../../components/Metadata';

const CampaignsPage = () => {
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useDispatch();

  const campaignsData: ICampaignsData[] = useSelector((state: RootState) => state.campaigns.data);
  const loading: boolean = useSelector((state: RootState) => state.campaigns.loading);
  const error: boolean = useSelector((state: RootState) => state.campaigns.error);

  const { filterValue, setFilterValue, sortedData, handleSort, sortField, sortOrder } = useFilterAndSort<ICampaignsData>({ data: campaignsData }, 'cost');
  const { handlePageClick, currentData, pageCount } = usePagination<ICampaignsData>({ arr: sortedData });

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  if (loading) return <Spinner loading={loading} />

  if (error) return <Error />

  return (
    <>
      <Metadata
        title='Campaigns'
        content='List campaigns'
      />
      <Card className='container d-flex flex-column align-items-center'>
        <CardHeader className='px-4 bg-transparent'>
          <p className='text-white fs-5 font-weight-500 mt-2 mb-0'>
            Campaigns
          </p>
        </CardHeader>
        <CardBody className='w-100'>
          <Filter
            placeholder='Filter by Coast:'
            value={filterValue}
            onInputChange={setFilterValue}
          />
          <table className='table table-hover'>
            <thead>
              <tr>
                {CAMPAIGN_DATA.map((item) => (
                  <TableHeader
                    key={item}
                    handleSort={handleSort}
                    sortField={sortField}
                    title={item as keyof ICampaignsData}
                    sortOrder={sortOrder}
                  />
                ))
                }
              </tr>
            </thead>
            <tbody>
              {
                currentData.map((item) => (
                  <ActiveTableRows
                    key={item.campaignId}
                    id={item.campaignId}
                    field1={item.campaignId}
                    field2={item.clicks}
                    field3={item.cost}
                    field4={item.date}
                    path={pathname}
                  />
                ))
              }
            </tbody>
          </table>
        </CardBody>
        <Paginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
      </Card>
    </>
  );
};

export default CampaignsPage;