import Job from "../models/Job";

interface IJob {
    create(data: Job): any;
}

export default IJob;