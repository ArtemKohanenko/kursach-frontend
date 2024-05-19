import { action, observable, runInAction } from "mobx";
import { getCurrentProfile, login } from "../api/auth";
import { IUser } from "../types/user";

class AuthStore {
    @observable
    isLogin: boolean = false;

    @observable
    accessToken: string | null = null;

    @observable
    profile: IUser | null = null;

    @action
    login = async (name: string, password: string) => {
        const { data: data } = await login({name, password});
        
        runInAction(() => {
            this.accessToken = data.access_token;
        });
        console.log(this.accessToken)

        await this.getCurrentProfile();        
    }

    @action
    getCurrentProfile = async() => {
        const {data: data} = await getCurrentProfile();

        runInAction(() => {
            this.profile = data;
        })
        console.log(this.profile)
    }
}

const authStore = new AuthStore();

export default authStore;