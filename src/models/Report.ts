import SocialScore from './SocialScore';
import Location from './Location';
import WordUsageAlteration from './WordUsageAlteration';

class Report {
  private scores: SocialScore[];
  private fraudScore: SocialScore;
  private overallScore: SocialScore;
  private employabilityScore: SocialScore;
  private loanOutcomeScore: SocialScore;
  private employmentHistory: any[];
  private birthdate: any;
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
  private financialAssessment: any;
  private legitimacy: any;
  private accountFriends: any;
  private accountAge: any;
  private overallSocial: any;
  private wordUsageAlterations: any;
  private employmentScore: any;

  constructor(data?: any) {
    this.accountFriends = 0;
    this.accountAge = 0;
    this.scores = new Array<SocialScore>();
    this.fraudScore = new SocialScore('Fraud Score', data && data.scores && data.scores.fraud ? data.scores.fraud : 0);
    this.scores.push(this.fraudScore);
    this.overallScore = new SocialScore(
      'Overall Score',
      data && data.scores && data.scores.overall ? data.scores.overall : 0,
    );
    this.scores.push(this.overallScore);
    this.employabilityScore = new SocialScore(
      'Employability',
      data && data.scores && data.scores.employed ? data.scores.employed : 0,
    );
    this.scores.push(this.employabilityScore);
    this.loanOutcomeScore = new SocialScore('Loan Outcome', '0');
    this.overallSocial = new SocialScore('Overall Social', '0');
    this.employmentScore = new SocialScore('Employment', '0');
    this.financialAssessment = new SocialScore('Financial Assessment', '0');
    this.legitimacy = new SocialScore('Legitimacy', '0');
    this.scores.push(this.loanOutcomeScore);
    this.employmentHistory = new Array();
    if (data && data.employment && data.employment.history) {
      this.employmentHistory = data.employment.history;
    }
    this.birthdate = new Date();
    this.psych = new Array();
    if (data && data.psych) {
      const psych = data.psych;
      this.psych.push(
        new SocialScore('Openness', (psych && psych.openness ? parseFloat(psych.openness).toFixed(3) : 0).toString()),
      );
      this.psych.push(
        new SocialScore(
          'Conscientiousness',
          (psych && psych.conscientiousness ? parseFloat(psych.conscientiousness).toFixed(3) : 0).toString(),
        ),
      );
      this.psych.push(
        new SocialScore(
          'Extraversion',
          (psych && psych.extraversion ? parseFloat(psych.extraversion).toFixed(3) : 0).toString(),
        ),
      );
      this.psych.push(
        new SocialScore(
          'Agreeableness',
          (psych && psych.agreeableness ? parseFloat(psych.agreeableness).toFixed(3) : 0).toString(),
        ),
      );
      this.psych.push(
        new SocialScore(
          'Neuroticism',
          (psych && psych.neuroticism ? parseFloat(psych.neuroticism).toFixed(3) : 0).toString(),
        ),
      );
      this.psych.push(
        new SocialScore(
          'Deception',
          (psych && psych.deception ? parseFloat(psych.deception).toFixed(3) : 0).toString(),
        ),
      );
      this.psych.push(
        new SocialScore(
          'Freq Swearing',
          (psych && psych.freq_swearing ? parseFloat(psych.freq_swearing).toFixed(3) : 0).toString(),
        ),
      );
      this.psych.push(
        new SocialScore(
          'Freq Crime',
          (psych && psych.freq_crime ? parseFloat(psych.freq_crime).toFixed(3) : 0).toString(),
        ),
      );
    }

    this.socialProximity = new Array();
    this.socialConnectedness = new Array();
    this.topicMentions = new Array();
    this.topWords = new Array();
    this.geoDetail = new Array();
    if (data && data.social) {
      if (data.social.proximity) {
        data.social.proximity.forEach((item: any) => {
          this.socialProximity.push(new SocialScore('Testing', '0%'));
        });
      }
      if (data.social.connectedness) {
        this.socialConnectedness.push(new SocialScore('Facebook Friends', '0'));
        this.socialConnectedness.push(new SocialScore('Twitter Followers', '0'));
        this.socialConnectedness.push(new SocialScore('Twitter Following', '0'));
        this.socialConnectedness.push(new SocialScore('Instagram Followers', '0'));
        this.socialConnectedness.push(new SocialScore('Instagram Following', '0'));
        this.socialConnectedness.push(new SocialScore('LinkedIn Connections', '0'));
      }
    }
    if (data && data.activity) {
      if (data.activity.topicMentions) {
        data.activity.topicMentions.forEach((item: any) => {
          this.topicMentions.push(new SocialScore('Testing', '0'));
        });
      }
      if (data.activity.top_words) {
        data.activity.top_words.forEach((item: any) => {
          this.topWords.push(new SocialScore('Testing', '0'));
        });
      }
      if (data.activity.geo_detail) {
        data.activity.geo_detail.forEach((item: any) => {
          this.geoDetail.push(new Location(0, 0));
        });
      }
    }
    if (data && data.location) {
      this.location = new Location(0, 0);
    }

    this.likelyOutcomeScore = data && data.scores && data.scores.likely_outcome ? data.scores.likely_outcome : null;
    this.wordHighlights = data && data.activity && data.activity.word_highlights ? data.activity.word_highlights : null;
    this.wordCategories = data && data.activity && data.activity.ord_categories ? data.activity.word_categories : null;
    this.personalAddress =
      data && data.activity && data.activity.personal_address ? data.activity.ersonal_address : null;
    this.flaggedPhrases = data && data.activity && data.activity.flagged_phrases ? data.activity.flagged_phrases : null;
    this.interestMentions =
      data && data.activity && data.activity.interest_mentions ? data.activity.interest_mentions : null;
    this.onlineActivity = data && data.activity && data.activity.online ? data.activity.online : null;
    this.spending = data && data.activity && data.activity.spending ? data.activity.spending : null;

    this.wordUsageAlterations = new Array();
    this.wordUsageAlterations.push(new WordUsageAlteration({ description: 'Testing' }));
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
  getBirthdate() {
    return this.birthdate;
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
  getFinancialAssessment() {
    return this.financialAssessment;
  }
  getLegitimacy() {
    return this.legitimacy;
  }
  getAccountFriends() {
    return this.accountFriends;
  }
  getAccountAge() {
    return this.accountAge;
  }
  getOnlineActivity() {
    return this.onlineActivity;
  }
  getSpending() {
    return this.spending;
  }
  getEmploymentHistory() {
    return this.employmentHistory;
  }
  getOverallSocial() {
    return this.overallSocial;
  }
  getWordUsageAlterations() {
    return this.wordUsageAlterations;
  }
  getEmploymentScore() {
    return this.employmentScore;
  }
}

export default Report;
