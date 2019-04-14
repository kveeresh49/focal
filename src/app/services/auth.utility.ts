import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationUtility {

    public static isAuthenticated(): boolean {

        const currentUserJSON = sessionStorage.getItem('currentUser');
        if (currentUserJSON == null || currentUserJSON === undefined || currentUserJSON === 'undefined') {
            return false;
        }
        const currentUser = JSON.parse(currentUserJSON);
        if (currentUser.jwtToken == null) {
            return false;
        }

        return true;
    }
}
