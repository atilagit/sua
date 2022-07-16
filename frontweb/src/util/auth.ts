import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

export const ADMIN = "ROLE_ADMIN";
export const OPERATOR = "ROLE_OPERATOR";
export const BASIC = "ROLE_BASIC";

export type Role = 'ROLE_BASIC' | 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type TokenData = {
    exp: number,
    user_name: string,
    authorities: Role[];
}

export const hasAnyRoles = (roles: Role[]): boolean => {
    if (roles.length === 0) {
        return true;
    }

    const tokenData = getTokenData();

    if (tokenData !== undefined) {
        return roles.some(role => tokenData.authorities.includes(role));
    }

    return false;
}

export const getTokenData = (): TokenData | undefined => {
    try {
        return jwtDecode(getAuthData().access_token) as TokenData;
    }
    catch (error) {
        return undefined;
    }
}

export const isAuthenticated = (): boolean => {
    const tokenData = getTokenData();
    return (tokenData !== undefined) && (tokenData.exp * 1000 > Date.now());
}