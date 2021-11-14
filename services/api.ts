import {Task} from '~/models/Task';

const MockStore: Task[] = [{
  description: 'Test todosa',
  isDone: true,
}, {
  description: 'Test todosa 123',
  isDone: false,
}]

export function useApi() {
  return {
    getAllListElements(): Promise<Task[]> {
      // TODO: Przerobić na get do api
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(JSON.stringify(MockStore)))
        }, 1000)
      });
    },
    addNewTodo(todo: Task): Promise<void> {
      // TODO: Przerobić na post do api
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          MockStore.push(todo)
          resolve()
        }, 1000)
      });
    }
  }
}


