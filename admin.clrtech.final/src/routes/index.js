import { Home } from '../pages';

const files = require.context('.', false, /\.js$/);

let publicRoutes = [];
let privateRoutes = [
    {
        path: '/',
        component: Home,
        error: () => {
            alert('you are not permission to access this page');
         },
     },
];

files.keys().forEach((fileName) => {
    if (fileName === './index.js') return;

    const { publicRoutes: pub, privateRoutes: priv } = files(fileName);
 
    if (pub) {
       publicRoutes = [...publicRoutes, ...pub];
    }
    
    if (priv) {
       privateRoutes = [...privateRoutes, ...priv];
    }
 });
 
 export { publicRoutes, privateRoutes };