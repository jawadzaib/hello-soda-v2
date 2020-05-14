import SocialScore from './SocialScore';

class Report {
  private scores: SocialScore[];
  private fraudScore: SocialScore;
  private overallScore: SocialScore;
  private employabilityScore: SocialScore;
  private loanOutcomeScore : SocialScore;
  private employmentHistory: any[];
  constructor(data?: any) {
    this.scores = new Array<SocialScore>();
    this.fraudScore = new SocialScore('Fraud Score', (data && data.scores.fraud) ? data.scores.fraud : '0')
    this.scores.push(this.fraudScore)
    this.overallScore = new SocialScore('Overall Score', (data && data.scores.overall) ? data.scores.overall : '0')
    this.scores.push(this.overallScore)
    this.employabilityScore = new SocialScore('Employability', ((data && data.scores.employed) ? data.scores.employed : '0') + '%')
    this.scores.push(this.employabilityScore)
    this.loanOutcomeScore = new SocialScore('Loan Outcome', '0')
    this.scores.push(this.loanOutcomeScore)
    this.employmentHistory = new Array();
    if (data && data.employment) {
      this.employmentHistory = data.employment.history;
    }
  }

  getScores() {
    return this.scores;
  }

  getFraudScore() {
      return this.fraudScore
  }
  getOverallScore() {
      return this.overallScore
  }
  getEmployabilityScore() {
      return this.employabilityScore
  }
  getLoanOutcomeScore() {
      return this.loanOutcomeScore
  }

}

export default Report;
