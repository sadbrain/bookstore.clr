import { CategoryList }  from '../pages';
import { AthUtils }  from '../utils';
import { site_path } from "../utils"

const publicRoutes = [];
const privateRoutes = [
    {
        path: site_path.CATEGORY_LIST,
        component: CategoryList,
        error: AthUtils.handleAuthorization
     },
];

export { publicRoutes, privateRoutes };