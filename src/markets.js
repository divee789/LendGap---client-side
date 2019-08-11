import axios from "axios";

const url = "http://localhost:9000/api/markets/"

class offerService {
    //Get Offers
    static getOffers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url)
                const data = res.data
                resolve(
                    data.map(offers => ({
                        ...offers
                    }))
                )

            } catch (err) {
                reject(err)
            }
        })
    }

    //Create Offers
    static insertOffer(offer) {
        return axios.post(url, offer)
    }
   //Delete Offers
   static deleteOffer(id){
       return axios.delete(url + id)
   }
}

export default offerService