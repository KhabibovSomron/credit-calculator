import axios from "axios";
import { IData } from "../types/types";

export async function fetchData(date: string) {
    const response = await axios.get<IData[]>('https://www.nbrb.by/api/refinancingrate', {
        params: {
            onDate: date
        }
    });

    const result: IData = response.data[0];
    return result;
}