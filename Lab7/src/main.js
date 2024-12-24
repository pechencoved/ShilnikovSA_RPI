import HeaderComponent from "./view/header-component.js";
import FormAddTaskComponent from "./view/add-task-component.js";
import NameTaskComponent from "./view/name-task-component.js";
import ListTaskComponent from "./view/list-task-component.js";
import { render, RenderPosition } from "./framework/render.js";
import TasksModel from "./model/task-model.js";
import TasksBoardPresenter from "./presenter/tasks-board-presenter.js";
import ClearButtonComponent from "./view/clear-button-component.js";
import TasksApiService from "./tasks-api-service.js";

const END_POINT = "https://6721d14298bbb4d93ca9c778.mockapi.io";
const bodyContainer = document.querySelector(".board-app");
const formContainer = document.querySelector(".add-task");
const tasksBoardContainer = document.querySelector(".task-board");

const tasksModel = new TasksModel(
    {
        tasksApiService: new TasksApiService(END_POINT)
    }
);

const tasksBoardPresenter = new TasksBoardPresenter({ boardContainer: tasksBoardContainer, tasksModel });


function handleNewTaskButtonClick() {
    tasksBoardPresenter.createTask(); 
}

const formAddTaskComponent = new FormAddTaskComponent({
    onClick: handleNewTaskButtonClick
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(formAddTaskComponent, formContainer);

tasksBoardPresenter.init(); 
