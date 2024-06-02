import { observable } from "mobx";

class SendedSorksStore {
    @observable
    sendedWorks: Work[] = [
        {
            id: '1',
            task: 'Task 1',
            subject: 'ООАиП',
            student: 'Студент1',
            teacher: 'Тичер 1',
            status: 'Проверено',
            date: new Date(),
            commits: 18
        },
        {
            id: '2',
            task: 'Task 2',
            subject: 'ООАиП',
            student: 'Студент1',
            teacher: 'Тичер 1',
            status: 'Проверено',
            date: new Date(),
            commits: 20
        },
        {
            id: '3',
            task: 'Task 3',
            subject: 'ООАиП',
            student: 'Студент1',
            teacher: 'Тичер 1',
            status: 'Проверено',
            date: new Date(),
            commits: 228
        }
    ]
}

const sendedSorksStore = new SendedSorksStore();

export default sendedSorksStore;