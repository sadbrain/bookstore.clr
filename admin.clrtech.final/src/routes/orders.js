import { OrderList }  from '../pages';
import { AthUtils }  from '../utils';
import { site_path } from "../utils"

const publicRoutes = [];
const privateRoutes = [
    {
        path: site_path.ORDER_LIST,
        component: OrderList,
        error: AthUtils.handleAuthorization
     },
];

export { publicRoutes, privateRoutes };