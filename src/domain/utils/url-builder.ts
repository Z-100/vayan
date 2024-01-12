export const urlBuilder = (url: string, ...params: string[]) => {

    params.forEach(p => {
        url = url.replace('%s', p)
    });

    return url;
}
