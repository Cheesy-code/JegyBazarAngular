export class EventModel {
    id: number | undefined;
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
          'id': 0,
          'name': '',
          'date': '',
          'pictureURL': '',
          'description': ''
        };
      }

}
