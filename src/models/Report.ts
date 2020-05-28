import SocialScore from './SocialScore';

class Report {
  private scores: SocialScore[];
  private fraudScore: SocialScore;
  private overallScore: SocialScore;
  private employabilityScore: SocialScore;
  private loanOutcomeScore: SocialScore;
  private employmentHistory: any[];
  private birthday: any;
  private psych: any;
  private socialProximity: any;
  private socialConnectedness: any;
  private likelyOutcomeScore: any;
  private location: any;
  private wordHighlights: any;
  private topicMentions: any;
  private topWords: any;
  private wordCategories: any;
  private personalAddress: any;
  private flaggedPhrases: any;
  private interestMentions: any;
  private geoDetail: any;
  private onlineActivity: any;
  private spending: any;

  constructor(data?: any) {
    this.scores = new Array<SocialScore>();
    this.fraudScore = new SocialScore('Fraud Score', data && data.scores && data.scores.fraud ? data.scores.fraud : 0);
    this.scores.push(this.fraudScore);
    this.overallScore = new SocialScore('Overall Score', data && data.scores && data.scores.overall ? data.scores.overall : 0);
    this.scores.push(this.overallScore);
    this.employabilityScore = new SocialScore('Employability', data && data.scores && data.scores.employed ? data.scores.employed : 0);
    this.scores.push(this.employabilityScore);
    this.loanOutcomeScore = new SocialScore('Loan Outcome', '0');
    this.scores.push(this.loanOutcomeScore);
    this.employmentHistory = new Array();
    if (data && data.employment && data.employment.history) {
      this.employmentHistory = data.employment.history;
    }
    this.birthday = data && data.birthday ? data.birthday : null;
    this.psych = data && data.psych ? data.psych : null;
    this.socialProximity = data && data.social && data.social.proximity ? data.social.proximity : null;
    this.socialConnectedness = data && data.social && data.social.connectedness ? data.social.connectedness : null;
    this.likelyOutcomeScore = data && data.scores && data.scores.likely_outcome ? data.scores.likely_outcome : null;
    this.location = data && data.location ? data.location : null;
    this.wordHighlights = data && data.activity && data.activity.word_highlights ? data.activity.word_highlights : null;
    this.topicMentions = data && data.activity && data.activity.topic_mentions ? data.activity.topic_mentions : null;
    this.topWords = data && data.activity && data.activity.top_words ? data.activity.top_words : null;
    this.wordCategories = data && data.activity && data.activity.ord_categories ? data.activity.word_categories : null;
    this.personalAddress = data && data.activity && data.activity.personal_address ? data.activity.ersonal_address : null;
    this.flaggedPhrases = data && data.activity && data.activity.flagged_phrases ? data.activity.flagged_phrases : null;
    this.interestMentions = data && data.activity && data.activity.interest_mentions ? data.activity.interest_mentions : null;
    this.geoDetail = data && data.activity && data.activity.geo_detail ? data.activity.geo_detail : null;
    this.onlineActivity = data && data.activity && data.activity.online ? data.activity.online : null;
    this.spending = data && data.activity && data.activity.spending ? data.activity.spending : null;
  }

  getScores() {
    return this.scores;
  }

  getFraudScore() {
    return this.fraudScore;
  }
  getOverallScore() {
    return this.overallScore;
  }
  getEmployabilityScore() {
    return this.employabilityScore;
  }
  getLoanOutcomeScore() {
    return this.loanOutcomeScore;
  }
  getBirthday() {
    return this.birthday;
  }
  getPsych() {
    return this.psych;
  }
  getSocialProximity() {
    return this.socialProximity;
  }
  getSocialConnectedness() {
    return this.socialConnectedness;
  }
  getLikelyOutcomeScore() {
    return this.likelyOutcomeScore;
  }
  getLocation() {
    return this.location;
  }
  getWordHighlights() {
    return this.wordHighlights;
  }
  getTopicMentions() {
    return this.topicMentions;
  }
  getTopWords() {
    return this.topWords;
  }
  getWordCategories() {
    return this.wordCategories;
  }
  getPersonalAddress() {
    return this.personalAddress;
  }
  getFlaggedPhrases() {
    return this.flaggedPhrases;
  }
  getInterestMentions() {
    return this.interestMentions;
  }
}

export default Report;
