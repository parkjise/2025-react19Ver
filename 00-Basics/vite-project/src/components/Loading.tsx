import styled from "styled-components";

export const LoadingStyles = styled.div`
  #preloader {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999999999;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80px;
    background: var(--card);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading-wave {
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .loading-bar {
    width: 16px;
    height: 8px;
    margin: 0 5px;
    background-color: #000;
    border-radius: 6px;
    animation: loading-wave-animation 1s ease-in-out infinite;
  }

  .loading-bar:nth-child(2) {
    animation-delay: 0.1s;
  }

  .loading-bar:nth-child(3) {
    animation-delay: 0.2s;
  }

  .loading-bar:nth-child(4) {
    animation-delay: 0.3s;
  }

  @keyframes loading-wave-animation {
    0% {
      height: 10px;
    }
    50% {
      height: 50px;
    }
    100% {
      height: 10px;
    }
  }
`;
const Loading = () => {
  return (
    <LoadingStyles id="preloader">
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </LoadingStyles>
  );
};

export default Loading;
