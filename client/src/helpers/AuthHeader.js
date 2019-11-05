export function authHeader() {
    // return authorization header with jwt token
    let token = localStorage.getItem('token');

    if (token) {
        return { 'VNIST-Authentication-Token': token };
    } else {
        return {};
    }
}