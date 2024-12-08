export const USER_ROLE = {
    ADMIN: 'admin',
    Employee: 'employee'
}

export const site_path = {
    HOME: '/',
    LOGIN: '/admin/login',
    LOG_OUT: '/admin/logout',
    ORDER_LIST: '/admin/order',
    ORDER_DETAIL: '/admin/order/detail',
    PRODUCT_LIST: '/admin/product',
    PRODUCT_CREATE: '/admin/product/create',
    PRODUCT_UPDATE: '/admin/product/update',
    CATEGORY_LIST: '/admin/category',
    CATEGORY_CREATE: '/admin/category/create',
    CATEGORY_UPDATE: '/admin/category/update',
    USER_LIST: '/admin/user',
    USER_CHANGE_PERMISSION: '/admin/user/change-permission',
    COMPANY_LIST: '/admin/company',
    COMPANY_CREATE: '/admin/company/create',
    COMPANY_UPDATE: '/admin/company/update',
};

export const CRUD_ACTIONS = {
    CREATE: "CREATE",
    EDIT: "EDIT",
    DELETE: "DELETE",
    READ: "READ"
};

export const ORDER_STATUS = {
    PENDING: ' Pending',
    APPROVED: 'Approved',
    PROCESSING: 'Processing',
    SHIPPED: 'Shipped',
    CANCELLED: 'Cancelled',
    REFUNDED: 'Refunded',
};

export const PAYMENT_STATUS = {
    PENDING: 'Pending',
    APPROVED: 'Approved',
    APPRROVED_FOR_DELAYED_PAYMENT: 'ApprovedForDelayedPayment',
    REJECTED: 'Rejected',
};
