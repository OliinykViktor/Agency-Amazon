import { Card } from 'reactstrap';
import { useSelector } from 'react-redux';
import {
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';

import Metadata from '../../components/Metadata';
import DefaultImg from '../../assets/img/default.png'
import { RootState } from '../../store';

const AccountPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entity = useSelector((state: RootState) => state.accounts.data.filter(item => item.accountId === id));

  return (
    <>
      <Metadata
        title='Account'
        content='Account page'
      />
      <div className='container mt-4'>
        <div className="row flex-wrap mb-4">
          <img
            src={DefaultImg}
            alt='defaul_img'
            className='col-12 col-md-6 rounded'
          />
          <Card className="col-12 col-md-6 p-4 text-start">
            <p className='text-white fs-5 font-weight-500 mt-2 mb-0'>
              Account id:{' '}
              <span className='text-info'>
                {entity && entity[0]?.accountId}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Account email:{' '}
              <span className='text-info'>
                {entity && entity[0]?.email}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Account authToken:{' '}
              <span className='text-info'>
                {entity && entity[0]?.authToken}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Account creationDate:{' '}
              <span className='text-info'>
                {entity && entity[0]?.creationDate}
              </span>
            </p>
            <p className='text-white font-weight-500 mt-4 mb-0'>
                Description
                <br />
              <span >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis rerum quaerat nemo laboriosam explicabo voluptatem cumque maxime, laborum iste nobis consectetur doloribus voluptates fugiat aut eum repellat inventore alias a?
              </span>
            </p>
          </Card>
        </div>
        <Link
          to=''
          onClick={() => navigate(-1)}
        >
          Back
        </Link>
      </div>
    </>
  );
};

export default AccountPage;