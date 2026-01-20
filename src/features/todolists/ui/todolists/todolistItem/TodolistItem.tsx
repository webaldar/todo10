import type {Todolist} from '../../../../../app/App.tsx'
import {CreateItemForm} from '../../../../../common/components/CreateItemForm/CreateItemForm.tsx'
import {createTaskAC} from "@/features/todolists/model/tasks-reducer.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {TodolistTitle} from "@/features/todolists/ui/todolists/todolistItem/TodolistTitle/TodolistTitle.tsx";
import {Tasks} from "@/features/todolists/ui/todolists/todolistItem/Tasks/Tasks.tsx";
import {FilterButton} from "@/features/todolists/ui/todolists/todolistItem/FilterButton/FilterButton.tsx";

type Props = {
    todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {
    const {id} = todolist
    const dispatch = useAppDispatch()

    const createTaskHandler = (title: string) => {
        // createTask(id, title)
        dispatch(createTaskAC({todolistId: id, title}))
    }

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <CreateItemForm onCreateItem={createTaskHandler}/>
            <Tasks todolist={todolist}/>
            <FilterButton todolist={todolist}/>
        </div>
    )
}
