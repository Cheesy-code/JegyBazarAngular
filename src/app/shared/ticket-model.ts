import { EventModel } from "./event-model";
import { UserModel } from "./user-model";

export class TicketModel {
    id: number | undefined;
    date: string | undefined;
    artist: string | undefined;
    numberOfTickets: number | undefined;
    minimalBidPrice: number | undefined;
    bidStep: number | undefined;
    bidStartDate: string | undefined;
    bidEndDate: string | undefined;
    eventId!: number;
    event?: EventModel;
    sellerUserId!: number;
    seller?: UserModel;

    constructor(param?: TicketModel) {
        if (param) {
            Object.assign(this, param);
        }
    }
}
