import {EditableSpan} from "@/common/components/EditableSpan/EditableSpan.tsx";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {changeTodolistTitleAC, deleteTodolistAC} from "@/features/todolists/model/todolists-reducer.ts";
import type {Todolist} from "@/app/App.tsx";
import styles from './TodolistTitle.module.css'

type Props = {
    todolist: Todolist
}

export const TodolistTitle = ({todolist}: Props) => {
    const {id, title} = todolist;

    const dispatch = useAppDispatch()

    const deleteTodolistHandler = () => {
        // deleteTodolist(id)
        dispatch(deleteTodolistAC({id}))
    }

    const changeTodolistTitleHandler = (title: string) => {
        // changeTodolistTitle(id, title)
        dispatch(changeTodolistTitleAC({id, title}))
    }
    return (
        <div className={styles.container}>
            <h3>
                <EditableSpan value={title} onChange={changeTodolistTitleHandler}/>
            </h3>
            <IconButton onClick={deleteTodolistHandler}>
                <DeleteIcon/>
            </IconButton>
        </div>
    );
};

