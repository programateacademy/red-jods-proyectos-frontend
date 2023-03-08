import { ODS } from "../Data"

const service = {
    getData: ({from, to} ) => {
      return new Promise ((resolve) => {

        const data = ODS.slice(from, to); 
        resolve({
            count: ODS.length,
            data: data
        })
      });
    }
}

export default service;