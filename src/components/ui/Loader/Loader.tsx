import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      height='50'
      width='50'
      radius='10'
      color='#424242'
      ariaLabel='three-dots-loading'
      visible={true}
    />
  );
};

export default Loader;
