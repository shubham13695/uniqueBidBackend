export function slugify(email:string){
    let emailAddressWithoutHost = email.split("@")[0];
    return `${emailAddressWithoutHost}-${Math.random().toString(36).slice(2).toUpperCase()}`;
}

export function slugifyProduct(name:string){
    return `${name}-${Math.random().toString(36).slice(2).toUpperCase()}`;
}