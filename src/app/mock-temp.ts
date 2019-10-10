import { Temp, Detail, Store } from './temp';

export const TEMPS: Temp[] = [
    {
        tempID: '1',
        tempOS: 'Window Server ',
        osVersion: ['2012 r2', '2016 r2'],
        name: '../../../../assets/img/os-logo/microsoft.png'
        // tempVersion: [
        //     { version: '2012 r2', libraryID: '1-1-1-1-1' },
        //     { version: '2016 r2', libraryID: '2-2-2-2-2' }]
    },
    {
        tempID: '2',
        tempOS: 'Centos ',
        osVersion: ['6', '7'],
        name: '../../../../assets/img/os-logo/centos.png'
        // tempVersion: [
        //     { version: '6', libraryID: '3-3-3-3-3' },
        //     { version: '7', libraryID: '4-4-4-4-4' }]
    },
    {
        tempID: '3',
        tempOS: 'Ubuntu ',
        osVersion: ['16.04', '19.04'],
        name: '../../../../assets/img/os-logo/ubuntu.png'
        // tempVersion: [
        //     { version: '16.04', libraryID: '3-3-3-3-3' },
        //     { version: '19.04', libraryID: '4-4-4-4-4' }]
    },
    // { tempID: '5', tempOS: 'Ubuntu', osVersion: '19.04' },
];

export const Storages: Store[] = [
    {
        datastore: 'datastore-10',
        freePercentage: 5,
        name: 'datastore1'
    },
    {
        datastore: 'datastore-11',
        freePercentage: 65,
        name: 'BTT_INTERNAL_PRD_ISO_01'
    },
    {
        datastore: 'datastore-12',
        freePercentage: 56,
        name: 'BTT_UCSD_POC_PUB_02'
    }
];

export const Mockorg = {
    result: {
        org_name: [
            'AIS',
            'AZURE',
            'AZURE/AZURE-NEW',
            'Cloud6.0',
            'DBaaS',
            'DR-Cloud',
            'DRaaS',
            'EGA',
            'GMO',
            'Healthcare',
            'Healthcare-DR',
            'INET-Production',
            'INET-VFirewall',
            'INET-Workpoint',
            'Internal-Service',
            'MS-Cloud_SaaS',
            'Openlands-Trunk',
            'Openlandscape',
            'OpenStack',
            'Platform9',
            'Shiseido',
            'SRM5.5',
            'SRM6.0',
            'VDI-ESX',
            'VDI-XEN-BTT'
        ]
    }
};

export const MockInter = {
    result: {
        org_interface: [
            'AIS_eth00',
            'AIS_eth01',
            'AIS_eth02'
        ]
    }
};
