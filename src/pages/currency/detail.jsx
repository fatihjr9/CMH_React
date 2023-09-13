import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../../store';

import Wrapper from '../../layout';

function DetailCurrency() {
  const { id } = useParams();
  const { fetchDetailCurrencies, detailCurrency } = useStore();

  useEffect(() => {
    fetchDetailCurrencies(id);
  }, [fetchDetailCurrencies, id]);

  return (
    <Wrapper>
      {detailCurrency ? (
        <div>
          <h2>{detailCurrency.name}</h2>
          <h2>{detailCurrency.symbol}</h2>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Wrapper>
  );
}

export default DetailCurrency;