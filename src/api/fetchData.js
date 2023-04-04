function fetchDatas() {
    fetch('./data/logements.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération des données.')
        }
        return response.json()
    })
}

export const requestLodging = () => {
    try {
        return fetchDatas()
    } catch (error) {
        console.error(error);
        throw new Error('Une erreur est survenue lors de la récupération des logements.')
    }
}