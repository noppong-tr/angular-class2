export class Detail {
    version: string;
    libraryID: string;
}

export class Temp {
    tempID: string;
    tempOS: string;
    osVersion: string[];
    // a?: Detail[];
    tempVersion?: Detail[];
    name: string;
}

export class Store {
    datastore: string;
    freePercentage: number;
    name: string;
}

export class SendTemp {
    name: string;
    storage: string;
    storageType: string;
    templateId: string;
    // template_name: string;
    // network_id: string;
    // network_name: string;
}
