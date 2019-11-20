import os from 'os';

const getIP = ():any[] => {
    let ipadresses:any[] = [];
    let ifaces = os.networkInterfaces();
    Object.keys(ifaces).map((ifname) => {
        ifaces[ifname].map((iface) => {
            if (iface.family == 'IPv4' && iface.internal == false) {
                ipadresses.push(iface.address);
            }
        });
    });
    return ipadresses;
}

export default getIP;