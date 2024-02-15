import jobs from '../../data/job-isting.json'
import type { JobsList } from '../../model/models';

const job_list: JobsList = jobs;

export const load = (() => {
  return {
    job_list
  };
})
