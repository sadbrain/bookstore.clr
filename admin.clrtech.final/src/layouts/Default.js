import { SideBar } from '../components';

import './Default.css';
function Default({ children }) {
   return (
      <div className="a-wrapper">
         <SideBar />
         <div className="a-content">
            <div className="container">{children}</div>
         </div>
      </div>
   );
}

export default Default;
