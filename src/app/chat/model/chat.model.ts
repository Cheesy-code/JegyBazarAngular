export class ChatMessageModel {
    $id: string;
    msg: string;
    userId: string;
    userName: string;
    userPictureUrl: string;
    created: number;

    constructor(data?: ChatMessageModel) {
        if (data != null) {
            Object.assign(this, data);
        }

        const $idPropertyDesctriptor = Object.getOwnPropertyDescriptor(this, '$id');
        $idPropertyDesctriptor.enumerable = false;
        Object.defineProperty(this, '$id', $idPropertyDesctriptor);
    }
}