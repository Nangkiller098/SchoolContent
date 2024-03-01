import { makeAutoObservable } from "mobx";

export default class ArticleStore{


    constructor(){
        makeAutoObservable(this);
    }

    loadselectorArticles=async()=>{
        
    }
}