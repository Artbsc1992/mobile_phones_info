import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPhones } from '../../redux/phones/phones';

const PhoneList = () => {
  const dispatch = useDispatch();
  const phones = useSelector((state) => state.phones);
  useEffect(() => {
    dispatch(getPhones);
  }, []);

  return(
    <div className="phone_container">
      <h2>Most voted Phones 2022</h2>
      {phones && phones.map(
        (phone) => (
          <Phone
           key={phone.id}
           
           />
        )
      )}
    </div>

  )

}

export default PhoneList;