
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "@/common/components/EditableSpan/EditableSpan.tsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "@/features/todolists/model/tasks-reducer.ts";
import {ChangeEvent} from "react";
import {Task} from "@/app/App.tsx";
import {getListItemSx} from "./taskItem.styles.ts";


type Props = {
    task: Task
    todolistId: string
}
export const TaskItem = ({task, todolistId}: Props) => {

    const dispatch = useAppDispatch()
    const deleteTaskHandler = () => {
        dispatch(deleteTaskAC({todolistId, taskId: task.id}))
    }

    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        // changeTaskStatus(id, task.id, newStatusValue)
        dispatch(changeTaskStatusAC({todolistId, taskId: task.id, isDone: newStatusValue}))
    }

    const changeTaskTitleHandler = (title: string) => {
        // changeTaskTitle(id, task.id, title)
        dispatch(changeTaskTitleAC({todolistId, taskId: task.id, title}))
    }

    return (
        <ListItem key={task.id} sx={getListItemSx(task.isDone)}>
            <div>
                <Checkbox checked={task.isDone} onChange={changeTaskStatusHandler}/>
                <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
            </div>
            <IconButton onClick={deleteTaskHandler}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
};

