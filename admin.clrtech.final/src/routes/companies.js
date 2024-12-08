import { CompanyList }  from '../pages';
import { AthUtils }  from '../utils';
import { site_path } from "../utils"

const publicRoutes = [];
const privateRoutes = [
    {
        path: site_path.COMPANY_LIST,
        component: CompanyList,
        error: AthUtils.handleAuthorization
     },
];

export { publicRoutes, privateRoutes };