import { action, makeObservable, observable, runInAction } from "mobx";
import { ISendWork, createWork, getStudentWorks } from "../api/works";
import ITask from "../types/task";
import { getStudentTasks } from "../api/task";
import { IWork } from "../types/work";
import ICourse from "../types/course";
import { getStudentCourses } from "../api/course";

class StudentStore {
    constructor() {
      makeObservable(this);
    }
    
    @observable
    tasks: ITask[] = [];

    @observable
    courses: ICourse[] = [];

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
    loadCourses = async (): Promise<void> => {
      try {
        this.loading = true;
      
        const { data } = await getStudentCourses();
        
        runInAction(() => {
          this.courses = data.data;
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

  getTaskById = (id: string) => {
    console.log(this.tasks)
    return this.tasks.find(task => task.id == id)
  }
    
  getCourseById = (id: string) => {
    return this.courses.find(course => course.id == id)
  }
}

const studentStore = new StudentStore();

export default studentStore;
