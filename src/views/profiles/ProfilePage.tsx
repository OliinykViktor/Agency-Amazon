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

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entity = useSelector((state: RootState) => state.profiles.data.filter(item => item.profileId === id));

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
              Profile Id:{' '}
              <span className='text-info'>
                {entity && entity[0]?.profileId}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Country:{' '}
              <span className='text-info'>
                {entity && entity[0]?.country}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Marketplace:{' '}
              <span className='text-info'>
                {entity && entity[0]?.marketplace}
              </span>
            </p>
            <p className='text-white font-weight-500 mt-4 mb-0'>
              Description
              <br />
              <span >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, mollitia ducimus, tenetur minus labore sint sunt praesentium odio debitis reiciendis aspernatur qui alias pariatur doloremque, modi deleniti itaque eligendi adipisci!
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

export default ProfilePage;