import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import service from "../services/services";

const pageSize = 4; //How many cards it going to show

export default function AppPagination ({setCard}) {

   const [pagination, setPagination] = useState ({
        count: 0,
        from: 0,
        to: pageSize
   });

   const handlePageChange = (Event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination ({...pagination, from: from, to: to})
   }

    useEffect(()=> {
        service.getData({from: pagination.from, to:pagination.to}).then(response => {
            setPagination({...pagination, count: response.count});
            setCard(response.data)
        });
    },[pagination.from, pagination.to]);


    return (
        <Box justifyContent={"center"} alignItems={"center"} display={"flex"}
        sx= {{
            margin: "20px 0px"
        }}
        >
            <Pagination
                color="primary"
                count={Math.ceil(pagination.count/ pageSize)}
                onChange={handlePageChange}
                />
                
        </Box>
        
    );
};