import React, {
  useEffect,
  FC
} from 'react';
import { useLocation } from 'react-router-dom';
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
import Filter from '../../components/Filter';
import Spinner from '../../components/Spinner';
import Paginate from '../../components/Paginate';
import TableHeader from '../../components/TableHeader';
import ActiveTableRows from '../../components/ActiveTableRows';
import useFilterAndSort from '../../hooks/useFilterAndSort';
import usePagination from '../../hooks/usePagination';
import { ACCOUNT_DATA } from '../../data/account';
import { IAccountsData } from '../../types/types';
import { getAccounts } from '../../slices/accountsSlice';
import {
  AppDispatch,
  RootState
} from '../../store';
import Metadata from '../../components/Metadata';

const AccountsPage: FC = () => {
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useDispatch();

  const accountsData: IAccountsData[] = useSelector((state: RootState) => state.accounts.data);
  const loading: boolean = useSelector((state: RootState) => state.accounts.loading);
  const error: boolean = useSelector((state: RootState) => state.accounts.error);

  const { filterValue, setFilterValue, sortedData, handleSort, sortField, sortOrder } = useFilterAndSort<IAccountsData>({ data: accountsData }, 'email');
  const { pageCount, handlePageClick, currentData } = usePagination<IAccountsData>({ arr: sortedData });

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  if (loading) return <Spinner loading={loading} />

  if (error) return <Error />

  return (
    <>
      <Metadata
        title='Accounts'
        content='List accounts'
      />
      <Card className='container d-flex flex-column align-items-center'>
        <CardHeader className='px-4 bg-transparent'>
          <p className='text-white fs-5 font-weight-500 mt-2 mb-0'>
            Accounts
          </p>
        </CardHeader>
        <CardBody className='w-100'>
          <Filter
            placeholder='Filter by Email:'
            value={filterValue}
            onInputChange={setFilterValue}
          />
          <table className='table table-hover'>
            <thead
            >
              <tr>
                {
                  ACCOUNT_DATA?.map((item) => (
                    <TableHeader
                      key={item}
                      title={item as keyof IAccountsData}
                      handleSort={handleSort}
                      sortField={sortField}
                      sortOrder={sortOrder}
                    />
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                currentData?.map((item) => (
                  <ActiveTableRows
                    key={item.accountId}
                    id={item.accountId}
                    path={pathname}
                    field1={item.accountId}
                    field2={item.email}
                    field3={item.authToken}
                    field4={item.creationDate}
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

export default AccountsPage;