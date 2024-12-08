import { UserList }  from '../pages';
import { AthUtils }  from '../utils';
import { site_path } from "../utils"

const publicRoutes = [];
const privateRoutes = [
    {
        path: site_path.USER_LIST,
        component: UserList,
        error: AthUtils.handleAuthorization
     },
];

export { publicRoutes, privateRoutes };