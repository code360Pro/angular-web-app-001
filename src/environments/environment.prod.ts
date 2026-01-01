export const environment = {
    production: true,
    apiUrl: '/api',
    auth: {
        domain: 'YOUR_DOMAIN',
        clientId: 'YOUR_CLIENT_ID',
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    }
};
