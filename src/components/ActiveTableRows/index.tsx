import { Link } from 'react-router-dom';

interface IActiveTableRows {
  id: string | number;
  field1: string | number;
  path: string | number;
  field2: string | number;
  field3: string | number;
  field4?: string | number
}

const ActiveTableRows: React.FC<IActiveTableRows> = ({
  id,
  field1,
  path,
  field2,
  field3,
  field4,
  ...props
}) => {

  return (
    <tr {...props}>
      <td className='text-white cursor-pointer'>
        <Link to={`${path}/${id}`}>
          {field1}
        </Link>
      </td>
      <td className='text-white cursor-pointer'>
        <Link to={`${path}/${id}`}>
          {field2}
        </Link>
      </td>
      <td className='text-white cursor-pointer'>
        <Link to={`${path}/${id}`}>
          {field3}
        </Link>
      </td>
      {
        field4
          ? (
            <td className='text-white cursor-pointer'>
              <Link to={`${path}/${id}`}>
                {field4}
              </Link>
            </td>
          )
          : null
      }
    </tr>
  );
}

export default ActiveTableRows;
