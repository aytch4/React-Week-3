const HABITATS_ENDPOINT = 'https://crudcrud.com/api/9051bd1a13694487827985406b3bbb0e/unicorns';//API

class HabitatsApi { //gets data from API
    get = async () => {
        console.log("inside get") //displays
        try {
            const resp = await fetch(HABITATS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Oops, looks like fetchHabitats had an issue.", e);
            
        }
    }

    put = async (habitat) => { //should put/update data
        console.log("Inside PUT and I'm printing value of habitat")//nothing
        console.log(habitat)//nothing
        try {
            const resp = await fetch(`${HABITATS_ENDPOINT}/${habitat._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': "application/JSON"
                },
                body: //JSON.stringify(habitat)

                //I emptied the crudcrud api by using the old crud app that we started it with.  
                //Then tried this change we had made in that app and it fixed the problem I was having
                    JSON.stringify({
                        "habitat" : habitat.habitat,
                        "animals" : habitat.animals}),
            });
            return await resp.json();
        } catch(e) {
            console.log("Oops, looks like updating habitats has an issue.", e);
        }
    }
}

export const habitatsApi = new HabitatsApi();