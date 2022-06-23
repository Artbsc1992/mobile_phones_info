import './loadingPage.css';

const LoadingPage = () => (
  <>
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <div style={{ color: '#fff' }}>Loading...</div>
  </>
);

export default LoadingPage;
