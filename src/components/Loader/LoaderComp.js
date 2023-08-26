import { StyledVortex } from '../Layout';
import { Vortex } from 'react-loader-spinner';

export const LoaderComp = () => {
  return (
    <StyledVortex>
      <Vortex
        visible={true}
        height="180"
        width="180"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['grau', 'silver', 'grau', 'silver', 'grau', 'silver']}
      />
    </StyledVortex>
  );
};
