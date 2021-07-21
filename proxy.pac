function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    if (host.includes(".stg-myteksi.com")) {
        return 'PROXY 192.168.10.100:7788';
    }
    return 'DIRECT';
}
