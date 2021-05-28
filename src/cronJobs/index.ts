import { deleteFiles } from './jobs';

export function startCronJobs() {
  deleteFiles();
}