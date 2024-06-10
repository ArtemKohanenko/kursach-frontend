import { action, computed, makeObservable, observable, runInAction, toJS } from "mobx";
import ICourse from "../types/course";
import { deleteCourse, getCourses } from "../api/course";
import { ICreateTask, createTask, deleteTask, getTeacherTasks } from "../api/task";
import { IWork } from "../types/work";
import ITask from "../types/task";
import { getTeacherWorks } from "../api/works";
import IGroup from "../types/group";
import { getGroups } from "../api/group";

class TeacherStore {
    constructor() {
        makeObservable(this);
    }
      
    @observable
    courses: ICourse[] = [];

    @observable
    sendedWorks: IWork[] = []

    @observable
    tasks: ITask[] = [];

    @observable
    groups: IGroup[] = [];

    loading: boolean = false;

    @action
    loadCourses = async (): Promise<void> => {
        try {
        this.loading = true;
        
        const { data } = await getCourses();
        
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
    loadSendedWorks = async (): Promise<void> => {
    try {
      this.loading = true;
    
      const { data } = await getTeacherWorks();
      
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
    loadTasks = async (): Promise<void> => {
        try {
            this.loading = true;

            const { data } = await getTeacherTasks();
            
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
    loadGroups = async (): Promise<void> => {
        try {
            this.loading = true;

            const { data } = await getGroups();
            
            runInAction(() => {
            this.groups = data.data;
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
                this.tasks.push(task);
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
                    this.tasks = this.tasks.filter(task => task.id != taskId)
                    // const course = this.courses.find(course => course.tasks.map(task => task.id).includes(taskId));
                    // if (course?.tasks) {
                    //     course.tasks = course.tasks.filter(task => task.id != taskId);

                    //     for (let i=0; i < this.courses.length; i++) {
                    //         if (this.courses[i].id == course.id) {
                    //             this.courses[i] = course;
                    //         }
                    //     }
                    // }
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

    getTasksByCourseId = (id: string) => {
        return this.tasks.filter(task => task.courseId == id);
    }

    getCourseById = (id: string) => {
        return this.courses.find(course => course.id == id)
    }

    getTaskById = (id: string) => {
        return this.tasks.find(course => course.id == id)
    }
}


const teacherStore = new TeacherStore();

export default teacherStore;