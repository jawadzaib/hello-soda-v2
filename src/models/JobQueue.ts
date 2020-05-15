import Job from "./Job"


class JobQueue {
    id: string
    userId: string
    job: Job
    jobProcessed: boolean
    createdDate: string
    constructor(data?: any) {
        this.id = data && data.id ? data.id : ''
        this.userId = data && data.user_id ? data.user_id : ''
        this.jobProcessed = data && data.job_processed ? data.job_processed : false
        this.createdDate = data && data.createdDate ? data.createdDate : ''
        this.job = new Job((data && data.job_object) ? data.job_object : null)
    }

    getId() {
        return this.id
    }
    getUserId() {
        return this.userId
    }
    getJob() {
        return this.job
    }
    getJobProcessed() {
        return this.jobProcessed
    }
    getCreatedDate() {
        return this.createdDate
    }
}

export default JobQueue