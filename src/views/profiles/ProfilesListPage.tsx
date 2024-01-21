import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import ActiveTableRow from '../../components/ActiveTableRows';
import TableHeader from '../../components/TableHeader';
import Paginate from '../../components/Paginate';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import usePagination from '../../hooks/usePagination';
import { IProfilesData } from '../../types/types';
import { PROFILES_DATA } from '../../data/profiles';
import { getProfiles } from '../../slices/profilesSlice';
import {
  AppDispatch,
  RootState
} from '../../store';
import useFilterAndSort from '../../hooks/useFilterAndSort';
import Filter from '../../components/Filter';
import Metadata from '../../components/Metadata';

const ProfilesPage = () => {
  const { pathname } = useLocation();
  const dispatch: AppDispatch = useDispatch();

  const profilesData: IProfilesData[] = useSelector((state: RootState) => state.profiles.data)
  const loading: boolean = useSelector((state: RootState) => state.profiles.loading)
  const error: boolean = useSelector((state: RootState) => state.profiles.error)

  useEffect(() => {
    dispatch(getProfiles())
  }, [dispatch])

  const { filterValue, setFilterValue, sortedData, handleSort, sortField, sortOrder } = useFilterAndSort<IProfilesData>({ data: profilesData }, 'country');

  const { pageCount, currentData, handlePageClick } = usePagination<IProfilesData>({ arr: sortedData });

  if (loading) return <Spinner loading />

  if (error) return <Error />

  return (
    <>
      <Metadata
        title='Profiles'
        content='List profiles'
      />
      <Card className='container d-flex flex-column align-items-center'>
        <CardHeader className='px-4 bg-transparent'>
          <p className='text-white fs-3 font-weight-500 mb-0'>
            Profiles
          </p>
        </CardHeader>
        <CardBody className='w-100'>
          <Filter
            placeholder='Filter by Country:'
            value={filterValue}
            onInputChange={setFilterValue}
          />
          <table className='table table-hover'>
            <thead>
              <tr>
                {
                  PROFILES_DATA.map((item) => (
                    <TableHeader
                      key={item}
                      title={item as keyof IProfilesData}
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
                currentData.map((profile) => (
                  <ActiveTableRow
                    id={profile.profileId}
                    field1={profile.profileId}
                    path={pathname}
                    field2={profile.country}
                    field3={profile.marketplace}
                  />
                ))}
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

export default ProfilesPage;