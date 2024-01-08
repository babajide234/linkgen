'use server'
 import Data from './data.json';

 export interface DataType {
    id: string;
    url: string; 
  }
export async function getLink():Promise<DataType[]> {
    return Data;
}