import React from 'react';
import querybg from '../../Assets/img/bg2.jpg';
import Jump from 'react-reveal/Jump';
function History() {
  React.useEffect(() => {
    document.title = "History - Euroclear"
}, []);
  return <>
    <img
      src={querybg}
      alt="Euroclear"
      width="100%"
      height="350px"
      className=" title-img" />
    <Jump>

      <div className="header-text-style" >
        <div className='inner'>
          <form className='rigter-screen'>
            <h1>History Screen</h1>
        
    </form>
    </div>
      </div>
  </Jump>
  </>;
}
export default History;
