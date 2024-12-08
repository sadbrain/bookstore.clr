import { ProductList } from '../pages';
import { AthUtils }  from '../utils';
import { site_path } from "../utils"

const publicRoutes = [];
const privateRoutes = [
    {
        path: site_path.PRODUCT_LIST,
        component: ProductList,
        error: AthUtils.handleAuthorization

     },
];
export { publicRoutes, privateRoutes };