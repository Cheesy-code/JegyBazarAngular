export class EventModel {
    id?: number;
    name: string | undefined;
    date: string | undefined;
    pictureURL: string | undefined;
    description: string | undefined;


    constructor(param?: EventModel) {
        if (param) {
            Object.assign(this, param);
        }
    }

    static get emptyEvent() {
        return {
          'name': '',
          'date': '',
          'pictureURL': '',
          'description': ''
        };
      }

}
