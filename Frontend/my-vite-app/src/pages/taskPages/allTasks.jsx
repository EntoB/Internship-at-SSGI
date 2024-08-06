import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import TaskItems from '../../components/taskComponents/TaskItems';

 const AllTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('http://localhost:5000/api/task/tasks');
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                All Tasks
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Duration</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {tasks.map((task) => (
                            <TableRow key={task._id}>
                                <TableCell>{task.title}</TableCell>
                                <TableCell>{task.description}</TableCell>
                                <TableCell>{task.duration}</TableCell>
                            </TableRow>
                        ))} */}

                            {tasks.map((task) => (   
                                <TaskItems
                                    task = {task}
                                />
                            ))}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AllTasks;
