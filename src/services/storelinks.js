
export async function getLinkSave(key){

const myLinks = await localStorage.getItem(key)

let linksSaves = JSON.parse(myLinks) || [];

return linksSaves;

}


export async function saveLink(key,newlink){

    let linksStored = await getLinkSave(key);

    const hasLink = linksStored.some(link => link.id === newlink.id)

    if(hasLink){
        console.log('Esse link ja existe na lista')
        return;
    }

    linksStored.push(newlink)
    await localStorage.setItem(key,JSON.stringify(linksStored))
    console.log('Link salvo')
}


export function linkDelete(links,id){

    let myLinks = links.filter(item => {
        return(item.id !== id)
    })

    localStorage.setItem('@encurtalink',JSON.stringify(myLinks))
    console.log('Link deletado com sucesso')

    return myLinks;
}