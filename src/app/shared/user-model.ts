export class UserModel {
    id: string | undefined;
    name: string | undefined;
    email: string | undefined;
    address: string | undefined;
    dateOfBirth: string | undefined;
    gender: string | undefined;
    profilePictureUrl: string | undefined;

    constructor(param?: UserModel) {
        if (param) {
            Object.assign(this, param);
        }

    }
}
