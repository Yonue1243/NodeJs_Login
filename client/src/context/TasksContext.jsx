import { createContext, useState, useContext } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";
const TaskContext = createContext();

export const useTasks = () =>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("useTasks must be used within a TaskProvider")
    }
    return context
}

export function TaskProvider({children}){

    const [tasks, setTasks] = useState([])

    const getTasks = async () => {

        try{
            const res = await getTasksRequest()
            setTasks(res.data)
        }catch(err){
            console.log(err)
        }

    }

    const createTasks = async (task) => {

        await createTaskRequest(task)
        
    }

    return(
        <TaskContext.Provider value={{
            tasks,
            createTasks,
            getTasks
        }}>

            {children}

        </TaskContext.Provider>
    )
}