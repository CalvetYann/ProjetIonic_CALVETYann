export class Ships {
    id?: string;
    brandName: string;
    shipName: string;
    shipRole: string;
    shipSize: string;
    shipWeight: string;
    shipLength: string;
    shipWidth: string;
    shipHeight: string;
    shipPicture: string;
    shipDesc: string;
    shipFlightReady: boolean;

    constructor() {
        this.brandName = '';
        this.shipName = '';
        this.shipRole = '';
        this.shipSize = '';
        this.shipWeight = '';
        this.shipLength = '';
        this.shipWidth = '';
        this.shipHeight = '';
        this.shipPicture = '';
        this.shipDesc = '';
        this.shipFlightReady = false;
    }
}
