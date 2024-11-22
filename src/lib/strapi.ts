export const query = (url: string) => {
    return fetch(`${import.meta.env.VITE_API_URL_STRAPI}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN_STRAPI}`,
        }
    }).then(res => res.json())
}