import { action, makeObservable, observable, runInAction } from "mobx";
import { ISendWork, createWork, getStudentWorks } from "../api/works";
import ITask from "../types/task";
import { getStudentTasks } from "../api/task";
import { IWork } from "../types/work";

class StudentStore {
    constructor() {
      makeObservable(this);
    }
    
    @observable
    tasks: ITask[] = [];

    @observable
    sendedWorks: IWork[] = [];

    loading: boolean = false;

    @action
    loadTasks = async (): Promise<void> => {
    try {
      this.loading = true;
    
      const { data } = await getStudentTasks();
      
      runInAction(() => {
        this.tasks = data.data;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
    };
  
    @action
    loadWorks = async (): Promise<void> => {
    try {
      this.loading = true;
    
      const { data } = await getStudentWorks();
      
      runInAction(() => {
        this.sendedWorks = data.data;
        console.log(data.data)
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  sendWork = async (params: ISendWork): Promise<void> => {
      try {
          this.loading = true;

          const { data } = await createWork(params);

          runInAction(() => {
              // const work = data.data;
              // this.sendedWorks.push(work);
              this.loadWorks()
          });
      } catch (error) {
          console.error(error);
      } finally {
          runInAction(() => {
              this.loading = false;
          });
      }
    };
}

const studentStore = new StudentStore();

export default studentStore;
