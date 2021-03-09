export class UserModel {
    id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    address: string | undefined;
    dateOfBirth: string | undefined;
    gender: string | undefined;

    constructor(param?: UserModel) {
        if (param) {
            Object.assign(this, param);
        }

    }
    static get exampleUser(): UserModel {
        return {
            id: 0,
            name: 'Legyek Réka Matilda',
            email: 'legyekrekamatilda@valami.com',
            address: 'Futrinka utca',
            dateOfBirth: '2001.01.01',
            gender: 'male'
        }
    }
}
