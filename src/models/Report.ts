import SocialScore from './SocialScore';

class Report {
  private scores: SocialScore[];
  private employmentHistory: any[];
  constructor(data?: any) {
    this.scores = new Array<SocialScore>();
    if (data && data.scores) {
      if (data.scores.fraud) {
        this.scores.push(new SocialScore('Fraud', data.scores.fraud));
      }
      if (data.scores.overall) {
        this.scores.push(new SocialScore('Overall Score', data.scores.overall));
      }
      if (data.scores.employed) {
        this.scores.push(new SocialScore('Employability', data.scores.employed + '%'));
      }
    }
    this.employmentHistory = new Array();
    if (data && data.employment) {
      this.employmentHistory = data.employment.history;
    }
  }

  getScores() {
    return this.scores;
  }
}

export default Report;
