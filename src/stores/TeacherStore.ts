import { action, computed, makeObservable, observable, runInAction, toJS } from "mobx";
import ICourse from "../types/course";
import { deleteCourse, getCourses } from "../api/course";
import { ICreateTask, createTask, deleteTask } from "../api/task";
import { IWork } from "../types/work";
import ITask from "../types/task";

class TeacherStore {
    constructor() {
        makeObservable(this);
    }
      
    @observable
    courses: ICourse[] = [];

    @observable
    sendedWorks: IWork[] = []

    loading: boolean = false;

    @action
    loadCourses = async (): Promise<void> => {
    try {
      this.loading = true;
    
      const { data } = await getCourses();
      
      runInAction(() => {
        this.courses = data.data;
        console.log(this.courses)
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
    deleteCourse = async (courseId: string): Promise<void> => {
        try {
            this.loading = true;

            const { data } = await deleteCourse(courseId);

            runInAction(() => {
                const status = data.data;
                if (status == 200) {
                    this.courses = this.courses.filter(course => course.id != courseId)
                }
            })
        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
            this.loading = false;
            });
        }
    };

    @action
    createTask = async (params: ICreateTask): Promise<void> => {
        try {
            this.loading = true;

            const { data } = await createTask(params);
            

            runInAction(() => {
                const task = data.data;
                const courseId = task.course.id;

                this.courses.find(course => course.id == courseId)?.tasks.push(task);
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
    deleteTask = async (taskId: string): Promise<void> => {
        try {
            this.loading = true;

            const { data } = await deleteTask(taskId);
            
            runInAction(() => {
                const status = data.status;
                if (status == 200) {
                    const course = this.courses.find(course => course.tasks.map(task => task.id).includes(taskId));
                    console.log(course)
                    if (course?.tasks) {
                        course.tasks = course.tasks.filter(task => task.id != taskId);

                        for (let i=0; i < this.courses.length; i++) {
                            if (this.courses[i].id == course.id) {
                                this.courses[i] = course;
                            }
                        }
                    }
                }
            });
            

        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    getCourseById = (id: string) => {
        return this.courses.find(course => course.id == id)
    }

    getCourseByTask = (taskId: string) => {
        return this.courses.find(course => course.tasks.map(task => task.id).includes(taskId))
    }

    getTaskById = (id: string) => {
        let allTasks: ITask[] = []
        for (let i=0; i<this.courses.length; i++) {
            toJS(this.courses).forEach(course => course.tasks?.forEach(task => {allTasks.push(task)}))
        }
        return allTasks.find(task => task.id == id)
    }
}


const teacherStore = new TeacherStore();

export default teacherStore;