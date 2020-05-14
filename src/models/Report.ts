import SocialScore from './SocialScore';

class Report {
  private scores: SocialScore[];
  private employmentHistory: any[];
  constructor(data?: any) {
    this.scores = new Array<SocialScore>();
    if (data && data.scores) {
      this.scores.push(new SocialScore('Fraud Score', data.scores.fraud ? data.scores.fraud : '0'));
      this.scores.push(new SocialScore('Overall Score', data.scores.overall) ? data.scores.overall : '0');
      this.scores.push(new SocialScore('Employability', (data.scores.employed ? data.scores.employed : '0') + '%'));
      this.scores.push(new SocialScore('Loan Outcome', '0'));
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
