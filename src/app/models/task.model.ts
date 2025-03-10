interface TaskModel {
  id: string;
  title: string;
  completed: boolean;
  editing?: boolean;
}

export default TaskModel;
