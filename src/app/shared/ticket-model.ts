// import { EventModel } from "./event-model";
import { EventModel } from "./event-model";
import { UserModel } from "./user-model";

export class TicketModel {
    id: string | undefined;
    date: string | undefined;
    numberOfTickets: number | undefined;
    minimalBidPrice: number | undefined;
    bidStep: number | undefined;
    eventId: string | undefined;
    event: EventModel | undefined;
    sellerUserId: string | undefined;
    seller: UserModel | undefined;

    constructor(param?: TicketModel) {
        if (param) {
            Object.assign(this, param);
        }
    }
}
