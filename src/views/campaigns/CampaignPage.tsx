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

const CampaignPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entity = useSelector((state: RootState) => state.campaigns.data.filter((item) => item.campaignId === id));

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
              Campaign id:{' '}
              <span className='text-info'>
                {entity && entity[0]?.campaignId}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Clicks:{' '}
              <span className='text-info'>
                {entity && entity[0]?.clicks}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Cost:{' '}
              <span className='text-info'>
                {entity && entity[0]?.cost}
              </span>
            </p>
            <p className='text-white fs-5 font-weight-500 mt-4 mb-0'>
              Date:{' '}
              <span className='text-info'>
                {entity && entity[0]?.date}
              </span>
            </p>
            <p className='text-white font-weight-500 mt-4 mb-0'>
                Description
                <br />
              <span >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quam, unde facilis pariatur rem vero impedit, itaque dolores hic sit debitis cumque quaerat iusto corporis adipisci quasi eveniet. Beatae, quasi.
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

export default CampaignPage;