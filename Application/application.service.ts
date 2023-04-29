import process from "process";
class ApplicationService {
  constructor() {}
  getState(): number {
    const upTime = process.uptime();
    return upTime;
  }
}

export default new ApplicationService();
