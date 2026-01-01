export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    auth: {
        domain: 'YOUR_DOMAIN',
        clientId: 'YOUR_CLIENT_ID',
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    }
};
