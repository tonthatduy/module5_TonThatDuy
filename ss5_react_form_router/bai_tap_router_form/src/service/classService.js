import axios from "axios";

let classList = [
    {
        id: "1",
        name: "C02"
    },
    {
        id: "2",
        name: "C03"
    },
    {
        id: "3",
        name: "C06"
    },
    {
        id: "4",
        name: "C05"
    }
]

export async function getClassAll() {
    try {
        const resp = await axios.get("http://localhost:3001/classCG");
        return resp.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}