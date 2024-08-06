
import React, { useState } from 'react';
import { TableCell, TableRow } from '@mui/material';


const TaskItems = (props) => {

    const [ isDone, setIsDone ] = useState(false);

    function handeClick() {
        setIsDone(() => !isDone);
    }

    return(
            
            <TableRow key={props.task._id} onClick = {handeClick} >
                <TableCell>{props.task.title}</TableCell>
                <TableCell style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{props.task.description}</TableCell>
                <TableCell style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{props.task.duration}</TableCell>
            </TableRow>
    );
};

export default TaskItems; 